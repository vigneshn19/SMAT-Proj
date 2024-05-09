import React from "react";
import { Text, View , Button, Alert} from "react-native";
import CustpageStyle from "../../STYLE/CustpageStyle";

/*
Code reviewd and edit
by:Cheenou Xiong
*/
class CustomerPage extends React.Component{

    state = {
        customercount:Math.floor(Math.random()*15)+1,
        waitingnumber:1
    }

    waitqueue()
    {
        if(this.state.customercount==15)
        {
            this.setState({
                    waitingnumber: this.state.waitingnumber+1
            })
            Alert.alert("Your waiting number is: "+this.state.waitingnumber)
        }
        else {
            Alert.alert("The store is available to make purchase")
        }
    }

    render()
    {
        const {navigate} = this.props.navigation
        function test (){
            alert (navigate)
        }
        return (
        <View style={CustpageStyle.container} >
                <View style={{flexDirection:'row', margin: 10}} >
                    <Text style={{fontSize:30,color:'blue'}}>
                        {"Maximum Customers: 15"}
                    </Text>
                </View>
                {/* <View style={{flexDirection:'row', margin: 10, }} >
                    <Text style={{fontSize:30, color:'red'}}>{this.state.customercount}</Text> 
                </View> */}
                <View style={{flexDirection:'row'}} >
                    <Text style={{fontSize:30, padding: 20, color:'blue'}}>{"Current Customer: "}{this.state.customercount}</Text>
                </View>
                <View style={{flexDirection:'row', margin: 15}} >
                    <Button onPress={()=>{this.waitqueue()}} title = "Add to waiting Queue" />
                </View>
                <View style={{flexDirection:'row', margin: 15}} >
                    <Button title = "Order Online" onPress={() => {navigate("product detail")}}/>
                </View>
                <View style={{flexDirection:'row', margin: 15}} >
                    <Button title = "Book Slot" onPress={() => {navigate("reservation")}}/>
                </View>
            </View>
        
    )
    }
}


export default CustomerPage;