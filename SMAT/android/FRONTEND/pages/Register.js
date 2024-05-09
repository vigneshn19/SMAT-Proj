import React from "react";
import { View, Button,TextInput, Text , Alert} from "react-native";
import Formstyle from "../../STYLE/Formstyle";
// import myfile from "../../ASSET/";
/**
 * implemented by Vignesh
 * styling on text input by Cheenou Xiong
 */
class Register extends React.Component {
  constructor()
  {
      super();
      this.state = {
          fname:'',
          fnameerror:'',
          lname:'',
          lnameerror:'',
          email:'',
          emailerror:'',
          mobile:'',
          mobileerror:'',
          password:'',
          passworderror:''
      }
  }
  submit()
  {
      let namerjx = /^[a-zA-Z]+$/;
      let emailrjx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      let phonerjx = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
      let passrjx = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
      let fValid = namerjx.test(this.state.fname)
      let lValid = namerjx.test(this.state.lname)
      let emailvalid = emailrjx.test(this.state.email)
      let phonevalid = phonerjx.test(this.state.mobile)
      let passvalid = passrjx.test(this.state.password)

      console.log(this.state)
      if(!fValid)
      {
        this.setState({fnameerror:"First name should be alphabetic and not empty"})
      }
      else
      {
        this.setState({fnameerror:""})
      }
      if(!lValid)
      {
        this.setState({lnameerror:"Last name should be alphabetic and not empty"})
      }
      else
      {
        this.setState({lnameerror:""})
      }
      if(!emailvalid)
      {
        this.setState({emailerror:"Enter proper email address"})
      }
      else
      {
        this.setState({emailerror:""})
      }
      if(!phonevalid)
      {
        this.setState({mobileerror:"Enter proper mobile number"})
      }
      else
      {
        this.setState({mobileerror:""})
      }
       if(!passvalid)
      {
        this.setState({passworderror:"Enter password of length 8 or more with atleast uppercase, lowercase, numeric and alpha"})
      }
      else
      {
        this.setState({passworderror:""})
      }
      if(fValid && passvalid && phonevalid && emailvalid && lValid)
      {
        Alert.alert("You have been successfully registered")
      }
  }
  render(){
  return (

    <>
      {/* <View style={{flexDirection:'row', marginHorizontal:16}} >
          <Text style={{fontSize:30, alignContent: "center"}}>Register</Text>
      </View> */}
      <View style={Formstyle.screenContainer}>
        <TextInput placeholder="Enter FirstName"
        onChangeText={(text)=> {this.setState({fname:text})}}
        style={Formstyle.Textinput}
        />
        <Text style={{color:'red', marginLeft: 20}}>{this.state.fnameerror}</Text>

        <TextInput placeholder="Enter LastName"
        onChangeText={(text)=> {this.setState({lname:text})}}
        style={Formstyle.Textinput}
        />
        <Text style={{color:'red', marginLeft: 20}}>{this.state.lnameerror}</Text>

        <TextInput placeholder="Enter Email"
        onChangeText={(text)=> {this.setState({email:text})}}
        style={Formstyle.Textinput}
        />

        <Text style={{color:'red', marginLeft: 20}}>{this.state.emailerror}</Text>

        <TextInput placeholder="Enter Phonenumber"
        onChangeText={(text)=> {this.setState({mobile:text})}}
        style={Formstyle.Textinput}
        />
        <Text style={{color:'red', marginLeft: 20}}>{this.state.mobileerror}</Text>
        <TextInput placeholder="Enter Password"
        secureTextEntry={true}
        onChangeText={(text)=> {this.setState({password:text})}}
        style={Formstyle.Textinput}
        />      
        <Text style={{color:'red', marginLeft: 20}}>{this.state.passworderror}</Text>


        <Button title="submit" onPress={()=>{this.submit()}}/>
        
      </View>

    </>
    );
  }
};

export default Register;