import React from 'react';
import { Button } from 'react-native';
import {View,Text,TextInput,Image} from 'react-native';
import wardenapi from '../../api/WardenApi';
import {useSelector,useDispatch}  from 'react-redux'
import { addchallan } from '../../reduxapp/myaction';
import { images } from '../../assets/images';
import { TouchableOpacity } from 'react-native';
import loginStyle from '../../styles/loginStyle';
import { DataTable } from 'react-native-paper';

const ChallanDetails = ({ route, navigation }) => {
    const dispatch=useDispatch()
    const users = useSelector(state => state.user)
    
    
    const { data,latt,long,imgurl} = route.params;
    
    
    const[amounts,setamount]=React.useState()


    const postchallan=()=>{
     if(amounts){
        const postdata={registrationnumber:data.registrationnumber,ownercnic:data.ownercnic,
            name:data.ownername,gmail:data.ownergmail,number:data.ownermobilenumber,
            city:data.owneraddress,amount:amounts,latitude:latt,longitude:long,wardenid:users.wardenid,
            challanid:data._id,imgid:imgurl
            }
       if( dispatch(addchallan(postdata)) ) {
        alert("Succuesfully post")
        navigation.popToTop()
        navigation.navigate('wHome')
       
    
      }else{
        
        alert('error while posting challan try aggain')
        navigation.navigate('challandetails')
      }

      
    }
    else{
      alert("fill amount first !!!")
    }
           
    }

    
    return ( 
        <View style={{alignItems:'center'}}>
            <Text style={{padding:10,fontSize:20,fontWeight:'bold'}}>Traffic Police </Text>
            <Image      source={images.CityTraffic}    style={{width:150,height:150}}                          />
      <Text style={{padding:20,fontSize:20,fontWeight:'bold'}}>Owner Details</Text>
      <TextInput    placeholder="Enter amount"            value={amounts} onChangeText={(text)=>setamount(text)}       />
      <DataTable>


      <DataTable.Row>
      <DataTable.Cell>Name</DataTable.Cell>
      <DataTable.Cell numeric>{data.ownername}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Father</DataTable.Cell>
      <DataTable.Cell numeric>{data.ownerfathername}</DataTable.Cell>
    </DataTable.Row>
      <DataTable.Row>
      <DataTable.Cell>Gmail</DataTable.Cell>
      <DataTable.Cell numeric>{data.ownergmail}</DataTable.Cell>
    </DataTable.Row>
      <DataTable.Row>
      <DataTable.Cell>CNIC</DataTable.Cell>
      <DataTable.Cell numeric>{data.ownercnic}</DataTable.Cell>
     
    </DataTable.Row>
    
    
    
    <DataTable.Row>
      <DataTable.Cell>Number Plate</DataTable.Cell>
      <DataTable.Cell numeric>{data.registrationnumber.substring(0,3)}-{data.registrationnumber.substring(3,5)}-{data.registrationnumber.substring(5,9)}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>Lattitude,Longitude</DataTable.Cell>
      <DataTable.Cell numeric>{latt},{long}</DataTable.Cell>
    </DataTable.Row>
      
      </DataTable>
         {/*
           <View style={{margin:10,alignItems:'center',borderWidth:2,borderColor:'black',borderRadius:20}}>
           <TextInput    placeholder="Enter amount"            value={amounts} onChangeText={(text)=>setamount(text)}       />
            <Text style={{borderWidth:2}}>Owner Cnic: {data.ownercnic} </Text>
            <Text>Owner Gmail:         {data.ownergmail}</Text>
            <Text>Owner name:          {data.ownername} </Text>
            <Text>Owner Father Name:   {data.ownerfathername} </Text>
            <Text>owner mobile number:  {data.ownermobilenumber} </Text>
            <Text>Vehicle registration number:  {data.registrationnumber} </Text>
            <Text>owner address:  {data.owneraddress}</Text>
            <Text>lattitude of vehcile: {latt}, Longitude of vehicle: {long}</Text>
            <Text>Image url: {imgurl}</Text>
            <Text>Warden id {users.wardenid}</Text>
            <Text>challan id:{data._id}</Text>
            </View>
            */}
            <TouchableOpacity
                          onPress={()=>postchallan()}
                          style={[loginStyle.loginrightContainer]}>
                          <Image
                            style={[loginStyle.icon30]}
                            source={images.rightArrow}></Image>
                        </TouchableOpacity>

           
            
            

         </View>   
     );
}
 
export default ChallanDetails;