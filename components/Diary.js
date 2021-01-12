import React, { useState } from 'react'
import { FlatList, StyleSheet, Image, Alert, ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';

import apple from '../assets/apple.png';
import appleKlyfta from '../assets/appelklyfta.png';
import appleBlom from '../assets/appelblom.png';

import Header from '../components/Header'
import DiaryAdd from './DiaryAdd'
import DiaryFood from './DiaryFood'
import DiaryInput from './DiaryInput'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

const Diary = ({ navigation }) => {
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
        <>
            <Main>
                <ScrollView>

                    <Header />

                    <FormContainer>

                        <Apple>
                            <Image source={apple} style={styles.imageApple} />
                        </Apple>
                        <DivAdd>
                            <Rubrik>Dagens Mat</Rubrik>
                            <DiaryAdd submitHandler={submitHandler} />
                        </DivAdd>
                        <AppleKlyfta>
                            <Image source={appleKlyfta} style={styles.imageAppleKlyfta} />
                        </AppleKlyfta>
                    </FormContainer>

                    <ListContainer>
                        <List>

                            <FlatList
                                data={food}
                                renderItem={({ item }) => (
                                    <DiaryFood item={item} pressHandler={pressHandler} />
                                )}
                            />
                        </List>
                    </ListContainer>

                    <PhotoDiv>
                        <PhotoContent>
                            <Feather name="camera" size={24} color="white" />
                            <Photo>
                                <AntDesign name="picture" size={50} color="white" />
                            </Photo>
                        </PhotoContent>
                        <AppleBlom>
                            <Image source={appleBlom} style={styles.imageAppleBlom} />
                        </AppleBlom>
                    </PhotoDiv>

                    <CommentContainer>
                        <DiaryInput />
                    </CommentContainer>

                </ScrollView>
            </Main>
            <FooterContainer>
                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
                        <MaterialCommunityIcons name="fountain-pen-tip" size={40} color="#BD614E" />
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
                        <FontAwesome name="child" size={40} color="#ABA97B" onPress={() => navigation.navigate('Profile')} />
                        <Text>Profil</Text>
                    </TouchableOpacity>
                </Icon>
            </FooterContainer>

        </>
    )

}

const styles = StyleSheet.create({
    imageApple: {
        height: 90,
        width: 90,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
    },
    imageAppleBlom: {
        height: 90,
        width: 150,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
    },
    imageAppleKlyfta: {
        height: 70,
        width: 70,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
    }

})

const Main = styled.View`
background-color: #BD614E;
flex: 1;
align-items: center;
`


const FormContainer = styled.View`
margin-top: 0px;
width: 100%;
flex-direction:row;
justify-content: space-between;
`
const Apple = styled.View`
justify-content: center; 

`
const AppleKlyfta = styled.View`

`

const DivAdd = styled.View`
padding: 0;
align-items: center;
`
const Rubrik = styled.Text`
color: white;
margin-top: 10px;
font-size: 20px;
`
const ListContainer = styled.View`
width: 100%;
align-items: center;
margin-bottom: 10px;
`
const List = styled.View`
border-radius: 20px;
margin-top: 20px;
margin-bottom: 20px;
background-color: white;
padding: 15px 0 15px 10px;
width: 320px;
box-shadow: 0px 0px 8px #6F392E;
`
const PhotoDiv = styled.View`
width: 100%;
flex-direction:row;
justify-content: space-between;
`
const PhotoContent = styled.View`
flex-direction: row;
margin-left: 50px;
`
const Photo = styled.View`
border: solid white 3px;
border-radius: 10px;
width:120px;
margin-left: 10px;
align-items: center;
justify-content: center;
`
const AppleBlom = styled.View`
align-items: flex-end;
padding: 10px 0 10px 0;
margin-left: 19px;
`
const CommentContainer = styled.View` 
width: 100%;
align-items: center;
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

export default Diary;