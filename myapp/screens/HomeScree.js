import React from 'react';
import { StatusBar } from 'react-native';
import { Text, View,StyleSheet, ImageBackground } from 'react-native';
import BackButton from '../Components/BackButton';
import appStyles from '../styles/appStyles';
import colors from '../assets/colors';

const HomeScreen = ({navigation}) => {
    return ( 
        <>
          <StatusBar
          translucent={true}
          barStyle={'dark-content'}
          backgroundColor={'transparent'}></StatusBar>
          <BackButton
            onPress={() => {
              navigation.navigate('Splash');
            }}></BackButton>
         
        
    
<ImageBackground style={{width:"100%", height:"100%",resizeMode: "cover"}}  source={require('../assets/background.jpg')} >


        <View style={styles.container}>
        
            
            <Text style={styles.txt1} onPress={()=>navigation.navigate('CLogin')}>  Go to Citizen Login </Text>
            <Text style={styles.txt1} onPress={()=>navigation.navigate('WLogin')}>  Go to Warden Login </Text>
        </View>
        </ImageBackground>
        </>
     );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    txt1:{
        width:'70%',
        borderColor:'#28D6C0',
        borderWidth:4,
        alignSelf:'center',
        borderRadius:15,
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        backgroundColor:'#28D6C0',
        color:colors.white,
        marginBottom:20
        
        

        

    }
})
 
export default HomeScreen;