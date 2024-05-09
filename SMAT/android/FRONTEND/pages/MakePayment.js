import React, { useState } from "react";
import { View, Button,Text, TextInput, Alert } from "react-native";
import {Picker} from '@react-native-picker/picker';
import PaymentStyle from "../../STYLE/PaymentStyle";

/*
implemented by Vignesh
code review and button editing by Cheenou Xiong
*/
class MakePayment extends React.Component {
    state = {
        cnumber:'',
        cnumbererror:'',
        cvvnumber:'',
        cvverror:'',
        card:'',
        carderror:'',
        month:'',
        montherror:'',
        year:'',
        yearerror:''
    }
    updatecard = (card) => {
        this.setState({card:card})
    }
    updatemonth = (month) => {
        this.setState({month:month})
    }
    updateyear = (year) => {
        this.setState({year:year})
    }
  payment()
  {
    let cnumberrjx = /^[0-9]{16}$/;
    let cvvnumberrjx = /^[0-9]{3}$/;
    let cnvalid = cnumberrjx.test(this.state.cnumber)
    let cvvvalid = cvvnumberrjx.test(this.state.cvvnumber)
    console.log(this.state)
    if(!cnvalid)
    {
        this.setState({cnumbererror:"Card number shouldn't be alpabet and length less than 16"})
    }
    else
    {
        this.setState({cnumbererror:""})
    }
    if(!cvvvalid)
    {
        this.setState({cvverror:"CVV should not be alpabet, empty and length should be 3"})
    }
    else
    {
        this.setState({cvverror:""})
    }
    if(this.state.card=="")
    {
        this.setState({carderror:"Select card either credit or debit"})
    }
    else 
    {
        this.setState({carderror:""})
    }
    if(this.state.month=="")
    {
        this.setState({montherror:"Select the proper expiry month"})
    }
    else 
    {
        this.setState({montherror:""})
    }
    if(this.state.year=="" || this.state.year<2022)
    {
        this.setState({yearerror:"Select the proper expiry year"})
    }
    else 
    {
        this.setState({yearerror:""})
    }
    if(cnvalid && cvvvalid && this.state.year!="" && this.state.month!="" && this.state.card!="")
    {
        Alert.alert("Your Payment is successfull" )
    }
  }
  render(){
      return(
          <View style={PaymentStyle.container} >
              <Text style={{fontSize:30,alignSelf: 'center',padding: 20,}}>Make Payment</Text>
              <Picker selectedValue={this.state.card} onValueChange = {this.updatecard}
                style={{ height: 50, width: 250 }}>
              <Picker.Item label="Credit/Debit" value="" />
              <Picker.Item label="Credit" value="Credit" />
              <Picker.Item label="Debit" value="Debit" />
              </Picker>
              <Text style={{color:'red', marginLeft: 20}}>{this.state.carderror}</Text>
              <Text style={PaymentStyle.text}>{this.state.card}</Text>
              <TextInput placeholder="Enter Card Number"
              onChangeText={(text)=> {this.setState({cnumber:text})}}
              style={PaymentStyle.Textinput}
              />
              <Text style={{color:'red', marginLeft: 20}}>{this.state.cnumbererror}</Text>
              <Picker selectedValue={this.state.month} onValueChange = {this.updatemonth}
                style={PaymentStyle.PickerStyle}>
              <Picker.Item label="Select Expiry month" value="" />
              <Picker.Item label="January" value="January" />
              <Picker.Item label="February" value="February" />
              <Picker.Item label="March" value="March" />
              <Picker.Item label="April" value="April" />
              <Picker.Item label="May" value="May" />
              <Picker.Item label="June" value="June" />
              <Picker.Item label="July" value="July" />
              <Picker.Item label="August" value="August" />
              <Picker.Item label="September" value="September" />
              <Picker.Item label="October" value="October" />
              <Picker.Item label="November" value="November" />
              <Picker.Item label="December" value="December" />
              </Picker>
              <Text style={{color:'red', marginLeft: 20}}>{this.state.montherror}</Text>
              <Text style={PaymentStyle.text}>{this.state.month}</Text>
              <Picker selectedValue={this.state.year} onValueChange = {this.updateyear}
                style={PaymentStyle.PickerStyle}>
              <Picker.Item label="Select Expiry year" value="" />
              <Picker.Item label="1990" value="1990" />
              <Picker.Item label="1991" value="1991" />
              <Picker.Item label="1992" value="1992" />
              <Picker.Item label="1993" value="1993" />
              <Picker.Item label="1994" value="1994" />
              <Picker.Item label="1995" value="1995" />
              <Picker.Item label="1996" value="1996" />
              <Picker.Item label="1997" value="1997" />
              <Picker.Item label="1998" value="1998" />
              <Picker.Item label="1999" value="1999" />
              <Picker.Item label="2000" value="2000" />
              <Picker.Item label="2001" value="2001" />
              <Picker.Item label="2002" value="2002" />
              <Picker.Item label="2003" value="2003" />
              <Picker.Item label="2004" value="2004" />
              <Picker.Item label="2005" value="2005" />
              <Picker.Item label="2006" value="2006" />
              <Picker.Item label="2007" value="2007" />
              <Picker.Item label="2008" value="2008" />
              <Picker.Item label="2009" value="2009" />
              <Picker.Item label="2010" value="2010" />
              <Picker.Item label="2011" value="2011" />
              <Picker.Item label="2012" value="2012" />
              <Picker.Item label="2013" value="2013" />
              <Picker.Item label="2014" value="2014" />
              <Picker.Item label="2015" value="2015" />
              <Picker.Item label="2016" value="2016" />
              <Picker.Item label="2017" value="2017" />
              <Picker.Item label="2018" value="2018" />
              <Picker.Item label="2019" value="2019" />
              <Picker.Item label="2020" value="2020" />
              <Picker.Item label="2021" value="2021" />
              <Picker.Item label="2022" value="2022" />
              <Picker.Item label="2023" value="2023" />
              <Picker.Item label="2024" value="2024" />
              <Picker.Item label="2025" value="2025" />
              <Picker.Item label="2026" value="2026" />
              <Picker.Item label="2027" value="2027" />
              <Picker.Item label="2028" value="2028" />
              <Picker.Item label="2029" value="2029" />
              <Picker.Item label="2030" value="2030" />
              <Picker.Item label="2031" value="2031" />
              <Picker.Item label="2032" value="2032" />
              <Picker.Item label="2033" value="2033" />
              <Picker.Item label="2034" value="2034" />
              <Picker.Item label="2035" value="2035" />
              <Picker.Item label="2036" value="2036" />
              <Picker.Item label="2037" value="2037" />
              <Picker.Item label="2038" value="2038" />
              <Picker.Item label="2039" value="2039" />
              <Picker.Item label="2040" value="2040" />
              </Picker>
              <Text style={{color:'red', marginLeft: 20}}>{this.state.yearerror}</Text>
              <Text style={PaymentStyle.text}>{this.state.year}</Text>
              <TextInput placeholder="Enter CVV Number"
              onChangeText={(text)=> {this.setState({cvvnumber:text})}}
              style={PaymentStyle.Textinput}
              />
              <Text style={PaymentStyle.text}>{this.state.cvvnumber}</Text>
              <Text style={{color:'red', marginLeft: 20}}>{this.state.cvverror}</Text>
              <Button title="Make Payment" onPress={()=>{this.payment()}}/>
          </View>

      )
  }
}

export default MakePayment;