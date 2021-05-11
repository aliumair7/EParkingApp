import React from 'react';
import { Text,FlatList,SafeAreaView,StatusBar,StyleSheet,View } from 'react-native';
import wardenapi from '../../api/WardenApi';
import {useSelector,useDispatch} from 'react-redux'
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
        <SafeAreaView style={styles.container}>
         
        <Text h4 style={{marginLeft:90,color:'green'}}>List of all challans</Text>
       
        <FlatList
    data={datas}
    ItemSeparatorComponent={ItemSeparatorView}
    renderItem={({item})=>{return(
       
    <Text style={styles.item}>Challan id:{item._id} gmail:{item.ownergmail}  issue date:{item.issueDate.substring(0,10)}</Text>
    
        )
    }}
    keyExtractor={item => item._id}
  />

    </SafeAreaView>
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