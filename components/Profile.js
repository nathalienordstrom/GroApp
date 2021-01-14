import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';

import Header from '../components/Header'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Morot from '../assets/morot.png'

const Profile = ({ navigation, props }) => {

    return (
        <>
            <Main>
                <HeaderContainer>
                    <HeaderText>
                        Profil
                        </HeaderText>
                   
                        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                            <Header />
                        </TouchableOpacity>
                </HeaderContainer>
                
                <ProfilBox>
                            <Image source={Morot} style={styles.morot} />
                        <AddName>
                        
 
                        </AddName>
                        </ProfilBox>



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
                        <FontAwesome name="child" size={40} color="#CE7937" onPress={() => navigation.navigate('Profile')} />
                        <Text>Profil</Text>
                    </TouchableOpacity>
                </Icon>
            </FooterContainer>
        </>
    )
}

const styles = StyleSheet.create({
    morot: {
        height: 100,
        width: 50,
        marginLeft: 10,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
    },

})

const Main = styled.View`
flex: 1;
background-color:#CE7937;
`
const AddName = styled.Text`
font-size: 20px; 
color:black;
`
const HeaderContainer = styled.View`
margin-top: 40px;
justify-content: space-between;
flex-direction: row;
`
const HeaderText = styled.Text`
padding: 10px 0 0 40px;
color: white;
font-size: 35px;
align-items: center;
`
const ProfilBox = styled.View`
flex-direction:row;
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