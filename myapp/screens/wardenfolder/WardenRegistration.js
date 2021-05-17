import React,{Fragment} from 'react';
import { View,StyleSheet,Text,TextInput,SafeAreaView,StatusBar,ScrollView,TouchableOpacity,Image} from 'react-native';

import wardenapi from '../../api/WardenApi';
import Toast from 'react-native-toast-message';
import appStyles from '../../styles/appStyles';
import BackButton from '../../Components/BackButton';
import loginStyle from '../../styles/loginStyle';
import colors from '../../assets/colors';
import { images } from '../../assets/images';
import { Item } from 'native-base';

const WardenRegistration = ({navigation}) => {
    const[name,setname]=React.useState('')
    const[fathername,setfname]=React.useState('')
    const[wardenid,setid]=React.useState('')
    const[password,setpassword]=React.useState('')
    const[datas,setdata]=React.useState(false)

   const onRegistration=()=>{
    wardenapi.wardenreg({name,fathername,wardenid,password}).then(
        data=>{  Toast.show({type: 'success',position: 'top',
        text1: 'Success',
        text2: 'Warden  Registered Successfully👋',
        visibilityTime: 5000,}); (navigation.navigate('WLogin') )}).catch(err=>{
            Toast.show({type: 'error',position: 'top',
            text1: 'Error',
            text2: err.response.data,
        visibilityTime: 5000,});
            console.log(err)})
        


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
              navigation.navigate('WLogin');
            }}></BackButton>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[loginStyle.loginbodyContainer]}>
              <View style={[{marginTop: 80}]}>
                <Text style={[appStyles.h1Auth]}>Welcome Warden! </Text>
              </View>
              <View style={[appStyles.mt10]}>
                <Text style={[appStyles.h1Auth, {color: colors.defaultPurple}]}>
                  Sign Up{' '}
                </Text>
              </View>
             
                  <Fragment>
                    <View style={[appStyles.mt30]}>
                      <View style={[appStyles.row, appStyles.aiCenter]}>
                        <View style={appStyles.pr10}>
                          <Image
                            source={images.cnic}
                            style={[
                              appStyles.Icon15Auth,
                              {tintColor: colors.defaultRed},
                            ]}></Image>
                        </View>
                        <Text style={loginStyle.text14mediumAuth}>
                          Full Name
                        </Text>
                      </View>

                      <View style={appStyles.mt10}>
                        <Item style={{borderBottomWidth: 0}}>
                          <TextInput
                            placeholder="Enter your full name"
                            placeholderTextColor={colors.defaultBlack}
                            keyboardType={'default'}
                            value={name}
                            onChangeText={(text)=>setname(text)}
                         
                            returnKeyType="next"
                         
                            blurOnSubmit={false}
                            style={loginStyle.loginInputIcon}></TextInput>
                        </Item>
                       
                      </View>
                      {/* Fathername */}

                      <View
                        style={[
                          appStyles.row,
                          appStyles.aiCenter,
                          appStyles.mt10,
                        ]}>
                        <View style={appStyles.pr10}>
                          <Image
                            source={images.person}
                            style={[
                              appStyles.Icon15Auth,
                              {tintColor: colors.defaultRed},
                            ]}></Image>
                        </View>
                        <Text style={loginStyle.text14mediumAuth}>Father Name</Text>
                      </View>

                      <View style={appStyles.mt10}>
                        <Item style={{borderBottomWidth: 0}}>
                          <TextInput
                            placeholder="Enter your father name"
                            placeholderTextColor={colors.defaultBlack}
                          
                            keyboardType={'default'}
                            value={fathername}
                            onChangeText={(text)=>setfname(text)}
                          
                          
                            returnKeyType="next"
                           
                            blurOnSubmit={false}
                            style={loginStyle.loginInputIcon}></TextInput>
                        </Item>
                       
                      </View>

                      <View style={[appStyles.row, appStyles.mt10]}>
                        <View style={appStyles.pr10}>
                          <Image
                            source={images.lock}
                            style={[appStyles.Icon15Auth]}></Image>
                        </View>
                        <Text style={loginStyle.text14mediumAuth}>
                          Password
                        </Text>
                      </View>
                      <View style={appStyles.mt10}>
                        <Item style={{borderBottomWidth: 0}}>
                          <TextInput
                            placeholder="Enter your password"
                            placeholderTextColor={colors.defaultBlack}
                            secureTextEntry={true}
                            value={password}
                         onChangeText={(text)=>setpassword(text)}
                           
                            returnKeyType="next"
                          
                            blurOnSubmit={false}
                            
                            style={loginStyle.loginInputIcon}></TextInput>
                          
                        </Item>
                        
                      </View>

                      {/* Father Name */}
                      <View
                        style={[
                          appStyles.row,
                          appStyles.aiCenter,
                          appStyles.mt10,
                        ]}>
                        <View style={appStyles.pr10}>
                          <Image
                            source={images.cnic}
                            style={[
                              appStyles.Icon15Auth,
                              {tintColor: colors.defaultRed},
                            ]}></Image>
                        </View>
                        <Text style={loginStyle.text14mediumAuth}>
                          Warden Id
                        </Text>
                      </View>

                      <View style={appStyles.mt10}>
                        <Item style={{borderBottomWidth: 0}}>
                          <TextInput
                            placeholder="Enter your Warden Id"
                            placeholderTextColor={colors.defaultBlack}
                            keyboardType={'default'}
                            value={wardenid}
                           onChangeText={(text)=>setid(text)}
                         
                            returnKeyType="next"
                          
                            blurOnSubmit={false}
                            style={loginStyle.loginInputIcon}></TextInput>
                        </Item>
                       
                      </View>

                    
                      

                     
                     
                        <TouchableOpacity
                          onPress={()=>onRegistration()}
                          style={[
                            loginStyle.loginrightContainer,
                            appStyles.mt10,
                          ]}>
                          <Image
                            style={[loginStyle.icon30]}
                            source={images.rightArrow}></Image>
                        </TouchableOpacity>
                     
                    </View>
                  </Fragment>
             
            </View>
          </ScrollView>
        </SafeAreaView>
      </>

     );
}


 
export default WardenRegistration;