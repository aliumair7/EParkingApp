import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {Text} from 'react-native-elements'
import { Button,StyleSheet,View } from 'react-native';
import {removetoken} from '../../reduxapp/myaction'
import { Avatar } from 'react-native-elements';
const AdminProfile = () => {
    const users = useSelector(state => state.user)
    const dispatch=useDispatch()

    const deltoken=()=>{
        dispatch(removetoken())
  
      }
    return (  
        <View style={styles.container}>
            <Avatar
  size="xlarge"
  rounded
  title={users.name.substring(0,2)}
  avatarStyle={{ borderWidth: 3, borderColor: 'blue', borderTopLeftRadius: 1 }}
  
  
/>
        <Text h3>{users.wardenid}</Text>
        <Text h2>{users.name}</Text>
        <Text h2>Role:{users.role}</Text>
        
        <Button      title='logout'      onPress={()=>{deltoken()}}                />

        </View>
     );
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'

    }
})
export default AdminProfile;