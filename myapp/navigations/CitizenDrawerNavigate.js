import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import CitizenHome from '../screens/citizenfolder/CitizenHome';
import PendingChallans from '../screens/citizenfolder/PendingChallans';
import ChallanHistory from '../screens/citizenfolder/ChallanHistory';
import CitizenProfile from '../screens/citizenfolder/CitizenProfile';
import PaymentComponent from '../screens/citizenfolder/PaymentModule';
import colors from '../assets/colors';
import         {CitizenDrawerContent}        from './CitizenDrawerContent'
import Guidelines from '../screens/citizenfolder/Guidelines';


const Drwaer=createDrawerNavigator()
const HomeStack=createStackNavigator()
const PendingChallanStack=createStackNavigator()
const HistoryChallanStack=createStackNavigator()
const CitizenProfileStack=createStackNavigator()
const GuidelineStack=createStackNavigator()


const HomeStacNavigator=({navigation})=>{
    return(
    <HomeStack.Navigator  screenOptions={{
        headerStyle:{
            backgroundColor:"#28D6C0"
        },
        headerTintColor:colors.white,
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <HomeStack.Screen       name="CHome"    component={CitizenHome}   
         options={{title:'Home',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#28D6C0" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />
    </HomeStack.Navigator>
)}

const GuidelineStacNavigator=({navigation})=>{
    return(
    <GuidelineStack.Navigator  screenOptions={{
        headerStyle:{
            backgroundColor:"#28D6C0"
        },
        headerTintColor:colors.white,
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <GuidelineStack.Screen       name="CGuideline"    component={Guidelines}   
         options={{title:'Guidelines for Parking',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#28D6C0" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />
    </GuidelineStack.Navigator>
)}


const PendingChallanStacNavigator=({navigation})=>{
    return(
    <PendingChallanStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:"#28D6C0"
        },
        headerTintColor:colors.white,
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <PendingChallanStack.Screen       name="PChallans"    component={PendingChallans}   
         options={{title:'Challan',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#28D6C0" 
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
            backgroundColor:"#28D6C0"
        },
        headerTintColor:colors.white,
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <HistoryChallanStack.Screen       name="HistoryChallan"    component={ChallanHistory}   
         options={{title:'Challan History',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#28D6C0" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />
    </HistoryChallanStack.Navigator>
)}



const CitizenProfileStacNavigator=({navigation})=>{
    return(
    <CitizenProfileStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:"#28D6C0"
        },
        headerTintColor:colors.white,
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <CitizenProfileStack.Screen       name="CitizenProfile"    component={CitizenProfile}   
         options={{title:'Profile',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#28D6C0" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />
    </CitizenProfileStack.Navigator>
)}   
const CitizenDrawerNavigator = () => {
    return ( 
        <Drwaer.Navigator initialRouteName='CHome' drawerContent={props => <CitizenDrawerContent  {...props}/>}>
     <Drwaer.Screen      name="Citizen Home" component={HomeStacNavigator}  />
<Drwaer.Screen      name="Pendig Challans" component={PendingChallanStacNavigator}  />
            <Drwaer.Screen      name="Challan History" component={HistoryChallanStacNavigator}  />
            <Drwaer.Screen      name="Citizen Profile" component={CitizenProfileStacNavigator}  />
            <Drwaer.Screen      name="Citizen Guideline" component={GuidelineStacNavigator}  />
  
      
    </Drwaer.Navigator>


/*        <Drwaer.Navigator >
          <Drwaer.Screen      name="Home" component={HomeStacNavigator}  />
            <Drwaer.Screen      name="Pending Challans" component={PendingChallanStacNavigator}  />
            <Drwaer.Screen      name="Challan History" component={HistoryChallanStacNavigator}  />
            <Drwaer.Screen      name="Citizen Profile" component={CitizenProfileStacNavigator}  />
     
        </Drwaer.Navigator>  */

     );
}
 
export default CitizenDrawerNavigator;