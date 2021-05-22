import MainApi from './MainApi'
import AsyncStorage from '@react-native-async-storage/async-storage';
class WardenApi extends MainApi{
    constructor(){
        super()
    }


citizenreg=(data)=>this.post("/api/user/register",data);
citizenlogin=(data)=>this.post("/api/user/login",data)
//get citizen against his idcard number
getcitizen=(id)=>this.get("/api/user/"+id)
//update citizen data against his  id card number
updatecitizen=(id,data)=>this.put("/api/user/update/"+id,data)
//register warden 

wardenreg=(data)=>this.post("/api/warden/register",data)

wardenlogin=(data)=>this.post("/api/warden/login",data)
//get warden data against his id
getwarden=(wardenid)=>this.get("/api/warden/"+wardenid)
//update warden profile
updatewarden=(id,data)=>this.put("/api/warden/update/"+id,data)
//get records against image link
getrecords=(data)=>this.post("/api/challan/getrecords",data);
postchallan=(data)=>this.post("/api/challan/add",data);

getallchalan=(id)=>this.get("/api/challan/getall/"+id)

//get all unpaid challans against specific citizen cnic
getunpaidchalan=(id)=>this.get("/api/challan/getunpaid/"+id)
//get all paid challans
getpaidchalan=(id)=>this.get("/api/challan/getpaid/"+id)
//post payment of challan
postpayment=(data)=>this.post("/api/challan/payment",data)
//delte pending challan when payment successfully
delpendingchallan=(id)=>this.delete("/api/challan/delchallan/"+id)
//updating challan payment record
updatepaymentstatus=(id,data)=>this.put("/api/challan/updation/"+id,data)
//get all unpaid challans
allunpaidchallans=()=>this.get("/api/challan/allunpaid")
//get all wardens registered on app
allwardens=()=>this.get("/api/warden")
//post specific location marker admin on map
addplace=(data)=>this.post("/api/locations/addplace",data)
//get all places of adding marker
getallplaces=()=>this.get("/api/locations/markers")
//paid challans for warden
getpaidwarden=(id)=>this.get("/api/challan/paidbywarden/"+id)
//unpaid challan for warden
getunpaidwarden=(id)=>this.get("/api/challan/unpaidbywarden/"+id)
//Admin Add owner record in database
addownerrecord=(data)=>this.post("/api/records/addrecords",data)

//store citizen token
storeCitizen= async (value) => {
  try {
    await AsyncStorage.setItem('tokenC', value)
  } catch (e) {
    // saving error
  }
}
//get citizen token data
getCitizenData = async () => {
  try {
   const value=await AsyncStorage.getItem('tokenC')
   if(value){
       return value
   }
  } 
  catch (e) {
    console.log(e)
  }
}

//delete citizen token
CitizenDelettoken= async ()=> {
  try {
    await AsyncStorage.removeItem('tokenC')
    
  } catch (err) {
    console.log(err)
  }
}



storeData = async (value) => {
    try {
      await AsyncStorage.setItem('token', value)
    } catch (e) {
      // saving error
    }
  }



getData = async () => {
    try {
     const value=await AsyncStorage.getItem('token')
     if(value){
         return value
     }
    } 
    catch (e) {
      console.log(e)
    }
  }

 Delettoken= async ()=> {
    try {
      await AsyncStorage.removeItem('token')
      
    } catch (err) {
      console.log(err)
    }
  }


}



let wardenapi=new WardenApi()
export default wardenapi;
