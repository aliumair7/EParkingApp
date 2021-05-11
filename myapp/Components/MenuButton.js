import React, {Component} from 'react';
import {
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  TouchableHighlight,
  TouchableHighlightBase,
} from 'react-native';
import appStyles from '../styles/appStyles';
import {images} from '../assets/images';
import colors from '../assets/colors';

export default class MenuButton extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.openDrawer();
        }}
        style={{
          backgroundColor: colors.white,
          justifyContent: 'center',
          alignItems: 'center',
          top: 50,
          paddingVertical: 10,
          marginHorizontal: 30,
          borderRadius: 16,
          height: 47,
          width: 47,
          position: 'absolute',
          zIndex: 10000,
        }}>
        <Image
          source={images.menuIcon}
          style={{height: 20, resizeMode: 'contain'}}></Image>
      </TouchableOpacity>
    );
  };
}
