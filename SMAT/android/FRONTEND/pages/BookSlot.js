import React,{useState} from 'react';
import {StyleSheet, Text, View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import BookslotStyle from "../../STYLE/BookslotStyle";

export default function App(){
  const[date, setDate] = useState(new Date());
  const[mode, setMode] = useState('date');
  const[show, setshow] = useState(false);
  const[text, setText] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setshow(Platform.OS === 'android');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
    let fTime =  'Hours: ' + tempDate.getHours() + '|Minutes: ' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime) 

    console.log(fDate + '(' + fTime + ')')

  }

  const showMode = (currentMode) => {
    setshow(true);
    setMode(currentMode);
  }

  return(
    <View style = {BookslotStyle.booksty}>
      <View style={{margin:20}}>
        <Button title='Select the Date' onPress={()=> showMode('date')}/>
      </View>
     <View style={{margin:20}}>
         <Button title='Select the timing' onPress={()=> showMode('time')}/>
      </View>
      <Text style={{fontWeight:'bold', fontSize: 20}}>{text}</Text>

    {
      show &&(
        <DateTimePicker
        testID='dateTimePicker'
        value={date}
        mode = {mode}
        is24Hour = {true}
        display = 'default'
        onChange={onChange}
     /> )
    }
    </View>
  );

}
