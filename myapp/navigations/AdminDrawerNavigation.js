import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import HomeScreen from '../screens/adminfolder/HomeScreen';
import UnpaidChallans from '../screens/adminfolder/UnpaidAllchallans';
import AdminProfile from '../screens/adminfolder/AdminProfile';
import AllWardens from '../screens/adminfolder/Wardens';
import AddMarkers from '../screens/adminfolder/AddLocationMarker';
import AddRecords from '../screens/adminfolder/AddRecords';



const Drwaer=createDrawerNavigator()
const HomeStack=createStackNavigator()
const UnpaidChallanStack=createStackNavigator()
const MangeWardensStack=createStackNavigator()
const AdminProfileStack=createStackNavigator()
const AddMarkerStack=createStackNavigator()
const AddRecordsStack=createStackNavigator()




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

        <HomeStack.Screen       name="AHome"    component={HomeScreen}   
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

        <AdminProfileStack.Screen       name="AdminProfile"    component={AdminProfile}   
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



const AddRecordsStacNavigator=({navigation})=>{
    return(
    <AddRecordsStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:"#009387"
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
        
    }

    }>
             <AddRecordsStack.Screen       name="ARecords"    component={AddRecords}   
         options={{title:'Add Owner Records',
        headerLeft:()=>( <Icon.Button    name="ios-menu" size={25} backgroundColor="#009387" 
         onPress={()=>{navigation.openDrawer()}} />)
        }} 
         
         
            />
        
    </AddRecordsStack.Navigator>
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
            <Drwaer.Screen      name="Add Records" component={AddRecordsStacNavigator}  />
            <Drwaer.Screen      name="Add Location" component={AddMarkerStacNavigator}  />
            <Drwaer.Screen      name="Profile" component={AdminProfileStacNavigator}  />
           
     
        </Drwaer.Navigator>

     );
}
 
export default AdminDrawerNavigator;