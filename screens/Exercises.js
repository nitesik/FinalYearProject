import { StyleSheet, View, Text, ScrollView } from "react-native";
import globalStyles from "../style/globalStyles";
import { Button } from "@rneui/base";

function Exercises({ navigation }) {

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <View>
        <View style={{height: "3%"}}/>
        <Button buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }} containerStyle = {styles.button} title="Exercise 1" onPress={() => navigation.navigate("Exercise 1")} ></Button>
        <Button buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }} containerStyle = {styles.button} title="Exercise 2"></Button>
        <Button buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }} containerStyle = {styles.button} title="Exercise 3"></Button>
        <Button buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }} containerStyle = {styles.button} title="Exercise 4"></Button>
        <Button buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }} containerStyle = {styles.button} title="Exercise "></Button>
        <View style={{height: 50}}/>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    marginHorizontal: 50,
    marginVertical: 20,
    borderRadius: 5
  }
});

export default Exercises;