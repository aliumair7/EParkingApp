import React from 'react';
import { View,SafeAreaView,StyleSheet,FlatList,StatusBar,Text} from 'react-native';

import wardenapi from '../../api/WardenApi';
import {useSelector,useDispatch} from 'react-redux'
import { Image } from 'react-native';
import ChallanCard from '../../Components/ChallanCard';
import { images } from '../../assets/images';
import BackButton from '../../Components/BackButton';
import {WP} from '../../utilities.js/responsive';
import appStyles from '../../styles/appStyles';
import colors from '../../assets/colors';
import { ScrollView } from 'react-native-gesture-handler';
//<Text style={styles.item}>id:{item._id} name:{item.ownername}   date:{item.issueDate.substring(0,10)} status:{item.status}</Text>

const WardenHome = ({navigation}) => {
    const users = useSelector(state => state.user)
    const challans = useSelector(state => state.challans)
    const[datas,setdatas]=React.useState([]);
    
    React.useEffect(()=>{
      
        wardenapi.getallchalan(users.wardenid).then(data=>{
            setdatas(data)
            console.log(data)}).catch(err=>console.log(err))
            
          } ,[challans]) 
          
         
         
          
          const SPACING = 20;
const AVATAR_SIZE = 70;
    return ( 
      <>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}></StatusBar>
      

      <SafeAreaView style={appStyles.body}>
        
{datas.length >0 ?        
      (  <FlatList

data={datas}
keyExtractor={(item)=>item.key}


renderItem={({item})=>{return(  
   
  <ChallanCard
  img={images.challan}
  name={item.ownername}
  isAdmin={false}
  iswarden={true}
  isSchedule={true}
  citizenid={item.ownercnic}
  status={item.status}
  issuedate={item.issueDate}
  ispaid={true}
  paiddate={item.paidDate}
  
  ></ChallanCard>



    )
}}
keyExtractor={item => item._id}
/>)

:(  <View style={{alignItems:'center',marginTop:300}}>
       <Text>No Record Found</Text>
       </View>
  )
}

       
          
    
      </SafeAreaView>
    </>
       
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: 'floralwhite',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderColor:'black',
      borderWidth:3,
      borderRadius:20
    },
    title: {
      fontSize: 32,
    },
    flatcontainer:{
     backgroundColor:'darkslategrey',
  
    }
  });
 
export default WardenHome;