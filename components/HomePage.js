import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Image } from 'react-native';
import logo from '../assets/background.png';


const HomePage = () => {
    return (
        <Container>
            <Logo>
                <Image source={logo} style={styles.image} />
            </Logo>

        </Container >
    )

}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 800
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
const Logo = styled.View`
margin-top: 40px;
`


export default HomePage;