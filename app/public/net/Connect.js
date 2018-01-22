/**
 * Created by chh on 2018/1/22 下午1:44
 */

import NetUtils from './NetUtils'
import NetAddr from './NetAddr'

export default class Connect{
    /**
     *  个人信息接口
     */
    static getCustomerInfo(success){
        NetUtils.get(NetAddr.customerInfo, null,response=>{
            success && success(response)
        })
    }

    /**
     *  我的订单列表
     */
    static  postMyOrderList(params, success){
        NetUtils.post(NetAddr.myOrderList, params, response=>{
            success && success(response)
        })
    }

   /**
    *  上传图片
    */
    static uploadImageFile(images, params, success){
        NetUtils.uploadFile(NetAddr.upLoadImage, images, params, response=>{
            success && success(response)
        })
     }
}
