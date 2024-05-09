import React from "react";
import { Button } from "@rneui/base";
import { View, Text, StyleSheet, } from "react-native";
// import {useTailwind} from 'tailwind-rn';
/**
 * Implemented by Cheenou, this compoment is use for testing purpose only
 * @param {*} param0 
 * @returns 
 */
// const tailwind = useTailwind()
export default function MyButton ({navigation}){
    return (
        <View style = {styles.container}>
          <View style = {styles.thisButton}>
            <Button
              title="go to icons"
              type="outline"
              onPress={() => {navigation.navigate("icons")}}
            />
          </View>
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
