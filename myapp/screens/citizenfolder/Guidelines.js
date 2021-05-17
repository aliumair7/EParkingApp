import { Text,View } from 'react-native';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
import appStyles from '../../styles/appStyles';
import loginStyle from '../../styles/loginStyle';
import colors from '../../assets/colors';
import { ScrollView,StyleSheet } from 'react-native';
const Guidelines = () => {
    return ( 
        <>
        <StatusBar
         translucent={true}
         barStyle={'dark-content'}
         backgroundColor={'transparent'}></StatusBar>
           <SafeAreaView style={appStyles.body}>
           <ScrollView showsVerticalScrollIndicator={false}>

           <View >
              
              <View style={[appStyles.mt10]}>
                <Text style={[appStyles.h1Auth, {color: colors.defaultPurple}]}>
                  Read These Instructions
                </Text>
              </View>
              <View style={{margin:10,padding:5}}>
              <Text style={styles.qstyle}>Does the parking fee is on hourly basis?</Text>
              <Text style={styles.ansstyle}>Currently, EPARK is not charging on hourly basis.</Text>
              <Text style={styles.qstyle}>What are the operational timings of parking area?</Text>
              <Text style={styles.ansstyle}>Operational timings of parking area vary from site to site and the company provides the services in operational timings only.</Text>
              <Text style={styles.qstyle}>What is the penalty if parking ticket is misplaced by the user?</Text>
              <Text style={styles.ansstyle}>There is no penalty in case parking ticket is misplaced by the user.</Text>
              <Text style={styles.qstyle}>What are the documents required to take the car if ticket is misplaced?</Text>
              <Text style={styles.ansstyle}>The person is required to show original ID card and have to submit the following information:</Text>
 <Text>A photocopy of National ID card</Text>
<Text>Name</Text>
<Text>Father Name</Text>
<Text>Contact no.</Text>
<Text>Address</Text>
<Text>Car registration number</Text>

<Text style={styles.qstyle}>What is the penalty if car is parked in no parking area?</Text>
              <Text style={styles.ansstyle}>What is the penalty if car is parked in no parking area?</Text>
              <Text style={styles.qstyle}>What if user doesn’t take the parking ticket?</Text>
              <Text style={styles.ansstyle}>Strict action will be taken against violators / defaulters.</Text>
              </View>

              </View>
              </ScrollView>
           </SafeAreaView>
         </>

     );
}
const styles = StyleSheet.create({
    qstyle:{
        fontWeight:'bold',
        fontSize:20
    },
    ansstyle:{}
    
})
 
export default Guidelines;