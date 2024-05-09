//Ravi Teja Ainampudi
import React from "react";
import { View, Button,TextInput, Text , Alert, DevSettings} from "react-native";
import Formstyle from "../../STYLE/Formstyle";
import { fireEvent, render } from "@testing-library/react-native";

import HomePage from "../../../src/pages/Register.js";


describe('Login screen', () => {
  const navigation = {navigate: () => {}}
  spyOn(navigation,'navigate')
const page = render(<Register navigation={navigation} />);

const email = page.getByTestId('EmailId');
const password = page.getByTestId('Passowrd');

const loginButton = page.getByTestId('loginButton');

fireEvent.press(loginButton);

expect(navigation.navigate.toHaveBeenCalledWith("StoreDetails"));
})