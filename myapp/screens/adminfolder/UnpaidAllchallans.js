import React from 'react';
import { Text,FlatList,SafeAreaView,StatusBar,StyleSheet,View } from 'react-native';
import wardenapi from '../../api/WardenApi';
import {useSelector,useDispatch} from 'react-redux'
import ChallanCard from '../../Components/ChallanCard';
import { images } from '../../assets/images';
import appStyles from '../../styles/appStyles';
import colors from '../../assets/colors';
const UnpaidChallans = () => {
    const response = useSelector(state => state.response)
    const[datas,setdatas]=React.useState([])

    React.useEffect(()=>{

      
        wardenapi.allunpaidchallans().then(data=>{
            setdatas(data)
            }).catch(err=>console.log(err))
            
          } ,[response])
          const ItemSeparatorView = () => {
            return (
              // FlatList Item Separator
              <View
                  style={{
                      height: 0.5,
                      width: '100%',
                      backgroundColor: 'blue'
                  }}
              />
            );
          };

    return ( 
      
      <>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}></StatusBar>
      

      <SafeAreaView style={appStyles.body}>
      <View style={[appStyles.mt10]}>
              <Text style={[{fontSize: 18, textAlign: 'center',color:colors.darkPurple}]}>
              All Pending Challans
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      }
})
 
export default UnpaidChallans;