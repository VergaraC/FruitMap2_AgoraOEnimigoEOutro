import React from 'react';
import { View, Button, KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

import logoImg from '../assets/cherry.png'

class Login extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
                <Image source={logoImg} style={styles.img}/>

                <View style={styles.form}>
                    <Text style={styles.label}>SEU E-MAIL *</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Homepage")}>
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