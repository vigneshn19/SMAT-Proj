//Ravi Teja Ainampudi
import React from "react";
import { View, Button,TextInput, Text , Alert, DevSettings} from "react-native";
import Formstyle from "../../STYLE/Formstyle";
import { fireEvent, render } from "@testing-library/react-native";

import HomePage from "../../../src/pages/Register.js";


describe('Storedetails screen', () => {
  const navigation = {navigate: () => {}}
  spyOn(navigation,'navigate')
const page = render(<StoreDetails navigation={navigation} />);

const StoreDetails = page.getByTestId('StoreDetails');


//const registerButton = page.getByTestId('registerButton');

fireEvent.press(StoreDetails);

expect(navigation.navigate.toHaveBeenCalledWith("SlotAvailability"));
})