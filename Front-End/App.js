import React, {Component} from 'react';
import {StyleSheet, Text, View,FlatList} from 'react-native';
export default class App extends Component{

  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('https://raw.githubusercontent.com/RouachedHoussamEddine/Tp.bouzarita/main/Front-End/API');
    const users = await response.json();
    this.setState({data: users});

  }
componentDidMount(){
  this.fetchData();
}
  render() {
    return (
      <View >
       <FlatList
       data={this.state.data}
       keyExtractor={(item,index) => index.toString()}
       renderItem={({item}) =>

       <View style={{backgroundColor:'#abc123',padding:10,margin:10}}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>{item.name}</Text>
          <Text style={{color:'#fff'}}>{item.email}</Text>
          <Text>City: {item.address.city}</Text>
         </View>

       }

       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
