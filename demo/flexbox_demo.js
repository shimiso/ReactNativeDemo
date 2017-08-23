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


class MyFlexBox extends Component {
    render() {
        return (
            <View style={styles.flex}>

                <View style={styles.container}>

                    <View style={[styles.item,styles.center]}>
                        <Text style={styles.font}>酒店</Text>
                    </View>

                    <View style={[styles.item,styles.lineLeftRight]}>
                        <View style={[styles.center,styles.flex,styles.lineCenter]}>
                            <Text style={styles.font}>海外酒店</Text>
                        </View>
                        <View style={[styles.center,styles.flex]}>
                            <Text style={styles.font}>特惠酒店</Text>
                        </View>
                    </View>

                    <View style={[styles.item]}>
                        <View style={[styles.center,styles.flex,styles.lineCenter]}>
                            <Text style={styles.font}>团购</Text>
                        </View>
                        <View style={[styles.center,styles.flex]}>
                            <Text style={styles.font}>客栈,公寓</Text>
                        </View>
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        height: 84,
        //指定主轴的方向 flex-direction:row（默认值）| row-reverse | column | column-reverse
        flexDirection: 'row',
        borderRadius: 5,
        padding: 2,
        backgroundColor: '#FF0067',
    },
    item: {
        flex: 1,
        height: 80,
    },
    center: {
        //用来定义伸缩项目在主轴线的对齐方式，语法为：justify-content:flex-start（默认值） | flex-end | center | space-between | space-around
        justifyContent: 'center',
        //用来定义伸缩项目在交叉轴上的对齐方式，语法为：align-items:flex-start（默认值） | flex-end | center | baseline | stretch
        alignItems: 'center',
    },
    flex: {
        flex: 1,
    },
    font: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    lineLeftRight: {
        borderLeftWidth: 1 / PixelRatio.get(),//左边框线宽度 1个像素的点
        borderRightWidth: 1 / PixelRatio.get(),//右边框线宽度
        borderColor: '#fff',
    },
    lineCenter: {
        borderBottomWidth: 1 / PixelRatio.get(),//底部框线宽度
        borderColor: '#fff',
    },
});

//导出该类作为独立的模块 
export default class FlexBoxDemo extends MyFlexBox {
}