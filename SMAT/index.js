/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './android/FRONTEND/components/App';
import {name as appName} from './app.json';
import Register from './android/FRONTEND/pages/Register'
import BookSlot from './android/FRONTEND/pages/BookSlot'
import MakePayment from './android/FRONTEND/pages/MakePayment';
import TestIcons from './android/FRONTEND/components/TestIcons'
import AddCustomer from './android/FRONTEND/pages/AddCustomer';
import ProductDetails from './android/FRONTEND/pages/ProductDetails';
import SlotAvailability from './android/FRONTEND/pages/SlotAvailability';
import StoreDetails from './android/FRONTEND/pages/StoreDetails';
import CustomerPage from './android/FRONTEND/pages/CustomerPage';


//AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Register);
//AppRegistry.registerComponent(appName, () => BookSlot);
//AppRegistry.registerComponent(appName, () => MakePayment);

// AppRegistry.registerComponent(appName, () => AddCustomer);
AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Register);
// AppRegistry.registerComponent(appName, () => BookSlot);
//AppRegistry.registerComponent(appName, () => MakePayment);
// AppRegistry.registerComponent(appName, () => testIcons);

//AppRegistry.registerComponent(appName, () => AddCustomer);
//AppRegistry.registerComponent(appName, () => ProductDetails);
// AppRegistry.registerComponent(appName, () => SlotAvailability);
//AppRegistry.registerComponent(appName, () => StoreDetails);
//AppRegistry.registerComponent(appName, () => CustomerPage);