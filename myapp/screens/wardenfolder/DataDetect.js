import React from 'react';
import { Button } from 'react-native';
import { Image } from 'react-native';
import { View,Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import wardenapi from '../../api/WardenApi';
import Geolocation from '@react-native-community/geolocation';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { images } from '../../assets/images';
import {useSelector,useDispatch} from 'react-redux'
import CamerModule from './CamerModule';

const DataDetect = ({navigation}) => {
  const [pathimg,setpathimg]=React.useState('')
  const challans = useSelector(state => state.challans)
  const [url,setUrl] = React.useState("")
  const[typeimg,settype]=React.useState("")
  const[fetchdata,setfetchdata]=React.useState({});
  const[name,setname]=React.useState("")
  const[latitude,setlatitude]=React.useState(0)
  const[longitude,setlongitude]=React.useState(0)

  const[indicater,setindicater]=React.useState(false)
  React.useEffect(()=>{
    Geolocation.getCurrentPosition(position=>{
        setlatitude(position.coords.latitude)
        setlongitude(position.coords.longitude)
       
    }, error => console.log(error.message),{enableHighAccuracy:false, timeout:20000}              )
    setpathimg("")
    settype("")
    setUrl("")
    setfetchdata({})
    setname("")
    settype("")

},[challans])

  React.useEffect(()=>{
    if(url){
      setindicater(true)
      wardenapi.getrecords({photo:url}).then((data)=>{
        setindicater(false)
        console.log(data) 
        setfetchdata(data)
        setname(data.ownername)
      

      }).catch(err=>{console.log(err)
        
      })
     
  }},[url]) 




 const OpenCamera=()=> {ImagePicker.openCamera({
  width: 300,
  height: 400,
  cropping: true,
  includeBase64: true,
}).then(image => {
  console.log(image)
  setpathimg(image.data)
    
  settype("jpeg")
  
  
})

//wardenapi.getrecords({pathimg}).then(data=> console.log(data)).catch(err=>console.log(err))

 
 }
 /*if(pathimg){
  wardenapi.getrecords({pathimg}).then(data=> console.log(data)).catch(err=>console.log(err))


 } */

 
 




const uploadimage=async()=>{  

 let bases=`data:${typeimg};base64,` + pathimg
 
const data = new FormData()
data.append("file",bases)
data.append("upload_preset","ecomrce-project")
data.append("cloud_name","ali7347")
await fetch("https://api.cloudinary.com/v1_1/ali7347/image/upload",{
  method:"post",
  body:data
})
.then(res=>res.json())
.then(data=>{
 setUrl(data.url)
 
})
.catch(err=>{
 console.log(err)
  
})
}

const Pickimage=()=>ImagePicker.openPicker({
  width: 300,
  height: 400,
  cropping: true
}).then(image => {
  
 

});


 
 
    return (  
        <View>
          
            <CamerModule                  onPress={()=>{OpenCamera()}}          />
    
          
        
        {pathimg.length >0  ? (
        <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={()=>uploadimage()}>
             <Image          source={{uri:`data:${typeimg};base64,` + pathimg}} 
              style={{height:300,width:220,resizeMode:'cover',borderRadius:12}}     />
             
             </TouchableOpacity>
             </View>
             
             ): (<View>
               <Text>Image will show here </Text>
             </View>) }
              <ActivityIndicator animating={indicater} size="large" color={Colors.red800} />
               
             {
               name.length>0 ? ( <View style={{alignItems:'center',margin:20}}>
                 <Text>Onwer name:{fetchdata.ownername}</Text>
                 <Text>Owner Father name:{fetchdata.ownerfathername}</Text>
                 <Text>Owner Cnic:{fetchdata.ownercnic}</Text>
               
               <Text h5 style={{color:'blue',paddingLeft:280}} 
               onPress={()=>{navigation.navigate('challandetails',{data:fetchdata,latt:latitude,long:longitude,imgurl:url})}}>go to details</Text> 
                </View>
               ): (<View>
               <Text>  Data Of user will appear here</Text> 
               </View>)
              

             }
    
        
        
          
            
      

        </View>
    );
}
 
export default DataDetect;