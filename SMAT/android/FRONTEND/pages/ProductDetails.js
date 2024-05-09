import React from "react";
import {Text, View, Button, Alert,Image} from 'react-native';
import ProductStyle from "../../STYLE/ProductStyle";
// import myfile from "../../ASSET/";
/**
 * implemented by Vignesh
 * editing nevigation and buttons code review by Cheenou Xiong
 */
class ProductDetails extends React.Component {
    state = {
        Tomatovalue:0,
        Tomatocount:0,
        Tomatoprice: 3,
        Onionprice: 2,
        Onionvalue:0,
        Onioncount:0,
        Spinachprice: 1,
        Spinachvalue:0,
        Spinachcount:0,
        Totalprice: 0
    }
    TIValue = () =>{
       
            this.setState({    
            Tomatovalue: this.state.Tomatovalue+1,
            Tomatocount: this.state.Tomatocount+1,
         })
        console.log("value: "+(this.state.Tomatovalue+1))
    }
    TDValue = () =>{
        this.setState({
            Tomatovalue: this.state.Tomatovalue-1,
            Tomatocount: this.state.Tomatocount-1
        })
        console.log("value: "+(this.state.Tomatovalue-1))
    }
    OIValue = () =>{
       
        this.setState({    
        Onionvalue: this.state.Onionvalue+1,
        Onioncount: this.state.Onioncount+1,
     })
    console.log("value: "+(this.state.Onionvalue+1))
    }
    ODValue = () =>{
    this.setState({
        Onionvalue: this.state.Onionvalue-1,
        Onioncount: this.state.Onioncount-1
    })
    console.log("value: "+(this.state.Onionvalue-1))
    }
    SIValue = () =>{
       
        this.setState({    
        Spinachvalue: this.state.Spinachvalue+1,
        Spinachcount: this.state.Spinachcount+1,
     })
    console.log("value: "+(this.state.Spinachvalue+1))
    }
    SDValue = () =>{
    this.setState({
        Spinachvalue: this.state.Spinachvalue-1,
        Spinachcount: this.state.Spinachcount-1
    })
    console.log("value: "+(this.state.Spinachvalue-1))
    }
    calculate = () => {
        this.setState({
            Totalprice: (this.state.Tomatoprice*this.state.Tomatovalue)+(this.state.Onionprice*this.state.Onionvalue)
            +(this.state.Spinachprice*this.state.Spinachvalue)
        })
    }
    render(){
        const {navigate} = this.props.navigation
        // console.log(navigate)
        return(
            <View style={ProductStyle.container} >
                <View style={{flexDirection:'row', margin: 18}} >
                    <Text style={{fontSize:30}}>Products</Text>
                </View>
                <View style={{flexDirection:'row', margin: 18}} >
                    <Image style = {{width:70, height: 70}} source={require('../../ASSET/Tomato.jpg')}/>
                    <Text style={{fontSize:30}}>  Tomato   </Text>
                    <Text style={{fontSize:30}}>${this.state.Tomatoprice}</Text>
                    <Text>     </Text>
                    <Button onPress={this.TDValue} title = "-" />
                    <Text>     </Text>
                    <Text style={{fontSize:30}}>{this.state.Tomatovalue}</Text>
                    <Text>     </Text>
                    <Button onPress={this.TIValue} title = "+" />
                </View>
                <View style={{flexDirection:'row', margin: 18}} >
                    <Image style = {{width:70, height: 70}} source={require('../../ASSET/Onion.jpeg')}/>
                    <Text style={{fontSize:30}}>  Onion      </Text>
                    <Text style={{fontSize:30}}>${this.state.Onionprice}</Text>
                    <Text>     </Text>
                    <Button onPress={this.ODValue} title = "-" />
                    <Text>     </Text>
                    <Text style={{fontSize:30}}>{this.state.Onionvalue}</Text>
                    <Text>     </Text>
                    <Button onPress={this.OIValue} title = "+" />
                </View>
                <View style={{flexDirection:'row', margin: 18}} >
                    <Image style = {{width:70, height: 70}} source={require('../../ASSET/spinach.jpg')}/>
                    <Text>     </Text>
                    <Text style={{fontSize:30}}>Spinach</Text>
                    <Text>     </Text>
                    <Text style={{fontSize:30}}>${this.state.Spinachprice}</Text>
                    <Text>     </Text>
                    <Button onPress={this.SDValue} title = "-" />
                    <Text>     </Text>
                    <Text style={{fontSize:30}}>{this.state.Spinachvalue}</Text>
                    <Text>     </Text>
                    <Button onPress={this.SIValue} title = "+"/>
                </View>
                <Text style={{fontSize:30}}>Total Price: ${this.state.Totalprice}</Text>
                <View style={{flexDirection:'row', margin: 18}} >
                    <Button title="Calculate" onPress={()=>{this.calculate()}}/>
                    <Text>                 </Text>
                    <Button title="Checkout" onPress={() => {
                        Alert.alert("Your total is: " +this.state.Totalprice, "\n Would you like to checkout?",
                            [
                            {text:"Yes", onPress: () => {navigate("payment")}},
                            {text:"No", onPress: () => {""}}
                            ]
                    )}}/>
                </View>
                

         </View>
        )

    }
}

export default ProductDetails;