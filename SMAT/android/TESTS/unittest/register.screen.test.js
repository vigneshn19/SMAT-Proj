//Ravi Teja Ainampudi
import React from "react";
import { View, Button,TextInput, Text , Alert, DevSettings} from "react-native";
import Formstyle from "../../STYLE/Formstyle";
import { fireEvent, render } from "@testing-library/react-native";

import HomePage from "../../../src/pages/Register.js";


describe('Registration screen', () => {
  const navigation = {navigate: () => {}}
  spyOn(navigation,'navigate')
const page = render(<Register navigation={navigation} />);

const fname = page.getByTestId('FirstName');
const lname = page.getByTestId('LastName');
const email = page.getByTestId('EmailId');
const password = page.getByTestId('Passowrd');
const mobile = page.getByTestId('MobileNumber');

const registerButton = page.getByTestId('registerButton');

fireEvent.press(registerButton);

expect(navigation.navigate.toHaveBeenCalledWith("Login"));
})