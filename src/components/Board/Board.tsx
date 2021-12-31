import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';


import * as S from './styled';
import {zoomuser, user1,wave,eye,volume} from './images';

const Board = props => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Left>
          <S.LeftBoard></S.LeftBoard>
        </S.Left>
        <S.Right>
          <S.RightUser>
            <S.TeacherImage source={zoomuser} />
          </S.RightUser>
          <S.RightRow2>
            <View style={{width:'35%'}}>
              <Image
                style={{resizeMode: 'contain', borderRadius: 40,width:'100%'}}
                source={user1}
              />
            </View>
            <View style={{width:'65%',flexDirection:'row',marginTop:45}}>
            <View style={{flex:0.5}}></View>
            <TouchableOpacity style={{flex:1,marginLeft:8,marginRight:8}}>
              <Image style={{ resizeMode: 'contain',width:'100%',height:50}} source={wave} />
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,marginLeft:8,marginRight:8}}>
              <Image style={{ resizeMode: 'contain',width:'100%',height:50}} source={volume} />
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,marginLeft:8,marginRight:8}}>
              <Image style={{ resizeMode: 'contain',width:'100%',height:50}} source={eye} />
            </TouchableOpacity>
            <View style={{flex:0.5}}></View>
           </View>
          </S.RightRow2>
        </S.Right>
      </S.Wrapper>
    </S.Container>
  );
};

export default Board;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
