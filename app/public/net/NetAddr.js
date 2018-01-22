/**
 * Created by chh on 2018/1/22 下午2:09
 */

var host = 'http://192.168.0.70:8038'

var NetAddr = {
    // 个人信息
    customerInfo: host + '/ApiShop/CustomerInfo',
    // 我的订单列表
    myOrderList: host + '/ApiShop/MyOrderList',
    // 上传图片
    upLoadImage: host + '/ApiResource/UploadImage'
}

module.exports = NetAddr