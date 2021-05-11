import React from 'react';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {StyleSheet,View,Text} from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import wardenapi from '../../api/WardenApi';
import {useSelector,useDispatch} from 'react-redux'



const WardenLocation =() => {
  const Markers = useSelector(state => state.Marker)
  const[locations,setlocations]=React.useState([])
    const[latitude,setlatitude]=React.useState(0)
    const[longitude,setlongitude]=React.useState(0)
    
    
    React.useEffect(()=>{
      wardenapi.getallplaces().then(data=>{console.log(data)
      setlocations(data)
      }).catch(err=>console.log(err))

  }

  ,[Markers])

    React.useEffect(()=>{
        Geolocation.getCurrentPosition(position=>{
            setlatitude(position.coords.latitude)
            setlongitude(position.coords.longitude)
        }, error => console.log(error.message),{enableHighAccuracy:false, timeout:20000}              )

    },[])
    
    return(
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
 
      
      >
        
        {  locations.map((marker,index)=>{
          return(
                    <Marker    key={index}   coordinate={{longitude:marker.longitude,latitude:marker.latitude}}  title="MY current location"   /> 
   
         ) })
           
          }
      </MapView>
      <GooglePlacesAutocomplete
    

    placeholder='Search'
    minLength={1} // minimum length of text to search
                  autoFocus={false}
                  fetchDetails={true}
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      console.log(details.geometry)
        setlatitude(details.geometry.location.lat)
        setlongitude(details.geometry.location.lng)
      
    }}
    query={{
      key: 'AIzaSyB7UoIU88kGuokct6VpdGUDfJ_ZLvmOCWU',
      language: 'en',
    }}
  />
      <Text>  {latitude} </Text>
          <Text> {longitude} </Text>  
          
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
    
      height: 400,
      width: 400,
     
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      position:'absolute',
      marginTop:50
    },
   });

export default WardenLocation;