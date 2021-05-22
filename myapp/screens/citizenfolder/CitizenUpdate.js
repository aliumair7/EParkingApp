import React from 'react';
import { Text,StatusBar,SafeAreaView,View,Image,TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import colors from '../../assets/colors';
import { images } from '../../assets/images';
import BackButton from '../../Components/BackButton';
import {useSelector,useDispatch} from 'react-redux'
import appStyles from '../../styles/appStyles';
import loginStyle from '../../styles/loginStyle';
import wardenapi from '../../api/WardenApi';
const CitizenUpdate = ({navigation}) => {
    const citizen = useSelector(state => state.citizens)
    const[name,setname]=React.useState('')
    const[fathername,setfathername]=React.useState('')
    const[password,setpassword]=React.useState('')
    const[gmail,setgmail]=React.useState('')
    const[phnumber,setnumber]=React.useState(0)

    React.useEffect(()=>{
        wardenapi.getcitizen(citizen.cnic).then(data=>{
            setname(data.name)
     setfathername(data.fathername)
     setpassword(data.password)
     setgmail(data.email)
     setnumber(data.phonenumber)
            
           }).catch(err=>console.log(err))
           },[])

           const UpdateData=()=>{
            wardenapi.updatecitizen(citizen.cnic,{name,fathername,password,gmail,phnumber})
            .then(data=>{console.log(data)
            navigation.navigate('CitizenProfile')
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
              navigation.navigate('CitizenProfile');
            }}></BackButton>
            <View style={[loginStyle.loginbodyContainer]}>
              <View style={[{marginTop: 80}]}>
                <Text style={[appStyles.h1Auth]}>Welcome {citizen.name}! </Text>
              </View>
              <View style={[appStyles.mt10]}>
                <Text style={[appStyles.h1Auth, {color: colors.defaultPurple}]}>
                 Update Profile{' '}
                </Text>
              </View>
              <View style={{margin:20,alignItems:'center'}}>

        <Input    value={name}           onChangeText={(text)=>setname(text)}      />
        <Input    value={fathername}           onChangeText={(text)=>setfathername(text)}      />
        <Input    value={gmail}           onChangeText={(text)=>setgmail(text)}      />
        <Input    value={phnumber.toString()}          onChangeText={(text)=>setnumber(text)}      />
    
             
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
 
export default CitizenUpdate;