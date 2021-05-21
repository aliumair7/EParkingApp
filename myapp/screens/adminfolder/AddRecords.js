import { View } from 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native';
import wardenapi from '../../api/WardenApi';
import Toast from 'react-native-toast-message';


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


    React.useEffect(()=>{
        setname('')
        setfathername('')
        setcnic()
        setmobile()
        setregno('')
        setaddress('')
        setgmail('')
        setcolor('')
        setmodel('')
    },[])
    const AddRecord=()=>{
      wardenapi.addownerrecord({ownername,ownerfathername,ownercnic,ownermobilenumber,
        registrationnumber,owneraddress,ownergmail,vehiclecolour,vehiclemodel})
        .then(data=>{console.log(data)
            Toast.show({type: 'success',position: 'top',
            text1: 'Success',
            text2: 'Record Added Successfully  👋',
            visibilityTime: 3000,}); 
            setname('')
            setfathername('')
            setcnic()
            setmobile()
            setregno('')
            setaddress('')
            setgmail('')
            setcolor('')
            setmodel('')
            navigation.navigate('AHome') 
        
        
        
     }
        ).catch(err=>
            {
                Toast.show({type: 'error',position: 'top',
                text1: 'Error',
                text2: err.response.data,
            visibilityTime: 5000,});
                console.log(err)})
            
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
        <Button  title="Add"   onPress={()=>{
            AddRecord()
        } 
    }  />
        </View>
    );
}
 
export default AddRecords;