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
  View,
    NavigatorIOS
} from 'react-native';

export default class app extends Component {
  render() {

    return (
      <View style={styles.container}>
  <NavigatorIOS
    initialRoute={{
      component: MyScene,
          title: 'My Initial Scene',
    }}
    style={{flex: 1}}
  />
      </View>
    );
  }
}

export default class MyScene extends Component {
  render(){
    return (
        <div>fafa</div>
    )
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

AppRegistry.registerComponent('app', () => app);
