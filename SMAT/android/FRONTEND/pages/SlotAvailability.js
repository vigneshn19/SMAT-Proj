import React,{useState,useEffect} from "react";
import { SafeAreaView,StyleSheet,View,Text, Alert,Button} from "react-native";
import SlotStyle from "../../STYLE/SlotStyle";
import {Picker} from '@react-native-picker/picker';
// import myfile from "../../ASSET/";
/**
 * implemented by Vignesh
 * editing nevigation and buttons code review by Cheenou Xiong
 */
class SlotAvailability extends React.Component
{
    state = {
        selecteddate:'',
        dateerror:'',
        selectedtime:'',
        timeerror:'',
        currentDate:'',
        currentDate1:'',
        currentDate2:'',
        currentDate3:'',
        currentDate4:'',
        currentDate5:'',
        currentDate6:'',
        count:0,
        count1:0,
        count2:0,
        count3:0,
        count4:0,
        count5:0,
        vcount:1,
        vcount1:1,
        vcount2:1,
        vcount3:1,
        vcount4:1,
        vcount5:1,
        sloterror:''
    }
    ShowCurrentDate=()=>{
 
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        this.setState({
            currentDate: ( month + '/'+ date + '/' + year),
            currentDate1: ( month + '/'+ (date+1) + '/' + year),
            currentDate2: ( month + '/'+ (date+2) + '/' + year),
            currentDate3: ( month + '/'+ (date+3) + '/' + year),
            currentDate4: ( month + '/'+ (date+4) + '/' + year),
            currentDate5: ( month + '/'+ (date+5) + '/' + year),
            currentDate6: ( month + '/'+ (date+6) + '/' + year),
        })
    }
    updatedate = (selecteddate) => {
        this.setState({selecteddate:selecteddate})
    }

    updatetime = (selectedtime) =>{
        this.setState(
            {selectedtime:selectedtime
            })
    }

    bookslot()
    {
        const {navigate} = this.props.navigation
        // console.log(navigate)
        if(this.state.selecteddate=="")
        {
            this.setState({dateerror:"Select the date"})
        }
        else 
        {
            this.setState({dateerror:""})
        }
        if(this.state.selectedtime=="")
        {
            this.setState({timeerror:"Select the time"})
        }
        else 
        {
            this.setState({timeerror:""})
        }
        if(this.state.selectedtime === "08AM - 10AM" && this.state.count<15)
        {

            this.setState({
                count: this.state.count+1,
                vcount: this.state.vcount+1
            })
            Alert.alert("", "Slot booked successfully from " + this.state.selectedtime + " on " + this.state.selecteddate,
                [
                  {text:"LOGUT", onPress: () => {navigate("Login")}},
                  {text:"ONLINE SHOP", onPress: () => {navigate("product detail")}}
                ]
                )
        }
        else if(this.state.selectedtime === "10AM - 12AM" && this.state.count1<15)
        {
            this.setState({
                count1: this.state.count1+1,
                vcount1: this.state.vcount1+1
            })
            Alert.alert("", "Slot booked successfully from " + this.state.selectedtime + " on " + this.state.selecteddate)
        }
        else if(this.state.selectedtime === "12AM - 02PM" && this.state.count2<15)
        {
            this.setState({
                count2: this.state.count2+1,
                vcount2: this.state.vcount2+1
            })
            Alert.alert("", "Slot booked successfully from " + this.state.selectedtime + " on " + this.state.selecteddate)
        }
        else if(this.state.selectedtime === "02PM - 04PM" && this.state.count3<15)
        {
            this.setState({
                count3: this.state.count3+1,
                vcount3: this.state.vcount3+1
            })
            Alert.alert("", "Slot booked successfully from " + this.state.selectedtime + " on " + this.state.selecteddate)
        }
        else if(this.state.selectedtime === "04PM - 06PM" && this.state.count4<15)
        {
            this.setState({
                count4: this.state.count4+1,
                vcount4: this.state.vcount4+1
            })
            Alert.alert("", "Slot booked successfully from " + this.state.selectedtime + " on " + this.state.selecteddate)
        }
        else if(this.state.selectedtime === "06PM - 08PM" && !this.state.count5<15)
        {
            this.setState({
                count5: this.state.count5+1,
                vcount5: this.state.vcount5+1
            })
            Alert.alert("", "Slot booked successfully from " + this.state.selectedtime + " on " + this.state.selecteddate)
        }
        else if(this.state.vcount>14 || this.state.vcount1>14 || this.state.vcount2>14 ||
            this.state.vcount3>14 || this.state.vcount4>14 || this.state.vcount5>14)
        {
            Alert.alert("The slot is full. Please select another slot")
        }
    }

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={SlotStyle.container}>
                <View style={{flexDirection:'row', margin: 10}} >
                    <Text style={{color:'#000000', marginLeft: 20, fontSize: 25}}>Book the Slot</Text>
                </View>
                <View style={{flexDirection:'row', margin: 20}} >
                    <Text style={{color:'#008000', marginLeft: 20}}>Press the below button to know the available date</Text>
                </View>
                <Button title="Click to show available dates" onPress={this.ShowCurrentDate} />
                <Picker selectedValue={this.state.selecteddate} onValueChange = {this.updatedate}
                    style={{ height: 50, width: 250 }}>
                <Picker.Item label="Select the date" value=""/>
                <Picker.Item label={this.state.currentDate} value={this.state.currentDate}/>
                <Picker.Item label={this.state.currentDate1} value={this.state.currentDate1}/>
                <Picker.Item label={this.state.currentDate2} value={this.state.currentDate2}/>
                <Picker.Item label={this.state.currentDate3} value={this.state.currentDate3}/>
                <Picker.Item label={this.state.currentDate4} value={this.state.currentDate4}/>
                <Picker.Item label={this.state.currentDate5} value={this.state.currentDate5}/>
                <Picker.Item label={this.state.currentDate6} value={this.state.currentDate6}/>
                </Picker>
                <Text style={{color:'red', marginLeft: 20}}>{this.state.dateerror}</Text>
                <Text style={SlotStyle.text}>{this.state.selecteddate}</Text>
                <View style={{flexDirection:'row', margin: 20}} >
                    <Text style={{color:'#008000', marginLeft: 20}}>Press the below button to know the available time</Text>
                </View>
                <Picker selectedValue={this.state.selectedtime} onValueChange = {this.updatetime}
                    style={{ height: 50, width: 250 }}>
                <Picker.Item label="Select the Timing" value=""/>
                <Picker.Item label="08AM - 10AM" value="08AM - 10AM"/>
                <Picker.Item label="10AM - 12AM" value="10AM - 12AM"/>
                <Picker.Item label="12AM - 02PM" value="12AM - 02PM"/>
                <Picker.Item label="02PM - 04PM" value="02PM - 04PM"/>
                <Picker.Item label="04PM - 06PM" value="04PM - 06PM"/>
                <Picker.Item label="06PM - 08PM" value="06PM - 08PM"/>
                </Picker>
                <Text style={SlotStyle.text}>{this.state.selectedtime}</Text>
                <Text style={{color:'red', marginLeft: 20}}>{this.state.timeerror}</Text>
                <Button title="Book Slot" onPress={()=>{
                    Alert.alert("Navigation", "Would you like to switch page?",
                    [
                      {text:"Logout", onPress: () => {navigate("Login")}},
                      {text:"Shop", onPress: () => {navigate("product detail")}}
                    ]
                    )
                }}/>
            </View>

        )
    }
}

export default SlotAvailability;