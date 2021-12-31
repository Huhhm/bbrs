import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator,DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import LoginScreen from '../screens/Login';
import ChooseStudent from '../screens/ChooseStudent';
import StudentLiveScreen from '../screens/StudentLiveScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return(
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ChooseStudent"
      component={ChooseStudent}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="StudentLiveScreen"
      component={StudentLiveScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
  )
};
const Navigation = () => {
  return (
    <Drawer.Navigator initialRouteName="StudentLiveScreen">
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Drawer.Screen
      name="ChooseStudent"
      component={ChooseStudent}
      options={{headerShown: false}}
    />
    <Drawer.Screen
      name="StudentLiveScreen"
      component={StudentLiveScreen}
      options={{headerShown: false}}
    />
    </Drawer.Navigator>
    
  );
};

export default Navigation;
