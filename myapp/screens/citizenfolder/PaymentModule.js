import React from 'react';
import { Button } from 'react-native';
import { View,Image } from "react-native";
import { removeCitizentoken } from '../../reduxapp/myaction';
import stripe from 'tipsi-stripe'
import {colors, Text} from 'react-native-elements'
import wardenapi from '../../api/WardenApi';
import {useSelector,useDispatch} from 'react-redux'
import {UpdatePendingChallan} from '../../reduxapp/myaction'
import { images } from '../../assets/images';
import loginStyle from '../../styles/loginStyle';
import { TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import moment from 'moment';
import { Card, Title, Paragraph } from 'react-native-paper';
import { DataTable } from 'react-native-paper';

stripe.setOptions({
    publishableKey: 'pk_test_51H2YSHBx7QxnH8iB2Asf4DFgrnBWKnA8SPxAWzLamx09XE0A6JaqTUn54lOQ8IwWPpKfQFHgSKub4mwmGWLpefaD00GwMciW4k',
    
  });

const PaymentComponent = ({ route, navigation }) => {
    const res = useSelector(state => state.response)
    const dispatch=useDispatch()
    

    const{dataitem}=route.params
    console.log(dataitem)
    
  /*if(datas){
      if(dispatch(deletePendingChallan(dataitem.challanid)))
      {navigation.navigate('PChallans')  }
      else{
          alert("error came")
      }
    
    
  } */
    
    const ChallanPayment=()=>{
      stripe.paymentRequestWithCardForm()
        .then(async tokens => {
          
            await stripe.createTokenWithCard({
                number: "4242424242424242",
                expMonth: tokens.card.expMonth,
              expYear: tokens.card.expYear,
              cvc: tokens.card.cvc,
              }).then(async token=>{
                
              // await  wardenapi.postpayment({amount:dataitem.amount,tokenId:token.tokenId,token:token,
              //challan:dataitem}).then(data=>{
                    if(dispatch(UpdatePendingChallan(dataitem._id,{amount:dataitem.amount,tokenId:token.tokenId,token:token,challan:dataitem})))
                    {navigation.navigate('PChallans')  }
                    else{
                        alert("error came")
                    }
                  
                   
                
               // })
                 
               // .catch(err=>console.log(err))
            
                
                console.warn('Token created', { token });
            
              }) 
        })
        .catch(error => {
          console.warn('Payment failed', { error });
        }); 
        
    }
    return ( 
      <View style={{alignItems:'center'}}>
       
        
            <Text style={{padding:10,fontSize:20,fontWeight:'bold'}}>Traffic Police </Text>
            <Image      source={images.CityTraffic}    style={{width:150,height:150}}                          />
      <Text style={{padding:20,fontSize:20,fontWeight:'bold'}}>Challan Details</Text>
      <DataTable>
      <DataTable.Row>
      <DataTable.Cell>Name</DataTable.Cell>
      <DataTable.Cell numeric>{dataitem.ownername}</DataTable.Cell>
     
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>Gmail</DataTable.Cell>
      <DataTable.Cell numeric>{dataitem.ownergmail}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>City</DataTable.Cell>
      <DataTable.Cell numeric>{dataitem.city}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>CNIC</DataTable.Cell>
      <DataTable.Cell numeric>{dataitem.ownercnic}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>Mobile</DataTable.Cell>
      <DataTable.Cell numeric>{dataitem.ownernumber}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>Amount</DataTable.Cell>
      <DataTable.Cell numeric>{dataitem.amount}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>Number Plate</DataTable.Cell>
      <DataTable.Cell numeric>{dataitem.registrationnumber.substring(0,3)}-{dataitem.registrationnumber.substring(3,5)}-{dataitem.registrationnumber.substring(5,9)}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>Lattitude,Longitude</DataTable.Cell>
      <DataTable.Cell numeric>{dataitem.latitude},{dataitem.longitude}</DataTable.Cell>
    </DataTable.Row>
      
      </DataTable>
      
         {/*  <View style={{padding:20,margin:10,marginBottom:10,alignItems:'center',backgroundColor:colors.disabled,borderWidth:2,borderColor:'black',borderRadius:20}}>
      
           <Text h4 style={{borderBottomWidth:2}}> {dataitem.ownername}</Text>
           

           <Text h4 style={{textDecorationLine: 'underline',color:colors.primary}}>Owner gmail: {dataitem.ownergmail}</Text>
           <Text h4 style={{textDecorationLine: 'underline'}}>Number Plaet: {dataitem.registrationnumber}</Text>
            <Text h4 style={{textDecorationLine: 'underline'}}>  Amount:     {dataitem.amount} </Text>
            <Text h4 style={{textDecorationLine: 'underline'}}>Owner CNIC:   {dataitem.ownercnic} </Text>
            <Text h4 style={{textDecorationLine: 'underline'}}>Owner City:  {dataitem.city} </Text>
            <Text h4 style={{textDecorationLine: 'underline'}}>Issue date: {moment(dataitem.issueDate).format('YYYY-MM-DD')} </Text>
            
    </View>   */}
            <TouchableOpacity
                          onPress={()=>ChallanPayment()}
                          style={[loginStyle.loginrightContainer]}>
                          <Image
                            style={[loginStyle.icon30]}
                            source={images.rightArrow}></Image>
                        </TouchableOpacity>

            
     
            
            

         </View>   
        
     );
}
 
export default PaymentComponent;