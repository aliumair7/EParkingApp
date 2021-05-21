import React from 'react'
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {StyleSheet,View,Text} from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import wardenapi from '../../api/WardenApi';
import {useSelector,useDispatch} from 'react-redux'
import { AddMarkerbyAdmin } from '../../reduxapp/myaction';
const AddMarkers = () => {
  const dispatch=useDispatch()
    const[latitude,setlatitude]=React.useState(0)
    const[longitude,setlongitude]=React.useState(0)
    const[lat,setlat]=React.useState()
    const[long,setlong]=React.useState()
    const[marker,setmarker]=React.useState()


    React.useEffect(()=>{
        Geolocation.getCurrentPosition(position=>{
            setlatitude(position.coords.latitude)
            setlongitude(position.coords.longitude)
        }, error => console.log(error.message),{enableHighAccuracy:false, timeout:20000}              )

    },[])
    
    if(lat && long){
      dispatch(AddMarkerbyAdmin({lat,long}))
    
    }  

    return ( 
        
        <View style={styles.container}>
          
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          showsUserLocation
          showsCompass
          showsMyLocationButton
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
   
          onPress={(e) =>{
            setmarker(e.nativeEvent.coordinate)  
            setlat(e.nativeEvent.coordinate.latitude)
            setlong(e.nativeEvent.coordinate.longitude)
        }}
        >
            <Marker           coordinate={{latitude:latitude,longitude:longitude}}              title="New Location" />
          { marker &&
            <Marker       coordinate={marker}  title="MY current location"   /> 
   
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
            
      </View>
    
     );
}
 

const styles = StyleSheet.create({
    container: {
      height: 735,
      width: 400,
    
      
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      position:'absolute',
      marginTop:50
    }
   });
export default AddMarkers;