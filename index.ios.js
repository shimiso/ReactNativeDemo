/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import ImageDemo from './demo/image_demo';
import FlexBoxDemo from './demo/flexbox_demo';
import PickerDemo from './demo/picker_demo';

AppRegistry.registerComponent('ReactNativeDemo', () => ImageDemo);
