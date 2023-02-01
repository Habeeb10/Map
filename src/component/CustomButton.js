import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';
import {FONTS} from '../constants/theme';

const CustomButton = ({onPress, title, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.container, style]}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.orange,
    height: SIZES.font7 * 3.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SIZES.font1 * 1.4,
    marginTop: SIZES.font1 * 3,
    borderRadius: 10,
  },
  buttonTitle: {
    color: COLORS.white,
    ...FONTS.body5,
  },
});

export default CustomButton;
