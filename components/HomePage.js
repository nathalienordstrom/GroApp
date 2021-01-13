import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import logo from '../assets/background.png';

import { EvilIcons } from '@expo/vector-icons';


const HomePage = ({ navigation }) => {

    return (
        <Container>
            <BackgroundImage>
                <Image source={logo} style={styles.image} />
            </BackgroundImage>
            <Icon>
                <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
                    <EvilIcons name="arrow-right" size={90} color="#ABA97B"  />
                </TouchableOpacity>
            </Icon>
        </Container >
    )

}

const styles = StyleSheet.create({
    image: {
        marginTop: 30,
        width: 350,
        height: 600
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
const BackgroundImage = styled.View`
margin-top: 0px;
`
const Icon = styled.View`
align-items:center;
`

export default HomePage;