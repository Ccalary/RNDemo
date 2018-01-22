/**
 * Created by chh on 2018/1/22 上午10:11
 */
var appId = '5768B61D059B4D05BE32F8BF1EDFA415';
var customerId = '258a192d00484ace8cb6d98c32744896';
export default class NetUtils{
    /**
     *  GET 请求
     */
    static get(url, params, success, fail, error){
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        console.log(url, params)
        // fetch 请求
        fetch(url,{
            headers:{
                customerId: customerId,
                appId: appId
            },
        })
            .then(response=>response.json())//把response转为json
            .then(responseJson=> { // 拿到上面的转好的json
                console.log(responseJson) // 打印返回结果
                if (responseJson.code == 200){ // 200为请求成功
                   success && success(responseJson.data)
                }else {
                    fail && fail(responseJson.msg)//可以处理返回的错误信息
                }
            })
            .catch(e=>{
                console.log(e)
                error && error(e)
            })
    }

    /**
     *  POST 请求
     */
    static post(url, params, success, fail, error){
        console.log(url,params)
        fetch(url,{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                //媒体格式类型key/value格式
                'Content-Type': 'application/x-www-form-urlencoded',
                customerId: customerId,
                appId: appId
            },
            body: JSON.stringify(params)
        }) .then(response=>response.json())//把response转为json
            .then(responseJson=> { // 拿到上面的转好的json
                console.log(responseJson) // 打印返回结果
                if (responseJson.code == 200){ // 200为请求成功
                    success && success(responseJson.data)
                }else {
                    fail && fail(responseJson.msg)//可以处理返回的错误信息
                }
            })
            .catch(e=>{
                console.log(e)
                error && error(error)
            })
    }
    /**
     *  @images uri数组
     *  @param  FormData格式,没有参数的话传null
     */
    static uploadFile(url,images, params, success, fail, error){
        console.log(url,images)
        let formData = new FormData();
        if (params){
            formData = params;
        }
        for(var i = 0;i<images.length;i++){
            var uri = images[i]
            var date = new Date()
            var name = date.getTime() + '.png'
            let file = {uri: uri, type: 'multipart/form-data', name: name}
            formData.append('file', file)
        }
        console.log(url,formData)
        fetch(url,{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                //媒体格式类型key/value格式
                'Content-Type':'multipart/form-data',
                customerId: customerId,
                appId: appId
            },
            body: formData
        }) .then(response=>response.json())//把response转为json
            .then(responseJson=> { // 拿到上面的转好的json
                console.log(responseJson) // 打印返回结果
                if (responseJson.code == 200){ // 200为请求成功
                    success && success(responseJson.data)
                }else {
                    fail && fail()//可以处理返回的错误信息
                }
            })
            .catch(e=>{
                console.log(e)
                error && error(error)
            })
    }
}
