import React from 'react';
import { Text } from 'react-native'
import { StyleSheet,StatusBar,SafeAreaView,FlatList } from 'react-native';
import {View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useSelector,useDispatch} from 'react-redux'
import wardenapi from '../../api/WardenApi';
import { Image } from 'react-native';
import ChallanCard from '../../Components/ChallanCard';
import { images } from '../../assets/images';
import BackButton from '../../Components/BackButton';
import {WP} from '../../utilities.js/responsive';
import appStyles from '../../styles/appStyles';
const PendingChallans = ({navigation}) => {
    const response = useSelector(state => state.response)
    const citizen = useSelector(state => state.citizens)
    const[datas,setdatas]=React.useState([]);

    React.useEffect(()=>{
      
        wardenapi.getunpaidchalan(citizen.cnic).then(data=>{
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
               Pending Challans
              </Text>
            </View>
          
            {datas.length >0 ?        
      (   <FlatList

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
  onPress={()=>{navigation.navigate('PaymentChallans',{dataitem:item})}}
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


 
export default PendingChallans;