import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScree';
import CitizenRegistration from '../screens/citizenfolder/CitizenRegistration';
import CitizenLogin from '../screens/citizenfolder/CitizenLogin';
import WardenLogin from '../screens/wardenfolder/WardenLogin';
import WardenRegistration from '../screens/wardenfolder/WardenRegistration';
import SplashScreen from '../screens/SplahScreen';
import AdminLogin from '../screens/adminfolder/AdminLogin';

const Stack = createStackNavigator();
const FirstStack = () => {

    return ( 
        <Stack.Navigator headerMode="none" >
          <Stack.Screen     name="Splash"  component={SplashScreen}       />
        <Stack.Screen name="Home" component={HomeScreen} 
            
        
        />
        <Stack.Screen     name="CRegistration"  component={CitizenRegistration}       />
        <Stack.Screen     name="CLogin"  component={CitizenLogin}      />
        <Stack.Screen     name="WRegistration"  component={WardenRegistration}    />
        <Stack.Screen     name="WLogin"  component={WardenLogin}         />
        <Stack.Screen     name="AdminLogin"  component={AdminLogin}      />

      </Stack.Navigator>

      );
}
 
export default FirstStack;