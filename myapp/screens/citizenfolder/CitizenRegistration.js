import React from 'react';
import { View,StyleSheet,KeyboardAvoidingView,Platform,StatusBar,ScrollView,SafeAreaView,Image,TextInput,TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Text,Button ,Input} from 'react-native-elements';
import {images} from '../../assets/images';
import loginStyle from '../../styles/loginStyle';
import appStyles from '../../styles/appStyles';
import colors from '../../assets/colors';
import wardenapi from '../../api/WardenApi';
//import Toast from 'react-native-simple-toast';
import Toast from 'react-native-toast-message';
import BackButton from '../../Components/BackButton';
import { Item } from 'native-base';

const CitizenRegistration = ({navigation}) => {
    const[name,setname]=React.useState('')
    const[fathername,setfname]=React.useState('')
    const[email,setgmail]=React.useState('')
    const[password,setpassword]=React.useState('')
    const[idcardnumber,setcnic]=React.useState('')
    const[phonenumber,setnumber]=React.useState()
    


    const onRegistration=()=>{
        wardenapi.citizenreg({name,fathername,idcardnumber,phonenumber,password,email}).then(data=>{
            Toast.show({type: 'success',position: 'top',
            text1: 'Success',
            text2: 'Successfully Registered 👋',
            visibilityTime: 5000,}); 
            (navigation.replace('CLogin') )})
            .catch(err=>{
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
              navigation.navigate('CLogin');
            }}></BackButton>
             <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[loginStyle.loginbodyContainer]}>
              <View style={[{marginTop: 20}]}>
                <Text style={[appStyles.h1Auth]}>Welcome Citizen! </Text>
              </View>
              
              <View style={[appStyles.mt10]}>
                <Text style={[appStyles.h1Auth, {color: colors.defaultPurple}]}>
                  Sign Up{' '}
                </Text>
              </View>




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
                            onChangeText={text=>setname(text)}
                            onBlur={() => console.log("hello") }
                            returnKeyType="next"
                            onSubmitEditing={() => {
                              this.secondTextInput.focus();
                            }}
                            blurOnSubmit={false}
                            style={loginStyle.loginInputIcon}></TextInput>
                            </Item>
            
                        
                          </View>

                           {/* Email */}

                      <View
                        style={[
                          appStyles.row,
                          appStyles.aiCenter,
                          appStyles.mt10,
                        ]}>
                        <View style={appStyles.pr10}>
                          <Image
                            source={images.email}
                            style={[
                              appStyles.Icon15Auth,
                              {tintColor: colors.defaultRed},
                            ]}></Image>
                        </View>
                        <Text style={loginStyle.text14mediumAuth}>Email</Text>
                      </View>

                      <View style={appStyles.mt10}>
                      <Item style={{borderBottomWidth: 0}}>
                        
                          <TextInput
                            placeholder="Enter your email"
                            placeholderTextColor={colors.defaultBlack}
                            
                            keyboardType={'email-address'}
                            value={email}
                            onChangeText={(text)=>setgmail(text)}
                            returnKeyType="next"
                            
                            blurOnSubmit={false}
                            style={loginStyle.loginInputIcon}></TextInput>
                            </Item>
                      </View>

{/* password */}
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
                            
                            value={password}
                            onChangeText={(text)=>setpassword(text)}
                           secureTextEntry={true}
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
                            source={images.person}
                            style={[
                              appStyles.Icon15Auth,
                              {tintColor: colors.defaultRed},
                            ]}></Image>
                        </View>
                        <Text style={loginStyle.text14mediumAuth}>
                          Father Name
                        </Text>
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


  {/* Cnic */}
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
                        <Text style={loginStyle.text14mediumAuth}>CNIC</Text>
                      </View>

                      <View style={appStyles.mt10}>
                      <Item style={{borderBottomWidth: 0}}>
                     
                          <TextInput
                            
                            placeholder="Enter your CNIC"
                            placeholderTextColor={colors.defaultBlack}
                            keyboardType={'decimal-pad'}
                            value={idcardnumber}
                            onChangeText={(text)=>setcnic(text)}
                          
                            returnKeyType="next"
                            
                            blurOnSubmit={false}
                            style={loginStyle.loginInputIcon}></TextInput>
                            </Item>
                        
                      </View>
                        {/* Phone Number */}

                      {/* Cnic */}
                      <View
                        style={[
                          appStyles.row,
                          appStyles.aiCenter,
                          appStyles.mt10,
                        ]}>
                        <View style={appStyles.pr10}>
                          <Image
                            source={images.phone}
                            style={[
                              appStyles.Icon15Auth,
                              {tintColor: colors.defaultRed},
                            ]}></Image>
                        </View>
                        <Text style={loginStyle.text14mediumAuth}>
                          Phone Number
                        </Text>
                      </View>

                      <View style={appStyles.mt10}>
                      <Item style={{borderBottomWidth: 0}}>
                        
                          <TextInput
                           
                            placeholder="Enter your phone number"
                            placeholderTextColor={colors.defaultBlack}
                            keyboardType={'decimal-pad'}
                            value={phonenumber}
                            onChangeText={(text)=>setnumber(text)}
                            
                            returnKeyType="done"
                            
                            blurOnSubmit={false}
                            style={loginStyle.loginInputIcon}></TextInput>
                            </Item>
                        
                      </View>
                      <TouchableOpacity
                          onPress={()=>{onRegistration()}}
                          style={[
                            loginStyle.loginrightContainer,
                            appStyles.mt10,
                          ]}>
                          <Image
                            style={[loginStyle.icon30]}
                            source={images.rightArrow}></Image>
                        </TouchableOpacity>


        </View>
        
        </View>
        </ScrollView>
        </SafeAreaView>
        </>
     );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
    
})
 
export default CitizenRegistration;