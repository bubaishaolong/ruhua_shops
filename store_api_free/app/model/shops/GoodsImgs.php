<?php
/**
 * Created by 如花商城-多商户系统
 * User: 黔域科技
 * QQ群: 728615087
 */

namespace app\model\shops;


use bases\BaseModel;

class GoodsImgs extends BaseModel
{
    public function getBannerImgsAttr($v)
    {
        return explode(",",$v);
    }

    public function getDetailImgsAttr($v)
    {
        if(!empty($v)){
            return explode(",",$v);
        }else{
            return "";
        }

    }

}