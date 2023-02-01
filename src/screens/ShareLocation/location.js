import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../component/Container';
import {COLORS, SIZES} from '../../constants';
import {FONTS} from '../../constants/theme';
import {Tick} from '../../assets/svg';
import NearbyUsers, {Users} from '../../component/NearbyUsers';

const ShareLocation = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Container heading={'Share Location'}>
      <View style={{padding: SIZES.font9}}>
        <View style={styles.topBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor={COLORS.black}
          />
          <Text style={styles.doneText}>Done</Text>
        </View>
        <View style={styles.selectAllBox}>
          <Text style={styles.doneText}>Select all</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.checkBox}
            onPress={() => setChecked(!checked)}>
            {checked ? <Tick /> : null}
          </TouchableOpacity>
        </View>
        {Users.map((item, index) => {
          return (
            <NearbyUsers
              key={index}
              icon={item.icon}
              user={item.user}
              distance={item.distance}
              onPress={() => setChecked(item.user)}
              isChecked={item.user === checked}
            />
          );
        })}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  topBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.font9,
  },
  doneText: {
    color: COLORS.black,
    ...FONTS.body6,
    fontWeight: '600',
  },
  textInput: {
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 20,
    width: '80%',
    height: SIZES.font1 * 1.5,
    ...FONTS.body6,
    fontWeight: '600',
    paddingHorizontal: SIZES.font7,
  },
  checkBox: {
    width: SIZES.font3,
    height: SIZES.font3,
    borderColor: COLORS.black,
    borderWidth: 1,
    marginLeft: SIZES.font10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectAllBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: SIZES.font1,
  },
});

export default ShareLocation;
