import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import {FONTS} from '../../constants/theme';

export const HomeStyles = StyleSheet.create({
  locationCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SIZES.font1,
    paddingVertical: SIZES.font1,
    marginTop: SIZES.font1 * 1.2,
    borderRadius: 10,
  },
  lat: {
    color: COLORS.white,
    ...FONTS.body4,
  },
  latitude: {
    color: COLORS.white,
    ...FONTS.body6,
  },
  icon: {
    marginVertical: SIZES.font8,
  },
  homeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: SIZES.font5 * 2,
  },
  button: {
    marginHorizontal: SIZES.font1,
    marginTop: SIZES.font10,
  },
});
