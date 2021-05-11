import React from 'react';
import { Button } from 'react-native';
import { Text } from 'react-native';
import { View,StyleSheet } from 'react-native';
import wardenapi from '../../api/WardenApi';
import {Title,Card} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const AllWardens = () => {
    const[datas,setdatas]=React.useState([]);
   
    React.useEffect(()=>{
        wardenapi.allwardens().then(data=>
            { 
            setdatas(data)}).catch(err=>console.log(err))
    }

    ,[])
    return ( 
        <View>
            
            {
                datas.map((warden,i)=>{
                    return(
                        <>
                         <Card style={styles.mycard} onPress={()=>alert('mobile')}>
            <View style={styles.cardContent}>
            <Icon      name="account-details-outline" size={32} color="#006aff"                   />
              <Text style={styles.mytext}>{warden.name}</Text>
            </View>
         </Card>
         </>
                        
                        
                  

                    
                    )
                })
            }
        </View>
     );
}


const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
cardContent:{
    flexDirection:"row",
    padding:8
},
mytext:{
    fontSize:18,
    marginTop:3,
    marginLeft:5
}
})
 
export default AllWardens;