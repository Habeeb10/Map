import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../constants';
import {FONTS} from '../constants/theme';

const CustomInput = ({label, placeholder, value, onChange, isPassword}) => {
  const [show, setShow] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.textInput}
          value={value}
          onChangeText={onChange}
          secureTextEntry={show && isPassword}
        />
        {isPassword ? (
          <TouchableOpacity onPress={() => setShow(!show)} activeOpacity={0.8}>
            <Text style={styles.showText}>{show ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.font1,
    marginTop: SIZES.font1,
  },
  label: {
    marginBottom: SIZES.font10,
    color: COLORS.black,
    ...FONTS.body5,
  },
  textInput: {
    width: '80%',
    paddingRight: SIZES.font10,
    ...FONTS.body7,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.ash,
    height: SIZES.font7 * 3.2,
    borderRadius: 10,
    paddingHorizontal: SIZES.font10,
  },
  showText: {
    color: COLORS.black,
    ...FONTS.body7,
  },
});

export default CustomInput;
