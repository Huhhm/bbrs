import React from 'react';
import {
  View,
  Text,
  StyleSheet,
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './styled'

const LoginBody = (props) => {
  return (
  
      <S.Container>
          <S.ViewTitle>SignIn</S.ViewTitle>
          <S.mgTop40></S.mgTop40>
          <S.InputBox>
              <S.Input placeholder="Username"/>
          </S.InputBox>
          <S.mgTop30></S.mgTop30>
          <S.InputBox>
              <S.Input placeholder="Password" />
          </S.InputBox>
          <S.fPasswordBox><S.fPassword>Forgot Password ?</S.fPassword></S.fPasswordBox>

          <S.submit>
              <S.submitText>Sign In</S.submitText>
          </S.submit>
      </S.Container>

)
  };
export default LoginBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
