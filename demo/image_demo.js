import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    Image,
    TouchableOpacity,
    View
} from 'react-native';

var imgs = [
    'https://www.baidu.com/img/bd_logo1.png',
    'http://p3.qhmsg.com/t01b7cb83f41d31a8bf.png',
    'http://sqimg.qq.com/qq_product_operations/im/qqlogo/imlogo.png'
];

class MyImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            imgs: this.props.imgs,
        }
    }

    render() {
        return (
            <View style={[styles.flex,{alignItems:'center'}]}>
                <View style={styles.img}>
                    <Image style={styles.img}
                           resizeMode="contain"
                           source={{uri:this.state.imgs[this.state.count]}}></Image>
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={this.goPreview.bind(this)}>
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goNext.bind(this)}>
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    goPreview() {
        var count = this.state.count;
        count--;
        if (count >= 0) {
            this.setState({
                count: count,
            });
        }
    }

    goNext() {
        var count = this.state.count;
        count++;
        if (count < this.state.imgs.length) {
            this.setState({
                count: count,
            });
        }
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    btns: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    btn: {
        width: 60,
        height: 30,
        borderColor: '#0089FF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginRight: 20,
    },
    img: {
        height: 160,
        width: 300,
    }
});

//导出该类作为独立的模块 
export default class ImageDemo extends MyImage {
    render() {
        return (
            <View style={[styles.flex,{marginTop:45}]}>
                <MyImage imgs={imgs}></MyImage>
            </View>
        );
    }
}  