//Ravi Teja Ainampudi
import React from "react";
import { View, Button,TextInput, Text , Alert} from "react-native";
import Formstyle from "../../STYLE/Formstyle";

import HomePage from "../../../src/pages/Register.js";



jest.mock(ImageServiceMock, () => () => ({
 getPost: async () => ({ id: 1, title: "test" })
}));
 describe("<HomePage />", () => {
   beforeEach(() => {});

  afterEach(() => {
   jest.clearAllMocks();
   });
 });
function ImageServiceMock(ImageServiceMock: any, arg1: () => () => { getPost: () => Promise<{ id: number; title: string; }>; }) {
    throw new Error("Function not implemented.");
}

