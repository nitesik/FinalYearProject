import { StyleSheet, View, Text } from "react-native";
import globalStyles from "../style/globalStyles";
import { Card } from "@rneui/base"

function About() {

  return (
    <View style={globalStyles.container}>
      <Card containerStyle={styles.card}>
        <Text style={styles.baseText}>Dyslexia is a learning disorder that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words (decoding). Also called a reading disability, dyslexia is a result of individual differences in areas of the brain that process language.</Text>
      </Card>
      <Card containerStyle={styles.card}>
        <Text style={styles.baseText}>Dyslexia is not due to problems with intelligence, hearing or vision. Most children with dyslexia can succeed in school with tutoring or a specialized education program. Emotional support also plays an important role.</Text>
      </Card>
      <Card containerStyle={styles.card}>
        <Text style={styles.baseText}>Though there's no cure for dyslexia, early assessment and intervention result in the best outcome. Sometimes dyslexia goes undiagnosed for years and isn't recognized until adulthood, but it's never too late to seek help.</Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 17,
    marginVertical: 5
  },
  card: {
    borderRadius: 15
  }
});

export default About;