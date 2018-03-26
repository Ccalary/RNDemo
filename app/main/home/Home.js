/**
 * Created by chh on 2018/1/21 下午4:54
 */

import React, { Component } from 'react';
import WeatherApi from '../../public/net/WeatherApi';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class Home extends Component {

    componentDidMount(){
        WeatherApi.requestWeather();
    }

    render(){
        return(
           <View style={styles.container}>
               <Text>你好啊，我是界面1</Text>
           </View>
        )
    }
}

//创建样式表
const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center'
    }

});