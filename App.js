import * as React from "react";
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TrainingScreen from "./screens/TrainingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerTitleAlign: 'center'}} name="Login" component={LoginScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Main" component={MainScreen}/>
        <Stack.Screen options={{headerShown: false}} name="Training" component={TrainingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
