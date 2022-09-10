import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./routes/Home";
import Scan from './screens/Scan';
import Exercises from './screens/Exercises';
import About from './screens/About';
import Exercise_1 from "./screens/ExerciseList/Exercise_1"

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: "center"}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Exercises" component={Exercises} />
        <Stack.Screen name="About" component={About} options={() => ({
          title: "About Dyslexia & This App"
        })} />
        <Stack.Screen name="Exercise 1" component={Exercise_1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

