import React from 'react'
import styled from 'styled-components/native';
import { Button } from 'react-native';


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Footer = ({ navigation }) => {

    return (
        <FooterContainer>
            <Icon>
                <Button title="Start" onPress={() => navigation.navigate('Diary')} />
                <MaterialCommunityIcons name="fountain-pen-tip" size={40} color="#BD614E" />
                <Text>Dagbok</Text>
            </Icon>

            <Icon>
                <Button title="Start" onPress={() => navigation.navigate('Explore')} />
                <FontAwesome5 name="readme" size={40} color="#5A673E" />
                <Text>Utforska</Text>
            </Icon>

            <Icon>
                <Button title="Start" onPress={() => navigation.navigate('Statistics')} />
                <FontAwesome name="bar-chart" size={40} color="#E4C9D6" />
                <Text>Statestik</Text>
            </Icon>

            <Icon>
                <Button title="Start" onPress={() => navigation.navigate('Profile')} />
                <FontAwesome name="child" size={40} color="#CE7937" />
                <Text>Profil</Text>
            </Icon>
        </FooterContainer>
    )

}

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


export default Footer;