//Ravi Teja Ainampudi
import React from "react";
import { View, Button,TextInput, Text , Alert, DevSettings} from "react-native";
import Formstyle from "../../STYLE/Formstyle";
import { fireEvent, render } from "@testing-library/react-native";

import HomePage from "../../../src/pages/Register.js";


describe('Slotavailability screen', () => {
  const navigation = {navigate: () => {}}
  spyOn(navigation,'navigate')
const page = render(<SlotAvailability navigation={navigation} />);

const ClickToShow = page.getByTestId('ClickToShowAvailbleDates');
const dateselect = page.getByTestId('DateSelectBydrop');
const SelectTiming = page.getByTestId('SelectTiming');


const BookslotButton = page.getByTestId('BookSlotButton');

fireEvent.press(BookslotButton);

expect(navigation.navigate.toHaveBeenCalledWith("ProductDetails"));
})