import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center"
    backgroundColor: "rgb(29, 155, 240)",
  },
  baseText: {
    fontFamily: "Cochin",
    fontSize: 15
  },
  button: {
    marginVertical: 20,
    borderWidth: 0,
    paddingVertical: 25,
    paddingHorizontal: 100,
    alignItems: "center",
    borderRadius: 40,
    justifyContent: "center",
    backgroundColor: "rgb(239, 243, 244)",
  }
})

export default globalStyles;