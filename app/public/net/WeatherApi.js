/**
 * Created by chh on 2018/1/31 上午9:24
 */

import CryptoJS from 'crypto-js';

var UID = "UEF18559CB"; // 测试用 用户ID，请更换成您自己的用户ID
var KEY = "iidwrpwqe94fu6ke"; // 测试用key，请更换成您自己的 Key
var API = "http://api.seniverse.com/v3/weather/now.json"; // 获取天气实况
var LOCATION = "wuxi"; // 除拼音外，还可以使用 v3 id、汉语等形式
// 获取当前时间戳
var ts = Math.floor((new Date()).getTime() / 1000);
// 构造验证参数字符串
var str = "ts=" + ts + "&uid=" + UID;
// 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
// 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
sig = encodeURIComponent(sig);
str = str + "&sig=" + sig;
// 构造最终请求的 url
var url = API + "?location=" + LOCATION + "&" + str + "&callback=foo";

export default class WeatherApi{

    static requestWeather() {
          fetch(url,{

          }).then(response=>response.json())//把response转为json
              .then(responseJson=> { // 拿到上面的转好的json
                  console.log(responseJson) // 打印返回结果

              })
              .catch(e=>{
                  console.log(e)
              })
    }
}
