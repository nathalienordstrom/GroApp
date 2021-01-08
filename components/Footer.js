import React, { useState } from 'react'
import styled from 'styled-components/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Footer = () => {

    return (
        <FooterContainer>
            <Icon>
                <MaterialCommunityIcons name="fountain-pen-tip" size={40} color="#BD614E" />
                <Text>Dagbok</Text>
            </Icon>
            <Icon>
            <FontAwesome5 name="readme" size={40} color="#5A673E" />
            <Text>Utforska</Text>

            </Icon>
            <Icon>
            <FontAwesome name="bar-chart" size={40} color="#E4C9D6" />
            <Text>Statestik</Text>
            </Icon>
            <Icon>
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