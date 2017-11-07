import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  ComponentWillMount() {
    const config = {
    apiKey: 'AIzaSyCH1lFv2azCvmZAldekHjdCzPiRxoX0okU',
    authDomain: 'driven-ade2d.firebaseapp.com',
    databaseURL: 'https://driven-ade2d.firebaseio.com',
    projectId: 'driven-ade2d',
    storageBucket: 'driven-ade2d.appspot.com',
    messagingSenderId: '153028246841'
  };
  firebase.initializeApp(config);
}
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>

        </View>
      </Provider>
    );
  }
}

export default App;
