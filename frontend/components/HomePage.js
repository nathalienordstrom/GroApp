import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image, TouchableOpacity, TextInput, View } from 'react-native';
import logo from '../assets/background.png';

import { FontAwesome } from '@expo/vector-icons';

import { EvilIcons } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomePage = ({ navigation }) => {
    const [food, setFood] = useState([
        // { text: 'Broccoli', key: '1' },
        // { text: 'Morot', key: '2' },
        // { text: 'Ärtor', key: '3' },

    ])

    const submitHandler = (text) => {

        if (text.length > 2) {
            setFood((prevFood) => {
                return [
                    { text: text, key: Math.random().toString() },
                    ...prevFood
                ];
            })
        } else {
            Alert.alert('Oops!', 'Mer än 2 bokstäver behövs', [
                { text: 'Ok', onPress: () => console.log('alert closed') }
            ]);
        }
    }

    return (
        <Container>

            <BackgroundImage>
                <Image source={logo} style={styles.image} />
            </BackgroundImage>
            <Buttons>
                <TouchableOpacity onPress={() => navigation.navigate('SignUpForm')}>
                    <View style={styles.button}>
                        <ButtonText>Bli medlem</ButtonText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LoginForm')}>
                    <View style={styles.button}>
                        <ButtonText>Logga in</ButtonText>
                    </View>
                </TouchableOpacity>
            </Buttons>
        </Container >
    )

}

const styles = StyleSheet.create({
    image: {
        marginTop: 60,
        width: 350,
        height: 550
    },
    input: {
        borderWidth: 2,
        borderColor: '#ABA97B',
        borderRadius: 10,
        padding: 5,
        backgroundColor: 'white',
        height: 50,
        width: 200,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
        fontSize: 20,
        color: '#ABA97B',
    },
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        margin: 8,
        backgroundColor: 'white',
        shadowColor: '#202020',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 2,
        shadowOffset: {
            height: 1,
            width: 1,
          },
          shadowRadius: 1,
          elevation: 6,
        
    }
})

const Container = styled.View`
flex:1;
background-color: white;
width: 100%;
height:1000px;
color: white;
flex-direction: column;
justify-content:flex-start;
border: solid 1px black;
`
const BackgroundImage = styled.View`

`
const Icon = styled.View`
align-items:center;
`
const Buttons = styled.View`
flex-direction: column;
justify-content: center;
align-items: center;
`

const ButtonText = styled.Text`
color: grey;
font-size: 20px;

`



export default HomePage;