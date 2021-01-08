import React, { useState } from 'react'
import { FlatList, StyleSheet, Image, Alert } from 'react-native'
import styled from 'styled-components/native';
import headerImage from '../assets/gro..png';
import apple from '../assets/apple.png';
import appleblom from '../assets/appelblom.png';

import DiaryAdd from './DiaryAdd'
import DiaryFood from './DiaryFood'
import DiaryInput from './DiaryInput'

const Diary = () => {
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
        <Main>
            <HeaderContainer>
                <Image source={headerImage} style={styles.image} />
            </HeaderContainer>



            <FormContainer>

                <Apple>
                    <Image source={apple} style={styles.imageApple} />
                </Apple>
                <DivAdd>
                    <Rubrik>Dagens Mat</Rubrik>
                    <DiaryAdd submitHandler={submitHandler} />
                </DivAdd>
                <AppleBlom>
                    <Image source={appleblom} style={styles.imageAppleBlom} />
            </AppleBlom>
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

            <CommentContainer>
                <DiaryInput />
            </CommentContainer>
        </Main>
    )

}

const styles = StyleSheet.create({
    image: {
        height: 70,
        width: 122,
        marginRight: 20
    },
    imageApple: {
        height: 80,
        width: 80,
    },
    imageAppleBlom: {
        height: 40,
        width: 70,
    }
})

const Main = styled.View`
    background-color: #BD614E;
    flex: 1;
    align-items: center;
`

const HeaderContainer = styled.View`
width: 100%;
align-items: flex-end;
justify-content: center;
margin-top: 50px;
`

const FormContainer = styled.View`
margin-top: 20px;
width: 100%;
flex-direction:row;
justify-content: space-between;
`
const Apple = styled.View`
justify-content: center; 
padding-left: 10px;
`

const DivAdd = styled.View`
padding: 0;
align-items: center;
`
const AppleBlom = styled.View`
padding-left: 2px;
`
const Rubrik = styled.Text`
color: white;
margin-top: 10px;
font-size: 20px;
`
const ListContainer = styled.View`
width: 100%;
align-items: center;
margin-top: 10px;
`


const List = styled.View`
border-radius: 20px;
margin-top: 20px;
margin-bottom: 20px;
background-color: white;
padding: 15px 0 15px 10px;
width: 350px;
box-shadow: 0px 0px 8px #6F392E;

`

const CommentContainer = styled.View` 
width: 100%;
align-items: center;
`


export default Diary;