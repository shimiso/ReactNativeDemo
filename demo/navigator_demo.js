/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    ScrollView,
    Text,
    View
} from 'react-native';
import {
    Navigator
}from 'react-native-deprecated-custom-components';


//导出该类作为独立的模块
// Navigator就是控制页面跳转的，像一个路由的似的，可以控制页面的流转。
export default class NavigatorDemo extends Component {
    render() {
        let defaultName = 'List';
        let defaultComponent = List;
        return (
            <Navigator
                //这个指定了默认的页面，也就是启动app之后会看到界面的第一屏。 需要填写两个参数: name 跟 component。
                initialRoute={{ name: defaultName, component: defaultComponent }}
                //configureScene: 场景转换动画配置。
                //在RN看来，从一个页面切换到另外一个页面，就是从一个场景切换到另外一个场景，这里配置的是场景动画信息，比如Navigator.SceneConfigs.FadeAndroid 就是淡入淡出
                configureScene={
                    (route) =>{
                        //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
                        return Navigator.SceneConfigs.FadeAndroid;
                    }
            }
                //renderScene: 渲染场景，读取initialRouter传来的数据，确定显示那些内容。
                renderScene={
                    (route, navigator) =>{
                    let Component = route.component;
                    //...运算符将一个数组变为参数序列
                    return <Component {...route.params} navigator={navigator} />
            }
          }/>


        );
    }
}


class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            user: null,
        };
    }

    _pressButton() {
        //或者写成 const navigator = this.props.navigator; 
        const {navigator} = this.props;
        //为什么这里可以取得 props.navigator?请看上文:  
        //<Component {...route.params} navigator={navigator} />  
        //这里传递了navigator作为props 
        const self = this;
        if (navigator) {
            navigator.push({
                name: 'Detail',
                component: Detail,
                params: {
                    id: this.state.id,
                    //从详情页获取user
                    getUser: function (user) {
                        self.setState({
                            user: user
                        })
                    }
                }
            })
        }
    }


    render() {
        if (this.state.user) {
            return (
                <View>
                    <Text style={styles.list_item}>用户信息: { JSON.stringify(this.state.user) }</Text>
                </View>
            );
        } else {
            return (
                <ScrollView style={styles.flex}>
                    <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>☆ 豪华邮轮济州岛3日游</Text>
                    <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>☆ 豪华邮轮台湾3日游</Text>
                    <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>☆ 豪华邮轮地中海8日游</Text>
                </ScrollView>
            );
        }


    }


}


const USER_MODELS = {
    1: {name: 'mot', age: 23},
    2: {name: '晴明大大', age: 25}
};


class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null
        };
    }

    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id
        this.setState({
            id: this.props.id
        });
    }

    _pressButton() {
        const {navigator} = this.props;
        // if(this.props.getUser) {
        //     let user = USER_MODELS[this.props.id];
        //     this.props.getUser(user);
        // }

        if (navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:List了
            navigator.pop();
        }
    }


    render() {


        return (

            <ScrollView>
                <Text style={styles.list_item}>传递过来的用户id是：{this.state.id}</Text>
                <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>点击我可以跳回去</Text>

            </ScrollView>

        );
    }
}


const styles = StyleSheet.create({

    flex: {
        flex: 1,
    },
    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center',
    },


});
