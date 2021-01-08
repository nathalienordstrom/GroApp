import React, { useState } from 'react'
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'


const DiaryAdd = ({ submitHandler }) => {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <Main>
            <InputBox>
                <Input
                    placeholderTextColor="white"
                    maxLength='25'
                    placeholder='...'
                    onChangeText={(val) => changeHandler(val)}
                />
            </InputBox>
            <TouchableOpacity onPress={() => submitHandler(text)} >
                <ButtonBox>

                    <ButtonText>ADD</ButtonText>

                </ButtonBox>
            </TouchableOpacity>
        </Main>
    )

}


const Main = styled.View`
align-items:center;
height: 100px;
`

const Input = styled.TextInput`
font-size: 20px;
color: white;
`
const InputBox = styled.View`
height: 60px;
padding:15px;
margin-top:10px;
border: dotted white 3px;
border-radius:10px;
width: 200px;
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

export default DiaryAdd;