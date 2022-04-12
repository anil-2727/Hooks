
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
import { FirstName } from "./ContextApi";

//IN CONSUMER WE SHD WRITE IN FUNCTION ONLY
//consumer means reciver

const CompC =()=>{
    

    return( 
        <NativeBaseProvider>
            <FirstName.Consumer>{(First)=>{
        return <Text> GOOD AFTER NOON {First} </Text>
        }}
            </FirstName.Consumer>
        </NativeBaseProvider>

    )
}
export default CompC; 