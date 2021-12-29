import React from 'react';
import {View, Text,Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login';
import ListStudent from '../screens/ListStudent';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
      
      <Stack.Navigator>
        <Stack.Screen name="Login"  component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="ListStudent"  component={ListStudent} options={{headerShown: false}} />
      </Stack.Navigator>
    
  );
};

export default Navigation;
