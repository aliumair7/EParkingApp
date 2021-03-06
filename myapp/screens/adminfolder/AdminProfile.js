import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {Text} from 'react-native-elements'
import { StyleSheet,View,Image } from 'react-native';
import {removetoken} from '../../reduxapp/myaction'
import { Avatar } from 'react-native-elements';
import {Title,Card,Button} from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { images } from '../../assets/images';
const AdminProfile = () => {
    
    const users = useSelector(state => state.user)
    const dispatch=useDispatch()

    const deltoken=()=>{
        dispatch(removetoken())
  
      }
    return (  
        <View style={styles.root}>
        <LinearGradient
         colors={["#0033ff","#6bc1ff"]}
         style={{height:"20%"}}
         />
         <View style={{alignItems:"center"}}>
             <Image
            style={{width:140,height:140,borderRadius:140/2,marginTop:-50}}
            source={images.CityTraffic}
            /> 
         </View>
         <View style={{alignItems:"center",margin:15}}>
             <Title>{users.name}</Title>
             <Text style={{fontSize:15}}>{users.role}</Text>
         </View>
         <Card style={styles.mycard} onPress={()=>{
             alert('hello')
         }}>
            <View style={styles.cardContent}>
                <Icon   name="account-outline" size={32} color="#006aff"                                />
              
              <Text style={styles.mytext}>{users.fathername}</Text>
            </View>
         </Card>
         <Card style={styles.mycard} onPress={()=>alert('mobile')}>
            <View style={styles.cardContent}>
            <Icon      name="card-account-details" size={32} color="#006aff"                   />
              <Text style={styles.mytext}>{users.wardenid}</Text>
            </View>
         </Card>
      
         <View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
            <Button 
             icon="account-edit"
             mode="contained"
             theme={theme}
              onPress={() => {
                navigation.navigate('UpdateWarden')
              }}>
                Edit
            </Button>
            <Button 
             icon="delete"
             mode="contained"
             theme={theme}
              onPress={() => deltoken()}>
                Logout
            </Button>
         </View>
        

      </View>
     );
}
 
const theme = {
    colors:{
        primary:"#006aff"
    }
}


const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
cardContent:{
    flexDirection:"row",
    padding:8
},
mytext:{
    fontSize:18,
    marginTop:3,
    marginLeft:5
}
})
export default AdminProfile;