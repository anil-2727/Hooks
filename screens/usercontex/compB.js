
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
import CompC from "./compC";



const CompB =()=>{
    

    return(
        <NativeBaseProvider>
            <Center>
            <CompC/>
             
            </Center>
        </NativeBaseProvider>

    )
}
export default CompB;