import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native';
import { Text,StatusBar,SafeAreaView,View } from 'react-native';
import {useSelector,useDispatch} from 'react-redux'
import wardenapi from '../../api/WardenApi';
import colors from '../../assets/colors';
import { images } from '../../assets/images';
import BackButton from '../../Components/BackButton';
import appStyles from '../../styles/appStyles';
import loginStyle from '../../styles/loginStyle';
const UpdateWarden = ({navigation}) => {
    const users = useSelector(state => state.user)
    const[name,setname]=React.useState('')
    const[fathername,setfathername]=React.useState('')
    const[password,setpassword]=React.useState('')


    React.useEffect(()=>{
 wardenapi.getwarden(users.wardenid).then(data=>{setname(data.name)
     setfathername(data.fathername)
     setpassword(data.password)
    }).catch(err=>console.log(err))
    },[])
    const UpdateData=()=>{
        wardenapi.updatewarden(users.wardenid,{name,fathername,password})
        .then(data=>{console.log(data)
        navigation.navigate('Profile')
        }).catch(err=>console.log(err))
    }
    return ( 
        <>
        <StatusBar
          translucent={true}
          barStyle={'dark-content'}
          backgroundColor={'transparent'}></StatusBar>

        <SafeAreaView style={appStyles.body}>
        <BackButton
            onPress={() => {
              navigation.navigate('Profile');
            }}></BackButton>
            <View style={[loginStyle.loginbodyContainer]}>
              <View style={[{marginTop: 80}]}>
                <Text style={[appStyles.h1Auth]}>Welcome {users.name}! </Text>
              </View>
              <View style={[appStyles.mt10]}>
                <Text style={[appStyles.h1Auth, {color: colors.defaultPurple}]}>
                 Update Profile{' '}
                </Text>
              </View>
              <View style={{margin:20,alignItems:'center'}}>

        <Input    value={name}           onChangeText={(text)=>setname(text)}      />
        <Input    value={fathername}           onChangeText={(text)=>setfathername(text)}      />
    
             
        <TouchableOpacity
                          onPress={()=>UpdateData()}
                          style={[loginStyle.loginrightContainer]}>
                          <Image
                            style={[loginStyle.icon30]}
                            source={images.rightArrow}></Image>
                        </TouchableOpacity>

        </View>
        </View>
        
        </SafeAreaView>

        </>
     );
}
 
export default UpdateWarden;