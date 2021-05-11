import React,{ Fragment} from 'react';
import { View,StyleSheet } from 'react-native';
import { Text,Button ,Input} from 'react-native-elements';
import wardenapi from '../../api/WardenApi';
import {useSelector,useDispatch}  from 'react-redux'
import { logincitizen } from '../../reduxapp/myaction';
import { StatusBar } from 'react-native';
import { SafeAreaView,ScrollView } from 'react-native';
import appStyles from '../../styles/appStyles';
import loginStyle from '../../styles/loginStyle';
import colors from '../../assets/colors';
import { images } from '../../assets/images';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Item } from 'native-base';
import { TextInput } from 'react-native';
import BackButton from '../../Components/BackButton';

const CitizenLogin = ({navigation}) => {
    const dispatch=useDispatch()
    const[cnic,setgmail]=React.useState('')
    const[password,setpassword]=React.useState('')
    

    const onLogin=()=>{
        
        dispatch(logincitizen({cnic,password}))
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
                <Text style={[appStyles.h1Auth]}>Welcome Citizen! </Text>
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
                        <Text style={loginStyle.text14mediumAuth}>CNIC</Text>
                      </View>

                      <View style={appStyles.mt10}>
                        <Item style={{borderBottomWidth: 0}}>
                          <TextInput
                            placeholder="Enter your CNIC"
                            placeholderTextColor={colors.defaultBlack}
                            keyboardType={'decimal-pad'}
                            value={cnic}
                            onChangeText={(text)=>setgmail(text)}   
                            
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
                           {/* navigation.navigate('forgetpassword')    */}
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
                            navigation.navigate('WLogin') 
                          }
                          style={loginStyle.loginBtn}>
                          <Text>Warden</Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                            {
                            navigation.navigate('CRegistration');  }
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
                          onPress={()=>{onLogin()}}  
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
 
export default CitizenLogin;