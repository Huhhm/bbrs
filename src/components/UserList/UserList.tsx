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
    
        
            <TouchableOpacity style={{width:'15%',marginTop:8,marginBottom:8}}>
              <Image style={{ resizeMode: 'contain',width:'100%',height:30,borderRadius:30}} source={user1} />
              <Text style={{textAlign:'center',color:'#000',fontSize:11,}}>John Doe</Text>
            </TouchableOpacity>
       
    
      

)
  };
export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
