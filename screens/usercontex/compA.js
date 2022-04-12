
import  React,{useReducer} from "react";
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
import CompB from "./compB";



const CompA =()=>{
    

    return(
        <NativeBaseProvider>
            <Center>
            <CompB/>
             
            </Center>
        </NativeBaseProvider>

    )
}
export default CompA;