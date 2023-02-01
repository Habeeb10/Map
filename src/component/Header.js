import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowBack} from '../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES} from '../constants';
import {FONTS} from '../constants/theme';

const Header = ({heading}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <ArrowBack />
      </TouchableOpacity>
      <Text style={styles.heading}>{heading}</Text>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.font9,
    justifyContent: 'space-between',
    backgroundColor: COLORS.secondary,
    height: SIZES.font10 * 6.5,
    width: '100%',
  },
  heading: {
    ...FONTS.body5,
    fontWeight: '500',
    color: COLORS.black,
  },
});

export default Header;
