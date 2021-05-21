import React from 'react';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import {StyleSheet,View,Text,StatusBar,TouchableOpacity} from 'react-native'
import wardenapi from '../../api/WardenApi';
import {useSelector,useDispatch} from 'react-redux'
import MenuButton from '../../Components/MenuButton';
import colors from '../../assets/colors';

const HomeScreen = (props) => {
  const Markers = useSelector(state => state.Marker)
    const[locations,setlocations]=React.useState([])
    React.useEffect(()=>{
        wardenapi.getallplaces().then(data=>{console.log(data)
        setlocations(data)
        }).catch(err=>console.log(err))

    }

    ,[Markers])
    return ( 
      <>
      <StatusBar
      translucent={true}
      barStyle={'dark-content'}
      backgroundColor={'transparent'}></StatusBar>
      <View style={{flexDirection: 'row'}}>
          <MenuButton navigation={props.navigation}></MenuButton>
          
          
            <Text   style={{
              backgroundColor: colors.white,
              justifyContent: 'center',
              alignItems: 'center',
              top: 50,
              left: 60,

              marginHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 16,
              height: 47,
              width: '70%',
              position: 'absolute',
              zIndex: 10000,
            }}>Nearest No Parking Areas</Text>
        
        </View>
        <View
          style={{
            height: '100%',
            width: '100%',
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }}>
          
             <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          showsUserLocation
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 25,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 0,
          }}
          region={{
            latitude: 31.443413,
            longitude: 73.780156,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
   
         
        >
          {  locations.map((marker,index)=>{
            return(
                    <Marker    key={index}   coordinate={{longitude:marker.longitude,latitude:marker.latitude}}  title="No Parking Area"   /> 
   
            )  })
           
          }
        </MapView>
      </View>
        </>
     );
}

const styles = StyleSheet.create({
    container: {
    
      height: 800,
      width: 400,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
 
export default HomeScreen;