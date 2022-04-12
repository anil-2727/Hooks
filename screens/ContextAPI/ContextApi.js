
import  React,{createContext} from "react";
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

const FirstName = createContext()


const ContextAPI =()=>{
    
 
    return(
        <NativeBaseProvider>
            <FirstName.Provider value={"ANIL "}>
            <Center>
                
                <CompC/>
                 
                </Center>
            </FirstName.Provider>
            
        </NativeBaseProvider>

    )
}
export default ContextAPI;
export {FirstName};