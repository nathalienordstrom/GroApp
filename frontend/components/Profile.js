import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Image, StyleSheet, Linking, FlatList } from 'react-native';

import Header from './Header';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Morot from '../assets/morot.png';
import HackadMorot from '../assets/hackadmorot.png';
import MorotBlom from '../assets/morotblom.png';

import Added from './Added'


const Profile = ({ navigation }) => {
    const [food, setFood] = useState([
        // { text: 'Broccoli', key: '1' },
        // { text: 'Morot', key: '2' },
        // { text: 'Ärtor', key: '3' },

    ])

    const pressHandler = (key) => {
        setFood((prevFood) => {
            return prevFood.filter(food => food.key != key);
        })
    }


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
                    <ProfilName>

                    </ProfilName>
                    <ListContainer>
                        <List>

                            <FlatList
                                data={food}
                                renderItem={({ item }) => (
                                    <Added item={item} pressHandler={pressHandler} />
                                )}
                            />
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
                        <AntDesign name="bells" size={30} color="white" />
                        <TextBox>Notifieringar </TextBox>
                    </Box>
                    <Box>
                        <MaterialCommunityIcons name="web" size={30} color="white" />
                        <TextBox>Vår hemsida </TextBox>

                    </Box>
                    <Box>
                        <AntDesign name="mail" size={30} color="white" />
                        <TouchableOpacity onPress={() => Linking.openURL('mailto:gro.by.neo@gmail.com?subject=SendMail&body=Description',)}>
                            <TextBox>Kontakta support</TextBox>
                        </TouchableOpacity>
                    </Box>

                </ContentBox>


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
        height: 170,
        width: 100,
        marginLeft: 10,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
    },
    hackadMorot: {
        height: 70,
        width: 230,
        marginLeft: 10,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
    },
    morotBlom: {
        height: 130,
        width: 130,
        marginLeft: 50,
        marginTop: 20,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        marginBottom: 20,
    }

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
const ProfilName = styled.Text`
font-size: 50px;
color: white;
padding-right: 10px;
padding-top: 40px;

flex:1;
`
const ListContainer = styled.View`
width: 100%;
`
const List = styled.View`
border-radius: 20px;
margin-top: 40px;
background-color: #CE7937;
padding: 15px 0 15px 10px;
width: 200px;
box-shadow: 0px 0px 8px #6F392E;
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
const Text = styled.Text`
font-size: 15px;
`

const Icon = styled.View`
align-items: center;
`
export default Profile