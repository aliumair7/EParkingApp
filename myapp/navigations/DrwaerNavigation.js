import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {createDrawerNavigator} from '@react-navigation/drawer'
import WardenHome from '../screens/wardenfolder/WardenHome';
import WardenLocation from '../screens/wardenfolder/WardenLocation';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import AddChallan from '../screens/wardenfolder/AddChallan';
import WardenProfile from '../screens/wardenfolder/WardenProfile';
import DataDetect from '../screens/wardenfolder/DataDetect';
import ChallanDetails from '../screens/wardenfolder/Challandetails';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerContent} from './DrawerConten'
import {
    Image,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
    TouchableHighlight,
    TouchableHighlightBase,
  } from 'react-native';
  import appStyles from '../styles/appStyles';
  import {images} from '../assets/images';
  import colors from '../assets/colors';
import UpdateWarden from '../screens/wardenfolder/UpdateWarden';

const Tab = createMaterialBottomTabNavigator();
const Drwaer=createDrawerNavigator()
const HomeStack=createStackNavigator()
const  LocationStack=createStackNavigator()
const   ChallanStack=createStackNavigator()
const   ProfileStack=createStackNavigator()
const   MChallanStack=createStackNavigator()

const HomeStacNavigator=({navigation})=>{
    return(
    <HomeStack.Navigator  screenOptions={{
        headerStyle:{
            backgroundColor:'#28D6C0'
        },
        headerTintColor:colors.white,
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <HomeStack.Screen       name="wHome"    component={WardenHome}   
         options={{title:'Challans',
        
        headerLeft:()=>( 
        <Icon.Button    name="ios-menu" size={25} backgroundColor="#28D6C0"
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />
    </HomeStack.Navigator>
)}
const LocationStacNavigator=({navigation})=>{
    return(
    <LocationStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:"#28D6C0"
        },
        headerTintColor:colors.white,
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <LocationStack.Screen       name="wLocation"    component={WardenLocation}  
         options={{title:'Map',
         headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#28D6C0" 
          onPress={()=>{navigation.openDrawer()}} />)
         }}    />
    </LocationStack.Navigator>
    )}

const ChallanStacNavigator=({navigation})=>{
    return(
    <ChallanStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:"#28D6C0"
        },
        headerTintColor:colors.white,
        headerTitleStyle:{
            fontWeight:'bold' }   
    }
    }>
        <LocationStack.Screen       name="wchallan"    component={AddChallan}    options={{title:'AddChallan',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#28D6C0" 
         onPress={()=>{navigation.openDrawer()}} />)
        }}   />
    </ChallanStack.Navigator>
    )}


    const ProfileStacNavigator=({navigation})=>{
        return(
        <ProfileStack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:"#28D6C0"
            },
            headerTintColor:colors.white,
            headerTitleStyle:{
                fontWeight:'bold' }   
        }
        }>
            <ProfileStack.Screen       name="Profile"    component={WardenProfile}   
             options={{title:'Profile',
            headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#28D6C0" 
             onPress={()=>{navigation.openDrawer()}} />)
            }}   />
             <ProfileStack.Screen       name="UpdateWarden"    component={UpdateWarden}   
             options={{title:'Update Profile', headerShown:false,
            headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#28D6C0" 
             onPress={()=>{navigation.openDrawer()}} />)
            }}   />
        </ProfileStack.Navigator>
        )}


        const MStacNavigator=({navigation})=>{
            return(
            <ChallanStack.Navigator screenOptions={{
                headerStyle:{
                    backgroundColor:"#28D6C0"
                },
                headerTintColor:colors.white,
                headerTitleStyle:{
                    fontWeight:'bold' }   
            }
            }>
                <ChallanStack.Screen       name="Challan"    component={DataDetect}    options={{title:'Add Challan',
                headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#28D6C0" 
                 onPress={()=>{navigation.openDrawer()}} />)
                }}   />
                <ChallanStack.Screen       name="challandetails"    component={ChallanDetails}    options={{title:'ChallanDetails',
                
                }}   />
            </ChallanStack.Navigator>
            )}
            
            
const MainTab=()=>{
    return (
        <Tab.Navigator
          initialRouteName="wHome"
          activeColor="#e91e63"
          barStyle={{ backgroundColor: '#28D6C0' }}
        >
          <Tab.Screen
            name="wHome"
            component={HomeStacNavigator}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={colors.white} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Challan"
            component={MStacNavigator}
            options={{
              tabBarLabel: 'Add',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="plus-outline" color={colors.white} size={28} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStacNavigator}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={colors.white} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    )
}            
const DrawerNavigator = () => {
    return ( 
        <Drwaer.Navigator initialRouteName='wHome' drawerContent={props => <DrawerContent  {...props}/>}>

            <Drwaer.Screen      name="home" component={MainTab}  />
            <Drwaer.Screen      name="location" component={LocationStacNavigator}  />
      
          
        </Drwaer.Navigator>

     );
}
 /*
<Drwaer.Screen      name="Location"  component={LocationStacNavigator} />
<Drwaer.Screen      name="AddChallan"  component={ChallanStacNavigator} />
<Drwaer.Screen      name="Profile"  component={ProfileStacNavigator} />
<Drwaer.Screen      name="MakeChallan"  component={MStacNavigator} />  */
export default DrawerNavigator;