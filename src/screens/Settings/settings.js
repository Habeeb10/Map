import {StyleSheet, Text, View, Switch, Pressable} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../constants';
import {FONTS} from '../../constants/theme';
import Container from '../../component/Container';

const Settings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Container heading={'Settings'}>
      <View style={{paddingHorizontal: SIZES.font10}}>
        <Pressable
          style={styles.locationShare}
          onPress={
            isEnabled === true
              ? () => navigation.navigate('ShareLocation')
              : null
          }>
          <Text style={styles.notification}>Share Location</Text>
          <Switch
            trackColor={{false: COLORS.white, true: COLORS.white}}
            thumbColor={isEnabled ? COLORS.orange : 'white'}
            ios_backgroundColor={COLORS.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Pressable>
        <Pressable style={styles.itemCont}>
          <Text style={styles.notification}>Notification</Text>
        </Pressable>
        <Pressable style={styles.itemCont}>
          <Text style={styles.notification}>Push Notification</Text>
        </Pressable>
        <Pressable style={styles.itemCont}>
          <Text style={styles.notification}>Reset Password</Text>
        </Pressable>
      </View>
    </Container>
  );
};

export default Settings;

const styles = StyleSheet.create({
  notification: {
    color: COLORS.black,
    ...FONTS.body5,
  },
  locationShare: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: SIZES.font1 * 2.5,
    marginTop: SIZES.font10,
  },
  itemCont: {
    height: SIZES.font1 * 1.6,
  },
});
