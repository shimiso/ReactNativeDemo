/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReduxDemo01 extends Component {
  constructor(props) {
        super(props);//这一句不能省略，照抄即可
        this.state = {
           counter:0,
        };
    }

  render() {
    return (
      <View style={styles.container}>
      <Text>{this.state.counter}</Text>
        <Counter1 onPress={this._press.bind(this)} c={this.state.counter}/>
         <Counter1 onPress={this._press.bind(this)} c={this.state.counter} />
         <Counter2 onPress={this._press.bind(this)} c={this.state.counter} />
      </View>
    );
  }

  _press(){
     this.setState({
        counter:this.state.counter+1
      });
  }

  

}

class Counter1 extends Component{
  constructor(props) {
        super(props);//这一句不能省略，照抄即可
        this.state = {
           counter:0,
        };
    }


    render(){
      return(
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:20,marginRight:20}}>计数器：{this.props.c}</Text>
        <Text style={{fontSize:20}} onPress={this.props.onPress}>点击我</Text>
        </View>
      );
    }

    addCounter(){
      this.setState({
        counter:this.state.counter+1
      });
    }
}

class Counter2 extends Component{
  constructor(props) {
        super(props);//这一句不能省略，照抄即可
        this.state = {
           counter:0,
        };
    }


    render(){
      return(
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:20,marginRight:20}}>计数器：{this.props.c}</Text>
        <Text style={{fontSize:20}} onPress={this.props.onPress}>点击我</Text>
        </View>
      );
    }

    addCounter(){
      this.setState({
        counter:this.state.counter+1
      });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReduxDemo01', () => ReduxDemo01);
