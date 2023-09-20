import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, FlatList, StatusBar, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [title, setTitle] = useState('');
  const [meals, setMeals] = useState([]);

  const getMeals = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${title}`)
      .then(response => response.json())
      .then(responseJson => setMeals(responseJson.meals))
      .catch(error => {
        Alert.alert('Error', error);
      });
  }

  

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <Text style={styles.header}>Reseptinhaku</Text>
      </View>
      <FlatList
        style={{ marginLeft: '5%', marginTop: 20, }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
   
          <View>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom:5 }}>{item.strMeal}</Text>
            <Image source={{ uri: item.strMealThumb }} style={{ width: 150, height: 150, marginBottom: 20, marginRight: 300 }} />
            
          </View>}
        data={meals}
      />
      <TextInput
        style={{
          fontSize: 25,
          width: 250,
          backgroundColor: 'linen',
          color: 'black',
          borderColor: 'black',
          borderWidth: 3,
          marginBottom: 20,
          justifyContent:'center',
          textAlign:'center',
          borderRadius: 15,
          height: 50,
        

        }}
        placeholder='Ingredient'
        value={title}
        onChangeText={text => setTitle(text)}
      />
      
      <TouchableOpacity style={styles.button} title="Find" onPress={getMeals} >
        <Text style={styles.text}>Find</Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 50,
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor:'turquoise',
    textAlign:'center',
    color: 'black',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 50,
    marginBottom: 20

  },
  text: {
    fontSize: 20,
    fontWeight:'700'
  },
  header: {
    fontSize: 45,
    fontWeight:'700',
    marginTop: 10,
    backgroundColor: 'coral',
    borderWidth: 2,
    borderColor: 'coral',
    borderRadius: 10,
    width: 350,
    height: 70,
    textAlign:'center',
    justifyContent:'center'
    
  }
});