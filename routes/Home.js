import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import globalStyles from "../style/globalStyles";

function Home({ navigation }) {

  return (
    <View style={globalStyles.container}>
        <View style={{height: "10%"}}/>
        <Text style={globalStyles.button} onPress={() => {navigation.navigate("Scan")}}>Scan</Text>
        <Text style={globalStyles.button} onPress={() => {navigation.navigate("Exercises")}}>Exercises</Text>
        <Text style={globalStyles.button} onPress={() => {navigation.navigate("About")}}>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
});

export default Home;