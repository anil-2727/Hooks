import React, { useContext, useReducer } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base";
import { FirstName } from "./userContext";

const CompC = () => {
  const fName = useContext(FirstName);

  return (
    <NativeBaseProvider>
      <Center>my name is {fName}</Center>
    </NativeBaseProvider>
  );
};
export default CompC;
