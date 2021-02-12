import React, { useEffect, Component } from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity, Image, StyleSheet, Linking, Button } from 'react-native';

import Header from './Header';

import { user } from "../reducers/user";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Morot from '../assets/morot.png';
import HackadMorot from '../assets/hackadmorot.png';
import MorotBlom from '../assets/morotblom.png';

import { useNavigation } from '@react-navigation/native'


const NAME_URL = "http://localhost:8080/profile";

const Profile = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();
    const name = useSelector((store) => store.user.login.name);
    const userId = useSelector((store) => store.user.login.userId);
    const accessToken = useSelector((store) => store.user.login.accessToken);

    const userName = (userNameResponse) => {
        dispatch(
            user.actions.setName({
                name: userNameResponse.name,
            })
        );
    };

    useEffect(() => {
        fetch(`${NAME_URL}`, {
            method: "GET",
            headers: { "Content-Type": "application/json", "Authorization": accessToken },
        })
            .then((res) => res.json())
            .then((json) => userName(json))
    }, [])



    return (
        <>
            <Main>
                <HeaderContainer>
                    <HeaderText>
                        Profil
                        </HeaderText>
                    <TouchableOpacity onPress={() => navigation.navigate('HomePage')} >
                    
                    <Header />
                    </TouchableOpacity>
                </HeaderContainer>

                <ProfilBox>
                    <Image source={Morot} style={styles.morot} />

                    <ListContainer>
                        <List>
                            <ListText>
                                {`${name}`}
                            </ListText>


                        </List>
                    </ListContainer>

                </ProfilBox>

                <ContentBox>
                    <ImageBoxTwo>
                        <Image source={MorotBlom} style={styles.morotBlom} />
                    </ImageBoxTwo>
                    <ImageBoxOne>
                        <Image source={HackadMorot} style={styles.hackadMorot} />
                    </ImageBoxOne>
                    <Box>
                        <Ionicons name="md-key-outline" size={35} color="white" />
                        <TextBox>Konto  </TextBox>
                    </Box>
                    <Box>
                        <MaterialCommunityIcons name="web" size={30} color="white" />
                        <TextBox>Vår hemsida </TextBox>

                    </Box>
                    <Box>
                        <AntDesign name="mail" size={30} color="white" />
                        <TouchableOpacity onPress={() => Linking.openURL('mailto:gro.by.neo@gmail.com?subject=SendMail&body=Hej!',)}>
                            <TextBox>Kontakta support</TextBox>
                        </TouchableOpacity>
                    </Box>

                </ContentBox>


            </Main>
            <FooterContainer>
                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
                        <MaterialCommunityIcons name="fountain-pen-tip" size={40} color="#ABA97B" />
                        <IconText>Dagbok</IconText>
                    </TouchableOpacity>
                </Icon>
                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
                        <FontAwesome5 name="readme" size={40} color="#ABA97B" />
                        <IconText>Utforska</IconText>
                    </TouchableOpacity>
                </Icon>

                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
                        <FontAwesome name="bar-chart" size={40} color="#ABA97B" />
                        <IconText>Statestik</IconText>
                    </TouchableOpacity>
                </Icon>

                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <FontAwesome name="child" size={40} color="#CE7937" onPress={() => navigation.navigate('Profile')} />
                        <IconText>Profil</IconText>
                    </TouchableOpacity>
                </Icon>
            </FooterContainer>
        </>
    )
}

const styles = StyleSheet.create({
    morot: {
        height: 170,
        width: 100,
        marginLeft: 10,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 21,
    },
    hackadMorot: {
        height: 70,
        width: 230,
        marginLeft: 10,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 21,
    },
    morotBlom: {
        height: 130,
        width: 125,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 21,
    },
})

const Main = styled.View`
flex: 1;
background-color:#CE7937;
flex-direction: column;
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
const ListContainer = styled.View`
width: 255px;
align-items: center;
`
const List = styled.View`
border-radius: 20px;
margin-top: 40px;
background-color: #CE7937;
padding: 15px 15px 15px 15px;
box-shadow: 0px 0px 8px #6F392E;
align-items: center;
`
const ListText = styled.Text`
color: white;
font-size: 30px;
`
const ContentBox = styled.View`
padding: 0 0 30px 20px;
flex:1;
justify-content: flex-end;
`
const ImageBoxOne = styled.View`
justify-content: flex-end;
`
const ImageBoxTwo = styled.View`
flex:1;
align-items: flex-end;
justify-content: flex-end;
`
const Box = styled.View`
flex-direction: row;
margin:10px;
`
const TextBox = styled.Text`
color: white;
font-size: 30px;
padding-left: 10px;
`
const FooterContainer = styled.View`
margin-top: 0px;
height: 100px;
width: 100%;
flex-direction:row;
align-items: center;
justify-content: space-evenly;
`
const IconText = styled.Text`
font-size: 15px;
color: black;
`

const Icon = styled.View`
align-items: center;
`
export default Profile