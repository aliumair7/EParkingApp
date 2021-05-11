import React from 'react';
import { StatusBar } from 'react-native';
import { Text, View,StyleSheet, ImageBackground } from 'react-native';
import colors from '../assets/colors';
import BackButton from '../Components/BackButton';
import appStyles from '../styles/appStyles';

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
        borderColor:'blue',
        borderWidth:4,
        alignSelf:'center',
        borderRadius:15,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'#CCFFE5',
        color:'purple',
        marginBottom:20
        
        

        

    }
})
 
export default HomeScreen;