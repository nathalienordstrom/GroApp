import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import Header from '../components/Header'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Profile = ({ navigation }) => {

    return (
        <>
            <Main>
                <Header />
            </Main>
            <FooterContainer> 
            <Icon>
            <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
                <MaterialCommunityIcons name="fountain-pen-tip" size={40} color="#ABA97B" />
                <Text>Dagbok</Text>
                </TouchableOpacity>
            </Icon>
            <Icon> 
            <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
                <FontAwesome5 name="readme" size={40} color="#ABA97B" />
                <Text>Utforska</Text>
                </TouchableOpacity>
            </Icon>

            <Icon>
            <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
                <FontAwesome name="bar-chart" size={40} color="#ABA97B" />
                <Text>Statestik</Text>
                </TouchableOpacity>
            </Icon>

            <Icon>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <FontAwesome name="child" size={40} color="#CE7937" onPress={() => navigation.navigate('Profile')}  />
                <Text>Profil</Text>
                </TouchableOpacity>
            </Icon> 
            </FooterContainer>
        </>
    )
}

const Main = styled.View`
flex: 1;
background-color:#CE7937;
`
const FooterContainer = styled.View`
margin-top: 0px;
height: 100px;
width: 100%;
flex-direction:row;
align-items: center;
justify-content: space-evenly;
`
const Text = styled.Text`
font-size: 15px;
`

const Icon = styled.View`
align-items: center;
`
export default Profile