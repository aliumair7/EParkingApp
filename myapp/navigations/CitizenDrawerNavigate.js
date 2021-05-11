import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import CitizenHome from '../screens/citizenfolder/CitizenHome';
import PendingChallans from '../screens/citizenfolder/PendingChallans';
import ChallanHistory from '../screens/citizenfolder/ChallanHistory';
import CitizenProfile from '../screens/citizenfolder/CitizenProfile';
import PaymentComponent from '../screens/citizenfolder/PaymentModule';


const Drwaer=createDrawerNavigator()
const HomeStack=createStackNavigator()
const PendingChallanStack=createStackNavigator()
const HistoryChallanStack=createStackNavigator()
const CitizenProfileStack=createStackNavigator()


const HomeStacNavigator=({navigation})=>{
    return(
    <HomeStack.Navigator  screenOptions={{
        headerStyle:{
            backgroundColor:"#009387"
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <HomeStack.Screen       name="CHome"    component={CitizenHome}   
         options={{title:'Home',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#009387" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />
    </HomeStack.Navigator>
)}



const PendingChallanStacNavigator=({navigation})=>{
    return(
    <PendingChallanStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:"#009387"
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <PendingChallanStack.Screen       name="PChallans"    component={PendingChallans}   
         options={{title:'Challan',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#009387" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />

<PendingChallanStack.Screen       name="PaymentChallans"    component={PaymentComponent}   
    
         
         
            />    
    </PendingChallanStack.Navigator>
)}




const HistoryChallanStacNavigator=({navigation})=>{
    return(
    <HistoryChallanStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:"#009387"
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <HistoryChallanStack.Screen       name="HistoryChallan"    component={ChallanHistory}   
         options={{title:'Challan History',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#009387" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />
    </HistoryChallanStack.Navigator>
)}



const CitizenProfileStacNavigator=({navigation})=>{
    return(
    <CitizenProfileStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:"#009387"
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <CitizenProfileStack.Screen       name="CitizenProfile"    component={CitizenProfile}   
         options={{title:'Profile',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#009387" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />
    </CitizenProfileStack.Navigator>
)}   
const CitizenDrawerNavigator = () => {
    return ( 
        <Drwaer.Navigator >
            <Drwaer.Screen      name="Home" component={HomeStacNavigator}  />
            <Drwaer.Screen      name="Pending Challans" component={PendingChallanStacNavigator}  />
            <Drwaer.Screen      name="Challan History" component={HistoryChallanStacNavigator}  />
            <Drwaer.Screen      name="Citizen Profile" component={CitizenProfileStacNavigator}  />
     
        </Drwaer.Navigator>

     );
}
 
export default CitizenDrawerNavigator;