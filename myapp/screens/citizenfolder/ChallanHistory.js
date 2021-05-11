import React from 'react';
import { Text } from "react-native";
import { View,SafeAreaView,FlatList,StyleSheet,StatusBar } from "react-native";
import {useSelector,useDispatch} from 'react-redux'

import { TouchableOpacity } from 'react-native-gesture-handler';
import wardenapi from '../../api/WardenApi';
import ChallanCard from '../../Components/ChallanCard';
import { images } from '../../assets/images';
import BackButton from '../../Components/BackButton';
import {WP} from '../../utilities.js/responsive';
import appStyles from '../../styles/appStyles';

const ChallanHistory = () => {
    const response = useSelector(state => state.response)
    const citizen = useSelector(state => state.citizens)
    const[datas,setdatas]=React.useState([]);
    React.useEffect(()=>{
      
        wardenapi.getpaidchalan(citizen.cnic).then(data=>{
            setdatas(data)
            }).catch(err=>console.log(err))
            
          } ,[response]) 

         

    return ( 
      <>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}></StatusBar>
      

      <SafeAreaView style={appStyles.body}>
      <View style={[appStyles.mt10]}>
              <Text style={[{fontSize: 18, textAlign: 'center'}]}>
               Paid Challans
              </Text>
            </View>
          
            {datas.length >0 ?        
      (   
        
        <FlatList

data={datas}
keyExtractor={(item)=>item.key}


renderItem={({item})=>{return(  
   
  <ChallanCard
  img={images.challan}
  name={item.ownername}
  isAdmin={false}
  isSchedule={true}
  citizenid={item.ownercnic}
  status={item.status}
  iswarden={false}
  gmail={item.ownergmail}
  address={item.city}
  registrationnumber={item.registrationnumber}
  issuedate={item.issueDate}
  paiddate={item.paiddate}
  ></ChallanCard>



    )
}}
keyExtractor={item => item._id}
/>
)

:(  <View style={{alignItems:'center',marginTop:300}}>
       <Text>No Record Found</Text>
       </View>
  )       
}   
       
          
    
      </SafeAreaView>
    </>
       
       
     );
}


 
 
export default ChallanHistory;