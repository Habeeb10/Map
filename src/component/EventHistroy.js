import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {hp, wp} from '../constants/utils';
import {COLORS, SIZES} from '../constants';
import {FONTS} from '../constants/theme';

const EventHistoryCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Damon Perez</Text>
      <View style={styles.locationContainer}>
        <View>
          <Text style={styles.lat}>48 8’ 36. 44862” N</Text>
          <Text style={styles.latitude}>Latitude</Text>
        </View>
        <View>
          <Text style={styles.lat}>48 8’ 36. 44862” E</Text>
          <Text style={styles.latitude}>Longitude</Text>
        </View>
      </View>
      <View style={styles.durationCont}>
        <Text style={styles.duration}>Duration</Text>
        <Text style={styles.duration}>12:45:52</Text>
      </View>
      <View style={styles.durationCont}>
        <Text style={styles.duration}>23 June 2019</Text>
        <Text style={styles.duration}>17:56</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SIZES.font10,
    paddingVertical: SIZES.font8,
    marginTop: SIZES.font1,
    borderRadius: 10,
    shadowColor: COLORS.ash,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
  },
  lat: {
    color: COLORS.white,
    ...FONTS.body7,
    fontWeight: '600',
  },
  duration: {
    color: COLORS.white,
    ...FONTS.body7,
    fontWeight: '400',
  },
  latitude: {
    color: COLORS.white,
    ...FONTS.body7,
    alignSelf: 'center',
  },
  locationContainer: {
    borderColor: COLORS.ash,
    borderWidth: 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: SIZES.font9,
    padding: SIZES.font10,
  },
  name: {
    color: COLORS.white,
    ...FONTS.body5,
  },
  durationCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(162),
    marginBottom: hp(15),
  },
});

export default EventHistoryCard;
