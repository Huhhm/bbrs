import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';

import LoginHeader from '../components/LoginHeader';
import ListStudentBody from '../components/ListStudentBody';


const ListStudent = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
            <LoginHeader />
            <ListStudentBody />
      </ScrollView>
    </SafeAreaView>
  );
};
export default ListStudent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
