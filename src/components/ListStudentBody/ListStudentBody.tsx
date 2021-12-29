import React from 'react';
import {
  View,
  Text,
  StyleSheet,
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import * as S from './styled'

const ListStudentBody = (props) => {
  return (
  
      <S.Container>
          <S.TitleTextContainer>
            <S.WelcomeUserText>Welcome Bradish</S.WelcomeUserText>
            <S.Title2>Choose a student to start with.</S.Title2>
          </S.TitleTextContainer>
          <S.ScrollViewContainer>
            <S.ScrollViewBox horizontal={true}>
              <S.StudentContainer>
                <Icon name="user" size={70} color="#541b86" />
                <S.StudentName>John Doe</S.StudentName>
              </S.StudentContainer>
              <S.StudentContainer>
                <Icon name="user" size={70} color="#541b86" />
                <S.StudentName>John Doe</S.StudentName>
              </S.StudentContainer>
              <S.StudentContainer>
                <Icon name="user" size={70} color="#541b86" />
                <S.StudentName>John Doe</S.StudentName>
              </S.StudentContainer>
            </S.ScrollViewBox>
            <S.mgTop40></S.mgTop40>
            <S.ScrollViewBox horizontal={true}>
              <S.StudentContainer>
                <Icon name="user" size={70} color="#541b86" />
                <S.StudentName>John Doe</S.StudentName>
                <S.StudentClassType>Class:Remote class</S.StudentClassType>
                <S.StudentClassTime>12/07 - 15:00</S.StudentClassTime>
              </S.StudentContainer>
            </S.ScrollViewBox>
          </S.ScrollViewContainer>
      </S.Container>

)
  };
export default ListStudentBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
