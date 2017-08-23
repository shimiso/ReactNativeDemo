import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    Image,
    Picker,
    TouchableOpacity,
    View
} from 'react-native';

//导出该类作为独立的模块
export default class PickerDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: null,
        }
    }

    render() {
        return (
            <View style={[styles.flex,{marginTop:45,marginLeft:10,marginRight:10}]}>
                <Text style={{fontSize:18}}>Picker组件</Text>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language:lang})}
                    mode="dialog"
                    style={{color:'#f00'}}>
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="js"/>
                    <Picker.Item label="C语言" value="c"/>
                    <Picker.Item label="PHP语言" value="php"/>
                    <Picker.Item label="GO语言" value="go"/>
                </Picker>

                <Text style={{fontSize:16}}>{this.state.language}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
});