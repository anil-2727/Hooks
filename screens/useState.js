
import  React,{useState} from "react";
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

const Home =()=>{
    const [number,setNumber]= useState(0)
    return(
        <NativeBaseProvider>
            <Center mt="200">
                {number}
                <Button mt="50" onPress={()=>setNumber(Prevcount => Prevcount+1)}>add</Button>
                <Button onPress={()=>setNumber(Prevcount => Prevcount-1)}>sub</Button>
            </Center>
        </NativeBaseProvider>

    )
}
export default Home;