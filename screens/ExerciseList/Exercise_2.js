import { ScrollView, Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { Card } from "@rneui/base";
import { useEffect } from "react";


function Exercise_2() {

  const [word_1, setWord_1] = useState(['K', 'I', word_1_Ans || '?', 'E']);
  const [word_1_texts] = useState(['T', 'D']);
  const [word_1_Ans, setWord_1_Ans] = useState();

  const [word_2_Ans, setWord_2_Ans] = useState('');
  const [word_2, setWord_2] = useState(['A', word_2_Ans || '?', 'S', 'O']);
  const [word_2_texts] = useState(['L', 'I']);

  const [word_3_Ans, setWord_3_Ans] = useState('');
  const [word_3, setWord_3] = useState(['B', 'A', word_3_Ans || '?', 'Y']);
  const [word_3_texts] = useState(['B', 'D']);

  const [word_4_Ans, setWord_4_Ans] = useState('');
  const [word_4, setWord_4] = useState(['D', 'R', 'O', word_4_Ans || '?']);
  const [word_4_texts] = useState(['Q', 'P']);

  const [word_5_Ans, setWord_5_Ans] = useState('');
  const [word_5, setWord_5] = useState([word_5_Ans || '?', 'A', 'R', 'N']);
  const [word_5_texts] = useState(['3', 'E']);

  const [word_6_Ans, setWord_6_Ans] = useState('');
  const [word_6, setWord_6] = useState(['G', 'A', word_6_Ans || '?', 'E']);
  const [word_6_texts] = useState(['M', 'E']);

  const [word_7_Ans, setWord_7_Ans] = useState('');
  const [word_7, setWord_7] = useState(['G', 'L', word_7_Ans || '?', 'D']);
  const [word_7_texts] = useState(['A', '4']);

  const [word_8_Ans, setWord_8_Ans] = useState('');
  const [word_8, setWord_8] = useState(['Y', 'E', 'A', word_8_Ans || '?']);
  const [word_8_texts] = useState(['N', 'R']);

  const [word_9_Ans, setWord_9_Ans] = useState('');
  const [word_9, setWord_9] = useState(['K', 'I', word_9_Ans || '?', 'E']);
  const [word_9_texts] = useState(['T', 'D']);

  const [word_10_Ans, setWord_10_Ans] = useState('');
  const [word_10, setWord_10] = useState(['K', 'I', word_10_Ans || '?', 'E']);
  const [word_10_texts] = useState(['T', 'D']);

  const [button, setButton] = useState(false);
  
  

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <View style={styles.innerText}>
            {word_1.map((val, i) => <Text key={i} style={styles.letter}>{val}</Text>) }
            <Text style={{width: 50}}> </Text>
            <Text style={styles.letter}><Text style={{margin: 20}}>{word_1_texts[0]}</Text></Text>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.letter}>{word_1_texts[1]}</Text>
          </View>
        </Card>
        <Card containerStyle={styles.card}>
          <View style={styles.innerText}>
            {word_2.map((val, i) => <Text key={i} style={styles.letter}>{val}</Text>) }
            <Text style={{width: 50}}> </Text>
            <Text style={styles.letter}>{word_2_texts[0]}</Text>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.letter} >{word_2_texts[1]}</Text>
          </View>
        </Card>
        <Card containerStyle={styles.card}>
          <View style={styles.innerText}>
            {word_3.map((val, i) => <Text key={i} style={styles.letter}>{val}</Text>) }
            <Text style={{width: 50}}> </Text>
            <Text style={styles.letter} onPress={() => {setWord_3_Ans(word_3_texts[0]); setButton(!button)}}>{word_3_texts[0]}</Text>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.letter} onPress={() => {setWord_3_Ans(word_3_texts[1]); setButton(!button)}}>{word_3_texts[1]}</Text>
          </View>
        </Card>
        <Card containerStyle={styles.card}>
          <View style={styles.innerText}>
            {word_4.map((val, i) => <Text key={i} style={styles.letter}>{val}</Text>) }
            <Text style={{width: 50}}> </Text>
            <Text style={styles.letter} onPress={() => {setWord_4_Ans(word_4_texts[0]); setButton(!button)}}>{word_4_texts[0]}</Text>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.letter} onPress={() => {setWord_4_Ans(word_4_texts[1]); setButton(!button)}}>{word_4_texts[1]}</Text>
          </View>
        </Card>
        <Card containerStyle={styles.card}>
          <View style={styles.innerText}>
            {word_5.map((val, i) => <Text key={i} style={styles.letter}>{val}</Text>) }
            <Text style={{width: 50}}> </Text>
            <Text style={styles.letter} onPress={() => {setWord_5_Ans(word_5_texts[0]); setButton(!button)}}>{word_5_texts[0]}</Text>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.letter} onPress={() => {setWord_5_Ans(word_5_texts[1]); setButton(!button)}}>{word_5_texts[1]}</Text>
          </View>
        </Card>
        <Card containerStyle={styles.card}>
          <View style={styles.innerText}>
            {word_6.map((val, i) => <Text key={i} style={styles.letter}>{val}</Text>) }
            <Text style={{width: 50}}> </Text>
            <Text style={styles.letter} onPress={() => {setWord_6_Ans(word_6_texts[0]); setButton(!button)}}>{word_6_texts[0]}</Text>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.letter} onPress={() => {setWord_6_Ans(word_6_texts[1]); setButton(!button)}}>{word_6_texts[1]}</Text>
          </View>
        </Card>
        <Card containerStyle={styles.card}>
          <View style={styles.innerText}>
            {word_7.map((val, i) => <Text key={i} style={styles.letter}>{val}</Text>) }
            <Text style={{width: 50}}> </Text>
            <Text style={styles.letter} onPress={() => {setWord_7_Ans(word_7_texts[0]); setButton(!button)}}>{word_7_texts[0]}</Text>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.letter} onPress={() => {setWord_7_Ans(word_7_texts[1]); setButton(!button)}}>{word_7_texts[1]}</Text>
          </View>
        </Card>
        <Card containerStyle={styles.card}>
          <View style={styles.innerText}>
            {word_8.map((val, i) => <Text key={i} style={styles.letter}>{val}</Text>) }
            <Text style={{width: 50}}> </Text>
            <Text style={styles.letter} onPress={() => {setWord_8_Ans(word_8_texts[0]); setButton(!button)}}>{word_8_texts[0]}</Text>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.letter} onPress={() => {setWord_8_Ans(word_8_texts[1]); setButton(!button)}}>{word_8_texts[1]}</Text>
          </View>
        </Card>
        <Card containerStyle={styles.card}>
          <View style={styles.innerText}>
            {word_9.map((val, i) => <Text key={i} style={styles.letter}>{val}</Text>) }
            <Text style={{width: 50}}> </Text>
            <Text style={styles.letter} onPress={() => {setWord_9_Ans(word_9_texts[0]); setButton(!button)}}>{word_9_texts[0]}</Text>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.letter} onPress={() => {setWord_9_Ans(word_9_texts[1]); setButton(!button)}}>{word_9_texts[1]}</Text>
          </View>
        </Card>
        <Card containerStyle={styles.card}>
          <View style={styles.innerText}>
            {word_10.map((val, i) => <Text key={i} style={styles.letter}>{val}</Text>) }
            <Text style={{width: 50}}> </Text>
            <Text style={styles.letter} onPress={() => {setWord_10_Ans(word_10_texts[0]); setButton(!button)}}>{word_10_texts[0]}</Text>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.letter} onPress={() => {setWord_10_Ans(word_10_texts[1]); setButton(!button)}}>{word_10_texts[1]}</Text>
          </View>
        </Card>
        <View style={{height: 30}}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "flex-start",
    display: "flex",
    backgroundColor: "rgb(29, 155, 240)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  innerText: {
    color: "red",
    display: "flex",
    flexDirection: "row",
    // alignItems: "flex-start",
    marginVertical: 10,
    gap: 10
  },
  card: {
    display: "flex",
    alignItems: "center",
    borderRadius: 15, 
    flexDirection: "row", 
    alignItems: "flex-start",
    padding: 2,
    width: "90%",
    marginHorizontal: 10
},
  letter: {
    padding: 8,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "dashed",
    marginHorizontal: 2,
    paddingHorizontal: 12,
    borderRadius: 5,
    fontSize: 20,
  },
  or: {
    marginHorizontal: 10,
    fontSize: 20,
    marginTop: 10
  }
})

export default Exercise_2;