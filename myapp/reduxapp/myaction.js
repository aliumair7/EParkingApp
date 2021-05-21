import wardenapi from "../api/WardenApi"
import jwt from 'jwt-decode'
import Toast from 'react-native-toast-message';
export const loginwarden=(id,password)=>{
    return async(dispatch)=>{

         wardenapi.wardenlogin(id,password).then(data=>{
             wardenapi.storeData(data)
           dispatch({type:'Warden_Login',payload:jwt(data)})
           Toast.show({type: 'success',position: 'top',
           text1: 'Success',
           text2: 'Warden Login Successfully 👋',
           visibilityTime: 4000,}); 
         }).catch(err=>{
          Toast.show({type: 'error',position: 'top',
          text1: 'Error',
          text2: err.response.data,
      visibilityTime: 5000,}); 
          console.log(err)})
        

    }
}
//citizen login
export const logincitizen=(id,password)=>{
  return async(dispatch)=>{

       wardenapi.citizenlogin(id,password).then(data=>{
           wardenapi.storeCitizen(data)
         dispatch({type:'Citizen_Login',payload:jwt(data)})
         Toast.show({type: 'success',position: 'top',
         text1: 'Success',
         text2: 'Citizen Login Successfully 👋',
         visibilityTime: 4000,}); 
       }).catch(err=>{
        Toast.show({type: 'error',position: 'top',
                text1: 'Error',
                text2: err.response.data,
            visibilityTime: 5000,}); 
      })
      

  }
}
//get citizen data
export const getCitizen=()=>{
  return async(dispatch)=>{

       wardenapi.getCitizenData().then(data=>{
      
         dispatch({type:'Get_Citizen_Token',payload:jwt(data)})
       }).catch(err=>console.log(err))
      

  }
}
//get warden token data
export const gettoken=()=>{
    return async(dispatch)=>{

         wardenapi.getData().then(data=>{
        
           dispatch({type:'Get_Token',payload:jwt(data)})
         }).catch(err=>console.log(err))
        

    }
}
//delete citizen token
export const removeCitizentoken=()=>{
  return async(dispatch)=>{

       wardenapi.CitizenDelettoken() 
         dispatch({type:'Del_Citizen_Token'})
       
      

  }
}
//delete warden token
export const removetoken=()=>{
    return async(dispatch)=>{

         wardenapi.Delettoken() 
           dispatch({type:'Del_Token'})
         
        

    }
}
//post challan 
export const addchallan=(postdata,navigation)=>{
  return async(dispatch)=>{
    wardenapi.postchallan(postdata)
        .then(data=>{
          
          dispatch({type:'Post_Challan',payload:data})   
          Toast.show({type: 'success',position: 'top',
          text1: 'Success',
          text2: 'Challan Sent Successfully 👋',
          visibilityTime: 3000,}); 
          navigation.popToTop()
          navigation.navigate('wHome')       
              
        }).catch(err=>{
          Toast.show({type: 'error',position: 'top',
          text1: 'Error',
          text2: 'network error',
      visibilityTime: 3000,}); 
      navigation.navigate('challandetails')
          console.log(err)})

  }
}
//delete pending challan against challan id
export const UpdatePendingChallan=(id,datas,navigation)=>{
  return async(dispatch)=>{
    wardenapi.updatepaymentstatus(id,datas).then(data=>{
        
      
      dispatch({type:'Update_PChalan',payload:data}) 
      Toast.show({type: 'success',position: 'top',
      text1: 'Success',
      text2: 'Chalan Submitted Successfully!!!! 👋',
      visibilityTime: 3000,}); 
      navigation.navigate('PChallans') 
  }).catch(err=>{console.log(err)
    Toast.show({type: 'error',position: 'top',
          text1: 'Error',
          text2: 'Not Submitted error came here???',
      visibilityTime: 3000,}); 
  })

  }

}

//add marker on map by admin request
export const AddMarkerbyAdmin=(latt,long)=>{
  return async(dispatch)=>{
    wardenapi.addplace(latt,long).then(data=>{
        
      console.log(data)
      dispatch({type:'Add_Marker',payload:data}) 
  }).catch(err=>console.log(err))

  }

}