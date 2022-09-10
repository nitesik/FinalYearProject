import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import globalStyles from "../../style/globalStyles";
import { AntDesign } from '@expo/vector-icons';
import { Card } from "@rneui/base"

function Exercise_1() {

  const [word_1] = useState(['T', 'Y', 'H', 'E']);
  const [word_1_Ans, setWord_1_Ans] = useState([]);

  const [word_2] = useState(['R', 'S', 'T', 'A']);
  const [word_2_Ans, setWord_2_Ans] = useState([]);
  
  const [word_3] = useState(['E', 'I', 'K', 'T']);
  const [word_3_Ans, setWord_3_Ans] = useState([]);
  
  const [word_4] = useState(['B', 'B', 'Y', 'A']);
  const [word_4_Ans, setWord_4_Ans] = useState([]);

  const [word_5] = useState(['R', 'I', 'B', 'D']);
  const [word_5_Ans, setWord_5_Ans] = useState([]);

  const [word_6] = useState(['T', 'O', 'A', 'B']);
  const [word_6_Ans, setWord_6_Ans] = useState([]);

  const [word_7] = useState(['O', 'O', 'K', 'B']);
  const [word_7_Ans, setWord_7_Ans] = useState([]);

  const [word_8] = useState(['K', 'E', 'C', 'A']);
  const [word_8_Ans, setWord_8_Ans] = useState([]);

  const [word_9] = useState(['C', 'Y', 'I', 'T']);
  const [word_9_Ans, setWord_9_Ans] = useState([]);
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
        <View style={styles.innerText}>
          {word_1.map((val, i) => <Text key={i} style={styles.letter} onPress={() => word_1_Ans.length < 4 && setWord_1_Ans([...word_1_Ans, val])}>{val}</Text>)}
          <AntDesign name="arrowright" size={36} style={{marginTop: 8}} color="black" />
          {word_1_Ans.map((val, i) => <Text key={i} onPress={() => {setWord_1_Ans(prevData => prevData.filter(a => a !== val))}} style={styles.letter}>{val}</Text>)}
        </View>
        </Card>

        <Card containerStyle={styles.card}>
        <View style={styles.innerText}>
          {word_2.map((val, i) => <Text key={i} style={styles.letter} onPress={() => word_2_Ans.length < 4 && setWord_2_Ans([...word_2_Ans, val])}>{val}</Text>)}
          <AntDesign name="arrowright" size={36} style={{marginTop: 8}} color="black" />
          {word_2_Ans.map((val, i) => <Text key={i} onPress={() => {setWord_2_Ans(prevData => prevData.filter(a => a !== val))}} style={styles.letter}>{val}</Text>)}
        </View>
        </Card>

        <Card containerStyle={styles.card}>
        <View style={styles.innerText}>
          {word_3.map((val, i) => <Text key={i} style={styles.letter} onPress={() => word_3_Ans.length < 4 && setWord_3_Ans([...word_3_Ans, val])}>{val}</Text>)}
          <AntDesign name="arrowright" size={36} style={{marginTop: 8}} color="black" />
          {word_3_Ans.map((val, i) => <Text key={i} onPress={() => {setWord_3_Ans(prevData => prevData.filter(a => a !== val))}} style={styles.letter}>{val}</Text>)}
        </View>
        </Card>
        
        <Card containerStyle={styles.card}>
        <View style={styles.innerText}>
          {word_4.map((val, i) => <Text key={i} style={styles.letter} onPress={() => word_4_Ans.length < 4 && setWord_4_Ans([...word_4_Ans, val])}>{val}</Text>)}
          <AntDesign name="arrowright" size={36} style={{marginTop: 8}} color="black" />
          {word_4_Ans.map((val, i) => <Text key={i} onPress={() => {setWord_4_Ans(prevData => prevData.filter(a => a !== val))}} style={styles.letter}>{val}</Text>)}
        </View>
        </Card>

        <Card containerStyle={styles.card}>
        <View style={styles.innerText}>
          {word_5.map((val, i) => <Text key={i} style={styles.letter} onPress={() => word_5_Ans.length < 4 && setWord_5_Ans([...word_5_Ans, val])}>{val}</Text>)}
          <AntDesign name="arrowright" size={36} style={{marginTop: 8}} color="black" />
          {word_5_Ans.map((val, i) => <Text key={i} onPress={() => {setWord_5_Ans(prevData => prevData.filter(a => a !== val))}} style={styles.letter}>{val}</Text>)}
        </View>
        </Card>

        <Card containerStyle={styles.card}>
        <View style={styles.innerText}>
          {word_6.map((val, i) => <Text key={i} style={styles.letter} onPress={() => word_6_Ans.length < 4 && setWord_6_Ans([...word_6_Ans, val])}>{val}</Text>)}
          <AntDesign name="arrowright" size={36} style={{marginTop: 8}} color="black" />
          {word_6_Ans.map((val, i) => <Text key={i} onPress={() => {setWord_6_Ans(prevData => prevData.filter(a => a !== val))}} style={styles.letter}>{val}</Text>)}
        </View>
        </Card>

        <Card containerStyle={styles.card}>
        <View style={styles.innerText}>
          {word_7.map((val, i) => <Text key={i} style={styles.letter} onPress={() => word_7_Ans.length < 4 && setWord_7_Ans([...word_7_Ans, val])}>{val}</Text>)}
          <AntDesign name="arrowright" size={36} style={{marginTop: 8}} color="black" />
          {word_7_Ans.map((val, i) => <Text key={i} onPress={() => {setWord_7_Ans(prevData => prevData.filter(a => a !== val))}} style={styles.letter}>{val}</Text>)}
        </View>
        </Card>

        <Card containerStyle={styles.card}>
        <View style={styles.innerText}>
          {word_8.map((val, i) => <Text key={i} style={styles.letter} onPress={() => word_8_Ans.length < 4 && setWord_8_Ans([...word_8_Ans, val])}>{val}</Text>)}
          <AntDesign name="arrowright" size={36} style={{marginTop: 8}} color="black" />
          {word_8_Ans.map((val, i) => <Text key={i} onPress={() => {setWord_8_Ans(prevData => prevData.filter(a => a !== val))}} style={styles.letter}>{val}</Text>)}
        </View>
        </Card>

        <Card containerStyle={styles.card}>
        <View style={styles.innerText}>
          {word_9.map((val, i) => <Text key={i} style={styles.letter} onPress={() => word_9_Ans.length < 4 && setWord_9_Ans([...word_9_Ans, val])}>{val}</Text>)}
          <AntDesign name="arrowright" size={36} style={{marginTop: 8}} color="black" />
          {word_9_Ans.map((val, i) => <Text key={i} onPress={() => {setWord_9_Ans(prevData => prevData.filter(a => a !== val))}} style={styles.letter}>{val}</Text>)}
        </View>
        </Card>
        
      <View style={{height: 25}} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    // justifyContent: "center"
    backgroundColor: "rgb(29, 155, 240)",
  },
  innerText: {
    color: "red",
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  card: {
    borderRadius: 15, 
    flexDirection: "row", 
    alignItems: "flex-start",
    marginHorizontal: 0,
    padding: 2,
    width: "101%"
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
  }
})

export default Exercise_1;
