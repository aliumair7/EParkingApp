import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import HomeScreen from '../screens/adminfolder/HomeScreen';
import UnpaidChallans from '../screens/adminfolder/UnpaidAllchallans';
import AdminProfile from '../screens/adminfolder/AdminProfile';
import AllWardens from '../screens/adminfolder/Wardens';
import AddMarkers from '../screens/adminfolder/AddLocationMarker';



const Drwaer=createDrawerNavigator()
const HomeStack=createStackNavigator()
const UnpaidChallanStack=createStackNavigator()
const MangeWardensStack=createStackNavigator()
const AdminProfileStack=createStackNavigator()
const AddMarkerStack=createStackNavigator()




const HomeStacNavigator=({navigation})=>{
    return(
    <HomeStack.Navigator headerMode="none" screenOptions={{
        headerStyle:{
            backgroundColor:"#009387"
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <HomeStack.Screen       name="CHome"    component={HomeScreen}   
         options={{title:'Home',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#009387" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />
    </HomeStack.Navigator>
)}



const UnpaidChallanStacNavigator=({navigation})=>{
    return(
    <UnpaidChallanStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:"#009387"
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <UnpaidChallanStack.Screen       name="PChallans"    component={UnpaidChallans}   
         options={{title:'Challan',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#009387" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            


    
         
         
            />    
    </UnpaidChallanStack.Navigator>
)}



const AdminProfileStacNavigator=({navigation})=>{
    return(
    <AdminProfileStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:"#009387"
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <AdminProfileStack.Screen       name="CitizenProfile"    component={AdminProfile}   
         options={{title:'Profile',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#009387" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />
    </AdminProfileStack.Navigator>
)}   



const ManageWardensStacNavigator=({navigation})=>{
    return(
    <MangeWardensStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:"#009387"
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <MangeWardensStack.Screen       name="Wardens"    component={AllWardens}   
         options={{title:'Wardens',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#009387" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />
    </MangeWardensStack.Navigator>
)}   




const AddMarkerStacNavigator=({navigation})=>{
    return(
    <AddMarkerStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:"#009387"
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>

        <AddMarkerStack.Screen       name="AddLocation"    component={AddMarkers}   
         options={{title:'Add No Parking Areas Markers',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#009387" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />
    </AddMarkerStack.Navigator>
)}  
const AdminDrawerNavigator = () => {
    return ( 
        <Drwaer.Navigator>
            <Drwaer.Screen      name="Home" component={HomeStacNavigator}  />
            <Drwaer.Screen      name="Unpaid Challans" component={UnpaidChallanStacNavigator}  />
            <Drwaer.Screen      name="Wardens" component={ManageWardensStacNavigator}  />
            <Drwaer.Screen      name="Add Location" component={AddMarkerStacNavigator}  />
            <Drwaer.Screen      name="Profile" component={AdminProfileStacNavigator}  />
           
     
        </Drwaer.Navigator>

     );
}
 
export default AdminDrawerNavigator;