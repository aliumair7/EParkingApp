import React from 'react';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware  } from 'redux';
import myReducer from './myapp/reduxapp/myreducer'
import thunk from 'redux-thunk'
import Toast from 'react-native-toast-message';
import WrapApp from './WrapApp';
import ChallanPage from './myapp/screens/wardenfolder/ChallanPage';
import AndroidPayScreen from './myapp/screens/citizenfolder/PaymentModule';
import DataDetect from './myapp/screens/wardenfolder/DataDetect';
import { Text } from 'react-native';
import StripePayment from './myapp/screens/citizenfolder/StripeComponent';
import MakePDF from './myapp/screens/wardenfolder/MakeChallanPDF';
import GooglePlacesInput from './myapp/screens/adminfolder/SearchPalce';



const store = createStore(myReducer, applyMiddleware(thunk));

const App  = () => {
  return (
    <>
   <Provider store={store}>
    
    
    <WrapApp />
    <Toast ref={(ref) => Toast.setRef(ref)} />
  </Provider>  
  
  </>
     

  
  );
};



export default App;
