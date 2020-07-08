import React from 'react';
import { Text, View, StyleSheet, Image, Button, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';

import * as firebase from 'firebase';

import logoImg from '../assets/logo.png'

const firebaseConfig = {
    apiKey: "AIzaSyBZMV46sJcxT_-a8qmEm9OAUuri58Zlj0w",
    authDomain: "fruitmapweb.firebaseapp.com",
    databaseURL: "https://fruitmapweb.firebaseio.com",
    projectId: "fruitmapweb",
    storageBucket: "fruitmapweb.appspot.com",
    messagingSenderId: "378568011848",
    appId: "1:378568011848:web:c744e3bbb287bc9ce1287d"
  };

if (!firebase.apps.length){
  const app = firebase.initializeApp(firebaseConfig);
}

class MapPage extends React.Component{
  
  state = {
    trees: [],
    latitude: null,
    longitude: null
  }

  // componentDidMount() {
  //   firebase.database().ref("trees").on("value", datasnapshot => {
  //     console.log( datasnapshot.val())
  //     this.setState({
  //     trees: datasnapshot.val()
  //   })
  //   })
  // }
    
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <MapView
        initialRegion={{
          latitude: -22.2241833,
          longitude: -54.8121767,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0031,
        }}
        showsUserLocation
        loadingEnabled
        style={styles.mapView}>
          
          {
            // this.state.trees.map(marker =>{

            // })
          }

        </MapView>

        <View style={styles.header}>
          <Image source={logoImg} style={styles.image}/>
        </View>

        <Button title='next' onPress={() => this.props.navigation.navigate("Cadastro")} style={styles.button}/>
      </SafeAreaView>
    );
  }
}

export default MapPage;

const styles = StyleSheet.create({
  mapView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#dbdbdb"
  },

  image: {
    width: 132.6,
    height: 89.2
  }

});