import { useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import dyslexia from "../assets/images/dyslexia.jpg";
import globalStyles from "../style/globalStyles";

function Home({ navigation }) {

  return (
    <View style={globalStyles.container}>
        <Image source={dyslexia} style={styles.image} alt="Dyslexia Jpg" />
        <View style={{height: "5%"}}/>
        <Text style={globalStyles.button} onPress={() => {navigation.navigate("Scan")}}>Scan</Text>
        <Text style={globalStyles.button} onPress={() => {navigation.navigate("Exercises")}}>Exercises</Text>
        <Text style={globalStyles.button} onPress={() => {navigation.navigate("About")}}>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 400,
    marginTop: 20,
    borderRadius: 15,
    
    
  }
});

export default Home;