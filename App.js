
import * as React from "react";
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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from "./screens/useState";
// import usereducer from "./screens/useReducer";
// import ContextAPI from "./screens/ContextAPI/ContextApi";
import userContext from "./screens/usercontex/userContext";

const Stack = createNativeStackNavigator();

const App =()=>{
  return(
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="userContext"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            component={userContext}
            name="userContext"
            options={{headerShown: false}}
          />
          </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App;