import React, { useState } from "react";
import { View, Button,Text, TextInput,Image} from "react-native";
import {Picker} from '@react-native-picker/picker';
import StoreStyle from "../../STYLE/StoreStyle";

// import myfile from "../../ASSET/";
/**
 * implemented by Vignesh
 * editing nevigation and buttons code review by Cheenou Xiong
 */
export default function StoreDetails ({navigation}){
    return (
        <View style={StoreStyle.container} >
                <View style={{flexDirection:'row', margin: 18}} >
                    <Text style={{fontSize:30}}>Store Details</Text>
                </View>
                <View style={{flexDirection:'row', margin: 18}} >
                    <Image style = {{width:75, height: 75}} source={require('../../ASSET/download.jpg')}/>
                    <Text style={{fontSize:13, lineHeight:75}}>1100 E Garfield Ave, Milwaukee, WI 53212 </Text>
                    <Text>  </Text>
                    <Button title = "Select" onPress={() => {navigation.navigate("customer page")}}/>
                </View>
                <View style={{flexDirection:'row', margin: 18}} >
                    <Image style = {{width:75, height: 75}} source={require('../../ASSET/download1.jpg')}/>
                    <Text style={{fontSize:13, lineHeight:75}}>2305 N Prospect Ave, Milwaukee, WI 53211 </Text>
                    <Text></Text>
                    <Button title = "Select" onPress={() => {navigation.navigate("customer page")}}/>
                </View>
                <View style={{flexDirection:'row', margin: 18}} >
                    <Image style = {{width:75, height: 75}} source={require('../../ASSET/logo.jpg')}/>
                    <Text style={{fontSize:13, lineHeight:75}}>1123 N Van Buren St,,Milwaukee, WI 53202 </Text>
                    <Text>  </Text>
                    <Button title = "Select" onPress={() => {navigation.navigate("customer page")}}/>
                </View>
                <View style={{flexDirection:'row', margin: 18}} >
                    <Image style = {{width:75, height: 75}} source={require('../../ASSET/download4.jpg')}/>
                    <Text style={{fontSize:13,lineHeight:75}}> 401 E Capitol Dr, Milwaukee, WI 53212        </Text>
                    <Text>  </Text>
                    <Button  title = "Select" onPress={() => {navigation.navigate("customer page")}}/>
                </View>
         </View>
    )
}



