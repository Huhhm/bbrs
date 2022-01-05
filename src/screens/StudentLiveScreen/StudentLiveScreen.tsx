import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
  MaxVideoView,
  MinVideoView,
  RtcConfigure,
} from 'agora-rn-uikit/Components';
import {PropsInterface, VideoRenderMode} from 'agora-rn-uikit';
import {PropsProvider} from 'agora-rn-uikit/src/PropsContext';
import {MinUidConsumer} from 'agora-rn-uikit/src/MinUidContext';
import Header from '../../components/Header';
import Board from '../../components/Board';
import UserList from '../../components/UserList';
import * as S from './styled';

const StudentLiveScreen = () => {
  const [videoCall, setVideoCall] = useState(true);
  const props: PropsInterface = {
    rtcProps: {
      appId: '70abdaa4fad34bdc9159df4e68572953',
      channel: 'hello123',
      token:
        '00670abdaa4fad34bdc9159df4e68572953IAD60uoGGEIA486gZo1GwpMwV5CloZ5SJA3NPVH+0NXHE90PGogAAAAAEADKVPAlNu/WYQEAAQA379Zh',
    },
    styleProps: {
      iconSize: 20,
      maxViewStyles: {
        width: '100%',
      },
      minViewContainer: {
        width: '100%',
      },
      minViewStyles: {
        
      },
      localBtnStyles: {
        muteLocalVideo: {
          width: 30,
          height: 30,
        },
        muteLocalAudio: {
          width: 30,
          height: 30,
        },
        switchCamera: {
          width: 30,
          height: 30,
        },
        endCall: {
          opacity: 0,
          width: 0,
          height: 0,
        },
      },
      videoMode: {
        max: VideoRenderMode.Hidden,
        min: VideoRenderMode.Hidden,
      },
      remoteBtnStyles: {
        muteRemoteAudio: {opacity: 0, width: 0, height: 0},
        muteRemoteVideo: {opacity: 0, width: 0, height: 0},
        remoteSwap: {opacity: 0, width: 0, height: 0},
        minCloseBtnStyles: {opacity: 0, width: 0, height: 0},
      },
    },
    callbacks: {
      EndCall: () => setVideoCall(false),
    },
  };
  return (
    <PropsProvider value={props}>
      <SafeAreaView style={styles.container}>
        <RtcConfigure>
          <ScrollView style={{height: height}}>
            <Header />
            <Board />
          </ScrollView>
          <S.Wrapper>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{
                width: '100%',
              }}>
              <MinUidConsumer>
                {minUsers =>
                  minUsers.map(user => (
                    <View
                      style={{
                        borderRadius: 40,
                        height: 50,
                        width: 50,
                        overflow: 'hidden',
                        backgroundColor: 'red',
                      }}>
                      <MinVideoView
                        user={user}
                        key={user.uid}
                        showOverlay={true}
                      />
                    </View>
                  ))
                }
              </MinUidConsumer>
            </ScrollView>
          </S.Wrapper>
        </RtcConfigure>
      </SafeAreaView>
    </PropsProvider>
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
