import React from 'react';
import {Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as Location from 'expo-location';

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

if (!firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
}

class Homepage extends React.Component {

    state = {
        location: {},
        latitude: null,
        longitude: null
    }

    componentWillMount() {
        this._getLocation();
    }

    componentDidMount() {
        firebase.database().ref("trees").on("value", datasnapshot => {
            console.log(datasnapshot.val())
            this.setState({
                trees: datasnapshot.val()
            })
        })
    }

    _getLocation = async () => {
        const {status} = await Location.requestPermissionsAsync();

        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});

        this.setState({
            location: location,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        })
    }

    login(email, password, latitude, longitude) {
        firebase.database().ref('trees/').push({
            email,
            password,
            latitude,
            longitude
        }).then((data) => {
            console.log('data' + data)
            console.log('Arvore Cadastrada no Firebase ')
        }).catch((error) => {
            console.log('error', error)
        })
        componentDidMount()
    }

    render() {
        return (
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
                        onChangeText={(email) => this.setState({email})}
                    />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        autoCapitalize="words"
                        autoCorrect={false}
                        onChangeText={(password) => this.setState({password})}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => {
                        componentDidMount()
                        this.login(this.state.email, this.state.password, this.state.latitude, this.state.longitude);
                        this.props.navigation.navigate("Login");
                    }}>
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

    img: {
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

export default Homepage;