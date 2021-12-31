import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text

} from 'react-native';
import { user1 } from './images'
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './styled'

const UserList = (props) => {
  return (
    <S.Container>
        <S.Wrapper>
           
            <TouchableOpacity style={{width:'20%',marginLeft:'auto',marginRight:'auto'}}>
              <Image style={{ resizeMode: 'contain',width:'100%',height:50,borderRadius:30}} source={user1} />
              <Text style={{textAlign:'center'}}>John Doe</Text>
            </TouchableOpacity>
            
        
        </S.Wrapper>
    </S.Container>
      

)
  };
export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
