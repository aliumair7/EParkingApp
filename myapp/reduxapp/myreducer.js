
intialstate={
    user:'',
    citizens:'',
    challans:[],
    response:[],
    Marker:[],
   PostChallanStatus:" ",
}
export default myReducer=(state = intialstate, action) => {
    switch (action.type) {
      case 'Warden_Login':
        return {  ...state,
                 user:action.payload }
      case 'Get_Token':
        return { ...state,
                 user:action.payload
         }
         case 'Del_Token':
        return { ...state,
                 user:''
         }
        
          case 'Citizen_Login':
            return {  ...state,
                     citizens:action.payload }
          case 'Get_Citizen_Token':
            return { ...state,
                     citizens:action.payload
             }
             case 'Del_Citizen_Token':
            return { ...state,
                     citizens:''
             }
         case 'Post_Challan':
          return { ...state,
                   challans:action.payload
           }
           case 'Update_PChalan':
          return { ...state,
                   response:action.payload
           }
           case 'Add_Marker':
          return { ...state,
                   Marker:action.payload
           }
           case 'Post_Status':
            return { ...state,
              PostChallanStatus:action.payload
             }
      default:
        return state
    }
  }