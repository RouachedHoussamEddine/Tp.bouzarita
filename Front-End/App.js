import React , {useState} from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';

export default function App() {
  const backend = () => {
    fetch('http://192.168.1.37/app/Backend/backend.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
      body:JSON.stringify({
        key:'test',
      })
    })
    .then((Response) => Response.json())
    .then((res) =>{
      alert(res.message);
    })
    .done();
  }
  return (
    <View style={styles.container}>
        <Button title='click me'
        onPress = {backend}
        />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
