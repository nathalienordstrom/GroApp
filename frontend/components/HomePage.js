import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import logo from '../assets/background.png';

import AddName from './AddName'

import { EvilIcons } from '@expo/vector-icons';

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
            <InputContainer>
               <AddName submitHandler={submitHandler} />
            </InputContainer>
            <BackgroundImage>

                <Image source={logo} style={styles.image} />
            </BackgroundImage>
            <Icon>

                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <EvilIcons name="arrow-right" size={90} color="#ABA97B" />
                </TouchableOpacity>

            </Icon>
        </Container >
    )

}

const styles = StyleSheet.create({
    image: {
        marginTop: 30,
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
`
const InputContainer = styled.View`
margin-top: 50;
color: red;
align-items: center;
`

const BackgroundImage = styled.View`


`
const Icon = styled.View`
align-items:center;
`
const ButtonBox = styled.View`
border-radius: 10px;
width:100px;
padding: 0;
align-items: center;
font-weight:bold;
`
const ButtonText = styled.Text`
color: white;
font-weight:bold;
`


export default HomePage;