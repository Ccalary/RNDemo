/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//1.加载React,Componet组件
import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Images from './resource/Images';
import Home from './main/home/Home';
import Mine from './main/mine/Mine'
//2.加载原生组件
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//3.自定义组件，作为程序入口组件
export default class App extends Component<{}> {
    constructor(props){
        super(props);
        this.state={
            selectedTab:'Event'
        }
    }
  //当加载组件的时候，就会调用render方法，去渲染组件
  render() {
    return (

        <View style={styles.container}>
            <TabNavigator>
              <TabNavigator.Item
                //设置选中的位置
                selected={this.state.selectedTab === 'Event'}
                //标题
                title='Event'
                //标题样式
                titleStyle={styles.tabText}
                //选中样式
                selectedTitleStyle={styles.selectedTabText}
                //图标
                renderIcon={()=> <Image style={styles.icon} source={Images.tab.tab_use}></Image>}
                //选中图标
                renderSelectedIcon={()=> <Image style={styles.icon} source={Images.tab.tab_use_pre}></Image>}
                //点击事件
                onPress={()=>this.setState({selectedTab:'Event'})}>
                <Home/>
            </TabNavigator.Item>
            <TabNavigator.Item
                //设置选中的位置
                selected={this.state.selectedTab === 'Log'}
                //标题
                title='Log'
                //标题样式
                titleStyle={styles.tabText}
                //选中样式
                selectedTitleStyle={styles.selectedTabText}
                //图标
                renderIcon={()=> <Image style={styles.icon} source={Images.tab.tab_mine}></Image>}
                //选中图标
                renderSelectedIcon={()=> <Image style={styles.icon} source={Images.tab.tab_mine_pre}></Image>}
                //点击事件
                onPress={()=>this.setState({selectedTab:'Log'})}>
                <Mine></Mine>
            </TabNavigator.Item>

          </TabNavigator>
      </View>
    );
  }
}

//4.创建样式表
// 传入一个样式对象，根据样式对象中的描述，创建样式表
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    tabText:{
        fontSize:10,
        color:'black'
    },
    selectedTabText:{
        fontSize:10,
        color:'#1b76d0',
    },
    icon:{
        width:22,
        height:22
    }
});
