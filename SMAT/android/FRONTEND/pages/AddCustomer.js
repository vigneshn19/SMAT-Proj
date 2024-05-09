import React from "react";
import {Text, View, Button, Alert} from 'react-native';
import AddCustStyle from "../../STYLE/AddCustStyle";

class AddCustomer extends React.Component {
    state = {
        value:0,
        count:1,
        waitingnumber:0
    }
    
    increment()
    {
        if(this.state.value<15)
        {
            this.setState({
                value: this.state.value+1,
            })
        }
        else 
        {
            this.setState({
                waitingnumber: this.state.waitingnumber+1,
            })
        }
    }

    decrement()
    {
        if(this.state.value!=0 && this.state.waitingnumber==0)
        {
            this.setState({
                value: this.state.value-1,
            })
        }
        if(this.state.waitingnumber!=0)
        {
            this.setState({
                waitingnumber: this.state.waitingnumber-1,
                value: this.state.value-1+1,
            })
        }
        if(this.state.value==0)
        {
            Alert.alert("No customer to remove")
        }
    }


    render(){
        const {navigate} = this.props.navigation
        console.log(navigate)
        return(
            <View style={AddCustStyle.container} >
                <Text style={{fontSize:20, padding: 20, color:'#d2691e'}}>{"Maintain Customer in Store"}</Text>
                <Text style={{fontSize:60, marginBottom: 20, color:'red'}}>{this.state.value}</Text>
                <Text style={{fontSize:20, padding: 20, color:'red'}}>{"Number of customers within the store"}</Text>
                <View style={{flexDirection:'row'}} >
                    <Button onPress={()=>{this.decrement()}} title = "Remove customer" />
                    <Text>     </Text>
                    <Button onPress={()=>{this.increment()}} title = "Add customer" />
                </View>
                <Text>   </Text>
                <View style={{flexDirection:'row', margin: 5}} >
                    <Text style={{fontSize:60, marginBottom: 20, color: 'green'}}>{this.state.waitingnumber}</Text>
                </View>
                <View style={{flexDirection:'row'}} >
                    <Text style={{fontSize:20, color:'green'}}>{"Number of customer in waiting queue"}</Text>
                </View>
            </View>
        )

    }
}

export default AddCustomer;