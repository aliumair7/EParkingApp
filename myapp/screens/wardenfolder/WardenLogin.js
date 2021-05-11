import { Item } from 'native-base';
import React,{Fragment} from 'react';
import { Image } from 'react-native';
import { StatusBar } from 'react-native';
import { ScrollView } from 'react-native';
import { View,StyleSheet,ImageBackground,Text,SafeAreaView,TextInput,TouchableOpacity } from 'react-native';

import {useSelector,useDispatch}  from 'react-redux'
import colors from '../../assets/colors';
import { images } from '../../assets/images';
import BackButton from '../../Components/BackButton';
import  {loginwarden} from '../../reduxapp/myaction'
import appStyles from '../../styles/appStyles';
import loginStyle from '../../styles/loginStyle';
const WardenLogin = ({navigation}) => {
    const dispatch=useDispatch()
    const[wardenid,setid]=React.useState('')
    const[password,setpassword]=React.useState('')

    const onLogin=()=>{
        dispatch(loginwarden({wardenid,password}))
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
              navigation.navigate('Home');
            }}></BackButton>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[loginStyle.loginbodyContainer]}>
              <View style={[{marginTop: 80}]}>
                <Text style={[appStyles.h1Auth]}>Welcome Warden! </Text>
              </View>
              <View style={[appStyles.mt10]}>
                <Text style={[appStyles.h1Auth, {color: colors.defaultPurple}]}>
                  Sign In{' '}
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
                          Warden Id
                        </Text>
                      </View>

                      <View style={appStyles.mt10}>
                        <Item style={{borderBottomWidth: 0}}>
                          <TextInput
                            placeholder="Enter your id"
                            placeholderTextColor={colors.defaultBlack}
                            keyboardType={'decimal-pad'}
                            value={wardenid}
                            onChangeText={text=>setid(text)}
                           
                            returnKeyType="next"
                            onSubmitEditing={() => {
                              secondTextInput.focus();
                            }}
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
                            
                            returnKeyType="done"
                          
                            blurOnSubmit={false}
                         
                            style={loginStyle.loginInputIcon}></TextInput>
                     
                        </Item>
                       
                      </View>
                      <View
                        style={[
                          appStyles.rowAlign,
                          appStyles.mt20,
                          appStyles.aiCenter,
                        ]}>
                        <TouchableOpacity
                          onPress={() =>
                          {/*  navigation.navigate('AforgotPasswo') */}
                          }>
                          <Text
                            style={[
                              loginStyle.text10smallAuth,
                              {textDecorationLine: 'underline'},
                            ]}>
                            Forgot Password?
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={[
                          appStyles.row,
                          appStyles.aiCenter,
                          appStyles.mv20,
                        ]}>
                        <Text>Login as{'  '}</Text>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('AdminLogin') 
                          }
                          style={loginStyle.loginBtn}>
                          <Text>Admin</Text>
                        </TouchableOpacity>
                      </View>
                      

              
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('WRegistration');
                        }}
                        style={[
                          appStyles.aiCenter,
                          appStyles.jcCenter,
                          appStyles.mv10,
                          appStyles.mb30,
                        ]}>
                        <Text
                          style={[
                            appStyles.h3ServiceHeading,
                            {
                              color: colors.lightPurple,
                              textDecorationLine: 'underline',
                            },
                          ]}>
                          Do you have an account?{' '}
                          <Text style={{color: colors.darkPurple}}>SignUp</Text>
                        </Text>
                      </TouchableOpacity>

                     
                    
                        <TouchableOpacity
                          onPress={()=>onLogin()}
                          style={[loginStyle.loginrightContainer]}>
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


const styles = StyleSheet.create({
    container:{
        flex:1,
       alignItems:'center',
       justifyContent:'center'
    }
    
})
 
export default WardenLogin;