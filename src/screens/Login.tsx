import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Button,
  Dimensions,
} from 'react-native';

import LoginHeader from '../components/LoginHeader';
import LoginBody from '../components/LoginBody';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LoginHeader />
        <LoginBody />

        <Button onPress={() => navigation.navigate('ListStudent')}  title="ListStudent" />
      </ScrollView>
    </SafeAreaView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
