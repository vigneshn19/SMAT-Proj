import React from "react";
import { Button } from "@rneui/base";
import { View, Text, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";

/**
 * implemented by cheenou 
 * this componet is for testing purpose only
 */
const loginWithFacebook = () =>{
    alert("facebook")
}
export default function TestIcons ({navigation}){
    // console.log("inside testicon", navigation)
    return (
        <View style = {styles.container}>
              <Icon.Button
                name="shopping-cart"
                backgroundColor="#3b5998"
                onPress={() => Alert.alert("Navigation", "Would you like to switch page?",
                [
                  {text:"Yes", onPress: () => {navigation.navigate("payment")}},
                  {text:"No", onPress: () => ""}
                ]
                )}>
                Login with Facebook
            </Icon.Button>
            <Icon.Button
              name ="home"
              onPress={() => {navigation.navigate("button")}}
            >go to MyButton page</Icon.Button>
        </View>

      )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  thisButton: {
    backgroundColor: "white",
    width: '30%',
    position: 'relative'
  }
})
