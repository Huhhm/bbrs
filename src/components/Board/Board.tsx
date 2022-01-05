import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  MaxVideoView,
  MinVideoView,
  RtcConfigure,
} from 'agora-rn-uikit/Components';
import {MaxUidConsumer} from 'agora-rn-uikit/src/MaxUidContext';
import LocalControls from 'agora-rn-uikit/src/Controls/LocalControls';
import * as S from './styled';
import {zoomuser, user1, wave, eye, volume} from './images';


const Board = props => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Left>
          <S.LeftBoard></S.LeftBoard>
        </S.Left>
        <S.Right>
          <S.RightUser>
            <MaxUidConsumer >
              {maxUsers =>
                maxUsers[0] ? (
                  <MaxVideoView user={maxUsers[0]} key={maxUsers[0].uid} />
                ) : null
              }
            </MaxUidConsumer>
          </S.RightUser>
          <S.RightRow2>
            <View style={{width: '35%'}}>
              <Image
                style={{resizeMode: 'contain', borderRadius: 40, width: '100%'}}
                source={user1}
              />
            </View>
            <View style={{width: '65%', marginTop: 140}}>
              
              
            <LocalControls showButton={true} />
             
             
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
