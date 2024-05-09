/* eslint-disable linebreak-style */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Login from '../pages/Login';
import TestIcons from './TestIcons';
import MakePayment from '../pages/MakePayment';
import CustomerPage from '../pages/CustomerPage';
import ProductDetails from '../pages/ProductDetails';
import AddCustomer from '../pages/AddCustomer';
import Associate from '../pages/AssociatePage'
import StoreDetails from '../pages/StoreDetails';
import Register from '../pages/Register';
import SlotAvailability from '../pages/SlotAvailability';
import React from 'react';
import {StyleSheet} from 'react-native';
import MyButton from '../components/myButton'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/**
 * Implemented by Cheenou Xiong
 * this method is the main page for navigating through the app
 */

const stack = createNativeStackNavigator()


const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name = "Login"
          component={Login} 
          options={{title:"Sign In"}}
        />
        <stack.Screen 
          name = "icons"
          component={TestIcons}
          options={{title: "Icon page"}}
        />
        <stack.Screen 
          name = "payment"
          component={MakePayment}
          options={{title: "Make Payment"}}
        />
        <stack.Screen 
          name = "button"
          component={MyButton}
          options={{title: "my Button", backgroundColor: 'transparent' }}
        />
        <stack.Screen 
          name = "customer page"
          component={CustomerPage}
          options ={{title:"Store Capacity"}}
        />
        <stack.Screen
          name = "product detail"
          component={ProductDetails}
          options ={{title:"Store"}}
        />
        <stack.Screen
          name = "add customer"
          component={AddCustomer}
          options ={{title:""}}
        />
        <stack.Screen
          name = "employee page"
          component={Associate}
        />
        <stack.Screen
          name = "store detail"
          component={StoreDetails}
          options ={{title:"Nearby Stores"}}
        />
        <stack.Screen
          name = "Register"
          component={Register}
          options ={{title:"Register"}}
        />
        <stack.Screen 
          name = "reservation"
          component={SlotAvailability}
          options ={{title:""}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  inner_container: {
    // width: 50,
    // height: 25
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    // marginTop: 15,
    // paddingHorizontal: 10,  
    // display: 'flex',
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    position: 'relative'
  },
  title: {
    margin: 10,
    fontSize: 15,
    fontWeight: '600',
    // padding: 10,
    color: 'blue',
    backgroundColor: 'white',
    
  },
  contentBody: {
    fontSiize: 10,
    fontWeight: '400',
    backgroundColor: 'purple'
  }
});

export default App;
