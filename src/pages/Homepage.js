import React from 'react';
import { View, Button, KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { Location, Permission } from 'expo';

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
  
class Login extends React.Component{

  state = {
    latitude: null,
    longitude: null
  };

  findCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);

        this.setState({
          latitude,
          longitude
        });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  login(email, password){
    firebase.database().ref('trees/').push({
      email,
      password,
    }).then((data) => {
      console.log('data ' + data)
    }).catch((error) => {
      console.log('error', error)
    })
  }

    render(){
        return(
            <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
                <Image source={logoImg} style={styles.img}/>

                <View style={styles.form}>
                  <Text>My Location is {this.state.latitude}, {this.state.longitude}</Text>
                  <Text style={styles.label}>SEU E-MAIL *</Text>
                  <TextInput
                  style={styles.input}
                  placeholder="Seu e-mail"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText = {(email) => this.setState({email})}
                  />

                  <Text style={styles.label}>Senha</Text>
                  <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#999"
                  autoCapitalize="words"
                  autoCorrect={false}
                  onChangeText = {(password) => this.setState({password})}
                  />

                  <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Homepage")}/*onPress={() => this.login(this.state.email, this.state.password)}*/>
                  <Text style={styles.buttonText}>Encontrar spots</Text>
                  </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    img : {
        width: 265.2,
        height: 178.4
    },
  
    form: {
      alignSelf: 'stretch',
      paddingHorizontal: 30,
      marginTop: 30,
    },
  
    label: {
      fontWeight: 'bold',
      color: '#444',
      marginBottom: 8,
    },
  
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      paddingHorizontal: 20,
      fontSize: 16,
      color: '#444',
      height: 44,
      marginBottom: 20,
      borderRadius: 2
    },
  
    button: {
      height: 42,
      backgroundColor: '#f05a5b',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
    },
  
    buttonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

export default Login;