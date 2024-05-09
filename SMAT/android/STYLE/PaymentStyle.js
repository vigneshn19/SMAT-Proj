import {StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const BankStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
        alignItems: "center"
      },
      text:{
          fontSize: 10,
          alignSelf: 'center',
          color: 'red',
      },
      Textinput:{
        borderWidth:2, 
        borderColor:'black',
        width: 250,
        margin:10
        },
        PickerStyle:{
            height: 50, 
            width: 250
        }

    
})

export default BankStyle