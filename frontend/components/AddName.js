import React, { useState } from 'react'
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const AddName = ({ submitHandler }) => {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <Main>
            <InputBox>
                <Input
                    clearButtonMode="always"
                    placeholderTextColor="red"
                    placeholder='...'
                    onChangeText={(val) => changeHandler(val)}
                />
            </InputBox>
            <TouchableOpacity onPress={() => submitHandler(text)}>
                <ButtonBox>

                    <ButtonText><Entypo name="heart-outlined" size={30} color="red"/></ButtonText>

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
color: red;
`
const InputBox = styled.View`
height: 60px;
padding:15px;
margin-top:10px;
background-color: white;
border-radius:10px;
width: 200px;
margin-bottom: 10px;
box-shadow: 0px 0px 8px #6F392E;
`
const ButtonBox = styled.View`
border-radius: 10px;
width:100px;
padding: 0;
align-items: center;
font-weight:bold;
`
const ButtonText = styled.Text`
color: white;
font-weight:bold;
`

export default AddName;