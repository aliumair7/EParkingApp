import React from 'react';
import { Text } from 'react-native';
import { View, Button,StyleSheet } from 'react-native';
import stripe from 'tipsi-stripe';
import wardenapi from '../../api/WardenApi';

stripe.setOptions({
  publishableKey: 'pk_test_51H2YSHBx7QxnH8iB2Asf4DFgrnBWKnA8SPxAWzLamx09XE0A6JaqTUn54lOQ8IwWPpKfQFHgSKub4mwmGWLpefaD00GwMciW4k',
  
  
});

const StripePayment=() =>{
  
  
    const requestPayment = async () => {
    /*  const tokens=await stripe.createTokenWithCard({
        number: "4242424242424242",
        expMonth: 11,
      expYear: 27,
      cvc: "223",
      })
      console.log("token are ",tokens)
      const paymentMethod = await stripe.createPaymentMethod({
        card : {
          number : '4000002500003155',
          cvc : '123',
          expMonth : 11,
          expYear : 2029
        }
      })
      console.log("Payment Methods are",paymentMethod)  */

  const tokens=await stripe.createTokenWithCard({
    number: "4242424242424242",
    expMonth: 11,
  expYear: 27,
  cvc: "223",
  }).then(token=>{
    wardenapi.postpayment({amount:100,tokenId:token.tokenId,token:token}).then(data=>console.log(data))
    .catch(err=>console.log(err))
    
    console.warn('Token created', { token });

  }) 
  /*  stripe.paymentRequestWithCardForm()
      .then(stripeTokenInfo => {
        console.log(stripeTokenInfo.id)
        wardenapi.postpayment({amount:100,tokenId:stripeTokenInfo.id,token:stripeTokenInfo}).then(data=>console.log(data))
        .catch(err=>console.log(err))
        
        console.warn('Token created', { stripeTokenInfo });
      })
      .catch(error => {
        console.warn('Payment failed', { error });
      });  */
      
  };

   
    return( 
      <View style={styles.container}>
        <Button
          title="Make a payment"
          onPress={()=>{requestPayment()}}
          
        />
        
      </View>
    )
  }


const styles =StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default StripePayment;