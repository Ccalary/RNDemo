import { AppRegistry } from 'react-native';
import App from './app/App';


// 注册组件，程序入口
// 第一个参数：注册模块名称
// 第二个参数：函数，此函数返回组件类名，程序启动就会自动去加载这个组件
AppRegistry.registerComponent('RNDemo', () => App);
