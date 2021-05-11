import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {getCitizen, gettoken} from './myapp/reduxapp/myaction'
import { NavigationContainer } from '@react-navigation/native';
import FirstStack from './myapp/navigations/firstStackNavigator';
import DrawerNavigator from './myapp/navigations/DrwaerNavigation';
import PaymentComponent from './myapp/screens/citizenfolder/PaymentModule';
import CitizenDrawerNavigator from './myapp/navigations/CitizenDrawerNavigate';
import HomeScreen from './myapp/screens/adminfolder/HomeScreen';
import AdminDrawerNavigator from './myapp/navigations/AdminDrawerNavigation';

const WrapApp = () => {
    const users = useSelector(state => state.user)
    const citizen = useSelector(state => state.citizens)
    const dispatch=useDispatch()
    
    React.useEffect(()=>{
        setTimeout(()=>{
            dispatch (gettoken())
        },1000)
            
    }

    ,[]) 

    React.useEffect(()=>{
        setTimeout(()=>{
            dispatch (getCitizen())
        },1000)
            
    }

    ,[]) 
    return ( 
        <NavigationContainer>
            {(users && users.role=="Warden") && (<DrawerNavigator/>) 
            || (users && users.role=="Admin") && (<AdminDrawerNavigator />)
            || citizen && (<CitizenDrawerNavigator/>)
            || (<FirstStack/>)}
</NavigationContainer>  
     );
}
 
export default WrapApp;