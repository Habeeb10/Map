import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';
import {FONTS} from '../constants/theme';

const HomeCard = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.font1 * 1.7,
    paddingVertical: SIZES.font2 * 1.2,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
  },
  title: {
    color: COLORS.white,
    ...FONTS.body6,
    fontWeight: '500',
  },
});

export default HomeCard;
