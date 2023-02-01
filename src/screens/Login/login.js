import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import CustomButton from '../../component/CustomButton';
import CustomInput from '../../component/CustomInput';
import {COLORS, SIZES} from '../../constants';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <CustomInput
        label="Username"
        value={username}
        onChange={username => setUsername(username)}
      />
      <CustomInput
        label="Password"
        value={password}
        onChange={password => setPassword(password)}
        isPassword
      />
      <CustomButton
        title="Proceed"
        onPress={() => {
          if (!username && !password) {
            Alert.alert('Required fields', 'please input all fields');
          } else {
            navigation.navigate('Home');
            setUsername('');
            setPassword('');
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SIZES.font1 * 2,
    backgroundColor: COLORS.white,
  },
});

export default Login;
