import React, { useState } from 'react'
import styled from 'styled-components/native';
import { TouchableOpacity, StyleSheet } from 'react-native'


const DiaryInput = ({ submitHandler }) => {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);


    }


    return (
        <Main>
            <InputBox>
                <Input
                    multiline
                    maxLength='100'
                    placeholder='Skriv en kommentar'
                    onChangeText={(val) => changeHandler(val)}
                />
            </InputBox>
            <TouchableOpacity onPress={() => submitHandler(text)} >
                <ButtonBox>

                    <ButtonText>Spara</ButtonText>

                </ButtonBox>
            </TouchableOpacity>
        </Main>
    )

}



const Main = styled.View`
margin-top: 20px;
align-items:center;
`

const Input = styled.TextInput`
font-size: 15px;
`
const InputBox = styled.View`
height: 150px;
padding:15px;
background: white;
margin-top:10px;
border-radius:10px;
width: 300px;
margin-bottom: 10px;
box-shadow: 0px 0px 8px #6F392E;
`


const ButtonBox = styled.View`
border-radius: 10px;
background-color: coral;
width:100px;
padding: 10px;
align-items: center;
font-weight:bold;
height:40px;
`
const ButtonText = styled.Text`
color: white;
font-weight:bold;
`

export default DiaryInput;