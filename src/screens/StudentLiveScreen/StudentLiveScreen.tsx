import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

import Header from '../../components/Header';
import Board from '../../components/Board';
import UserList from '../../components/UserList';
import * as S from './styled'

const StudentLiveScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ height: height }}>
        <Header />
        <Board />
      </ScrollView>
      <S.Wrapper>
        <UserList />
        <UserList />
        <UserList />
      </S.Wrapper>
    </SafeAreaView>
  );
};

export default StudentLiveScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: height - 50,
    flex: 1,
  },
});
