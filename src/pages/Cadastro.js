import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native'
import * as Location from 'expo-location';
import ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import logoImg from '../assets/logo.png'

import firebase from 'firebase';

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

class Cadastro extends React.Component{

  state = {
    image: null
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { statusRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { statusCamera } = await Permissions.askAsync(Permissions.CAMERA);
      
      if (statusRoll !== 'granted') {
        alert('Sorry, we need roll camera permissions to make this work!');
      }

      if (statusCamera !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
      }
    }
  };

  takePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false
    });

    this.setState({
      image: result.uri
    })
  }

  // uploadImage = async (uri, imageName) => {
  //   const response = await fetch(uri);
  //   const blob = await response.blob();

  //   var ref = firebase.storage().ref().child("images/" + imageName)
  //   return ref.put(blob);
  // }

  render(){
    
    return(
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={{uri: this.state.image}}/>
        <TouchableOpacity style={styles.buttonCamera} onPress={this.takePicture}>
          <Text style={styles.textButton}>Take a Photo</Text>
        </TouchableOpacity>
      </SafeAreaView>
      )
    }
  }  


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
    },

    image: {
      borderColor: "#dbdbdb"
    },

    buttonCamera: {
      backgroundColor: "#61dafb",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
      padding: 20
    },

    textButton: {
      textAlign: "center",
      fontSize: 16
    }
})

export default Cadastro;