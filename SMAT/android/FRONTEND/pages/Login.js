import {StyleSheet, Button, View, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
// import {Button} from '@rneui/base';
import Person from '../components/person';

const _ATEMP = 3; // Variable to count number of attempts.
var _isAssociate = false;
const _CUSTOMER = [
  {
    name: 'test_1',
    email: 'test1@gmail.com',
    password: 'testtest1',
    type: 'customer',
  },
];
const _ASSOCIATE = [
  {
    ID: '12345',
    name: 'test_1',
    email: 'test1@gmail.com',
    password: 'testtest1',
    type: 'customer',
  },
];
// Below function Executes on click of login button.
// import myfile from "../../ASSET/";
/**
 * implemented by Cheenou Xiong
 * 
 */

function validate(navigation, email, password) {
  // console.log("EMAIL: ", email)
  console.log("PASSWORD: ", password)
  if(email.includes("@")){
    _CUSTOMER.forEach((customer) =>{
      if (customer.email === email && customer.password === password) {
        navigation.navigate("store detail")
      }
      else {
        Alert.alert(" ", "Incorrect email or password")
      }
    })
  }
  else{
    _ASSOCIATE.forEach((employee) =>{
      if (employee.ID === email && employee.password === password){
        navigation.navigate("add customer")
      }
      else{
        Alert.alert("", "Incorrect email or password")
      }
    })
  }
}
function Register(navigation, name, id, email, password){

}

export default function Login({navigation}) {

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  var myThing = ""

  // validate(navigation, email, password)
  return (
    <>
      <View style={styles.container}>
        {/* <Text>Login Screen</Text>
        <Text>password</Text> */}
        <TextInput
          style={styles.input}
          placeholder="email or ID"
          
        onChangeText={(email) => setEmail(email)}
        // value={text}
        onSubmitEditing={(value) => {myThing = value}}
      />
        <TextInput
          style={styles.input}
          // onChangeText={(password) => setPassword(password)}
          // value={number}
          placeholder="password"
          // keyboardType="numeric"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          // value={text}
          onSubmitEditing={(value) => {myThing = value}}
        />
      </View>
      <View style={styles.container_2}>
        <View style={styles.btn}>
            <Button
              
              title="Login"
              type="outline"
              onPress={() => validate(navigation, email, password)}
              // onPress={() => validate()}
            />
        </View>
        <View style={styles.btn}>
          <Button 
              title="Register"
              type='outline'
              onPress={() => {navigation.navigate("Register")}}
          />
        </View>
        {/* <Text>Login</Text>
        <Text>Register</Text> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1/2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_2: {
    backgroundColor: '#ddd',
    flex:1/2,
    justifyContent: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    // marginTop: '2%',
    
    alignItems: 'flex-start',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "#FFF",
    elevation: 3,
    padding: 10,
    width: 300
  },
  btn: {
    backgroundColor: '#ADD',
    elevation: 5,
  }
});
