import { View } from 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native';
import wardenapi from '../../api/WardenApi';


const AddRecords = ({navigation}) => {
    const[ownername,setname]=React.useState('')
    const[ownerfathername,setfathername]=React.useState('')
    const[ownercnic,setcnic]=React.useState()
    const[ownermobilenumber,setmobile]=React.useState()
    const[registrationnumber,setregno]=React.useState('')
    const[owneraddress,setaddress]=React.useState('')
    const[ownergmail,setgmail]=React.useState('')
    const[vehiclecolour,setcolor]=React.useState('')
    const[vehiclemodel,setmodel]=React.useState('')

    const AddRecord=()=>{
        
       
      wardenapi.addownerrecord({ownername,ownerfathername,ownercnic,ownermobilenumber,
        registrationnumber,owneraddress,ownergmail,vehiclecolour,vehiclemodel})
        .then(data=>{console.log(data)
           
        alert("Added successfully")
        navigation.navigate('Home')
        
     }
        ).catch(err=>console.log(err.response.data))
    }

    return (  

        <View style={{padding:10}}>
        <Input     value={ownername}     placeholder="Owner Name"         onChangeText={text=>setname(text)}        />
        <Input    value={ownerfathername}        placeholder="Owner Father Name"       onChangeText={text=>setfathername(text)}            />
        <Input   value={ownercnic}          placeholder="Owner Cnic"         onChangeText={text=>setcnic(text)}          />
        <Input   value={owneraddress}         placeholder="Owner Address"          onChangeText={text=>setaddress(text)}         />
        <Input     value={ownermobilenumber}       placeholder="Owner Mobile Number"            onChangeText={text=>setmobile(text)}       />
        <Input    value={ownergmail}        placeholder="Gmail"             onChangeText={text=>setgmail(text)}      />
        <Input   value={registrationnumber}         placeholder="Vehicle Number Plate"           onChangeText={text=>setregno(text)}        />
        <Input    value={vehiclecolour}        placeholder="Vehicle Color"            onChangeText={text=>setcolor(text)}       />
        <Input    value={vehiclemodel}        placeholder="Vehicle model"             onChangeText={text=>setmodel(text)}      />
        <Button  title="Add"   onPress={(e)=>{
            AddRecord()
        } 
    }  />
        </View>
    );
}
 
export default AddRecords;