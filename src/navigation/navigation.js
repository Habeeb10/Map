import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/login';
import HomePage from '../screens/Home/home';
import History from '../screens/History/history';
import {COLORS} from '../constants';
import Settings from '../screens/Settings/settings';
import Map from '../screens/Map/map';
import ShareLocation from '../screens/ShareLocation/location';
import SignIn from '../screens/signin/signin';
import SignUp from '../screens/signup/signup';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <StatusBar translucent={false} backgroundColor={COLORS.black} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ShareLocation" component={ShareLocation} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
