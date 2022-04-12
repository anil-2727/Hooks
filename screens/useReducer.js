
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

const intialState = 0;

const reducer =(state,action)=>{
    console.log(state,action)
if(action.type === "INCREMENET" ){
return state +1;
}
if(action.type === "DECREMENET" ){
    return state -1 ;
    }
return state
}


const usereducer =()=>{
    // const [number,setNumber]= useState(0)
    const [state,dispatch]=useReducer(reducer,intialState)
//in usestate u need to add usestate for each and every state na but in useReducer u can handle in only one reducer
//with the help of dispatch the diff action will be excuted
    /*add one more find no need to add usestate again n again*/

    return(
        <NativeBaseProvider>
            <Center mt="200">
                {state}
                <Button mt="50" onPress={()=>dispatch({type :"INCREMENET"})}>add</Button>
                <Button onPress={()=>dispatch({type :"DECREMENET"})}>sub</Button>
             
            </Center>
        </NativeBaseProvider>

    )
}
export default usereducer;