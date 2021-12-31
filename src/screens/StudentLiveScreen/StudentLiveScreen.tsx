import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import Header from '../../components/Header';
import Board from '../../components/Board';
import UserList from '../../components/UserList';


const StudentLiveScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Board />
      </ScrollView>
      <UserList />
    </SafeAreaView>
  );
};

export default StudentLiveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
