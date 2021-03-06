<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/11/26 0026
 * Time: 16:32
 */

namespace app\services;


use app\model\Order as OrderModel;
use app\model\PtItem as PtItemModel;
use app\model\shops\MainOrder;
use app\model\shops\ShopOrder;
use think\facade\Db;
use think\facade\Log;
use app\model\FxRecord as FxRecordModel;
use app\model\User as UserModel;
use app\model\ShopRecord as ShopRecordModel;

class NotifyService
{
    //异步接收微信回调，更新订单状态
    public function NotifyEditOrder($orderNo)
    {
        $str = substr($orderNo, 0, 1);
        Log::error('支付回调' . $str);
        if ($str == 'M') {
            return $this->upMainOrder($orderNo);
        } else {
            return $this->upOrder($orderNo);
        }

    }

    //更新订单状态
    private function upMainOrder($orderNo)
    {
        Log::error('更新主订单');
        Db::startTrans();
        try {
            //Lock方法是用于数据库的锁机制;
            $main_order = MainOrder::where('order_num', $orderNo)->find();
            if ($main_order['payment_state'] == 0 ) {
                $main_order->save(['payment_state' => 1]);//更新订单状态为已支付
                $mid=$main_order->id;
                $data['payment_state']= 1;
                $data['pay_time']= time();
                (new ShopOrder)->where('mid',$mid)->update($data);
            }
            Db::commit();
            return true;
        } catch (\Exception  $ex) {
            Db::rollback();// 回滚事务
            Log::error('主订单与拆分订单更新失败:' . $ex->getMessage());
            return false;
        }
    }


    //更新订单状态
    private function upOrder($orderNo)
    {
        try {
            //Lock方法是用于数据库的锁机制;
            $order = OrderModel::with(['ordergoods', 'users','invitecode'])->where('order_num', $orderNo)->lock(true)->find();

            if ($order['payment_state'] == 0 && $order['state'] == 0) {
                OrderModel::where('order_id', $order['order_id'])->update(['payment_state' => 1, 'pay_time' => time()]);//更新订单状态为已支


                event('ReduceStock', $order);//扣除库存
                event('InvoiceLog', $order);//检查是否需要开发票
                event('SendGzhDeliveryMessage', [$order, 1, '']);//公众号发送模板消息通知管理员

                if ($order['payment_type'] == 'wx') {
                    event('SendGzhDeliveryMessage', [$order, 5, $order['user_id']]);//公众号发送模板消息通知用户
                } else if ($order['payment_type'] == 'xcx') {
                    //小程序发送模板消息

                }
            }
        }catch (\Exception  $ex) {
            Log::error('更新订单Notify:' . $ex->getMessage());
            return false;
        }
        return true;
    }

    //更新订单状态
    private function upPtOrder($orderNo)
    {
        try {
            //Lock方法是用于数据库的锁机制;
            $order = OrderModel::with(['ordergoods', 'users'])->where('order_num', $orderNo)->lock(true)->find();
            $item = PtItemModel::with('user')->where('id', $order['item_id'])->find();
            if ($order['payment_state'] == 0 && $order['state'] == 0) {
                $order->save(['payment_state' => 1, 'pay_time' => time()]);//更新订单状态为已支付
                if ($order['is_captain'] == 1 && $order['user_id'] == $item['user_id']) {
                    $data['state'] = 1;
                }
                $data['pay_user'] = $item['pay_user'] + 1;
                if ($data['pay_user'] == $item['user_num']) {
                    $data['state'] = 2;
                }
                $item->save($data);
                event('ReduceStock', $order);//扣除库存
                if ($data['state'] == 2) {
                    OrderModel::where(['item_id' => $item['id'], 'payment_state' => 1])->update(['pt_state' => 2]);
                    $ids = OrderModel::where('item_id', $item['id'])->where('payment_state', 1)->column('user_id');
                    event('SendGzhDeliveryMessage', [$item, 3, $ids]);//拼团成功发送公众号模板消息
                }
                $res['order_goods'] = $order;
                if ($order['payment_type'] == 'wx') {
                    event('SendGzhDeliveryMessage', [$order, 5, $order['user_id']]);//公众号发送模板消息通知用户
                } else if ($order['payment_type'] == 'xcx') {
                    //小程序发送模板消息
                }

            }
        } catch (\Exception  $ex) {
            Log::error('更新订单Notify:' . $ex->getMessage());
            return false;
        }
        return true;
    }
}