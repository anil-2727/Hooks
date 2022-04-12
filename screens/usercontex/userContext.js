import React, { createContext } from "react";
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
import CompC from "./compC";

const FirstName = createContext();

//usercontext is similar to contextApi only reciving end is changed ,passing end is same

const userContext = () => {
  return (
    <NativeBaseProvider>
      <FirstName.Provider value={"ANIL "}>
        <Center>
          <CompC />
        </Center>
      </FirstName.Provider>
    </NativeBaseProvider>
  );
};
export default userContext;
export { FirstName };
