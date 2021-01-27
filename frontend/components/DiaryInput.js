import React, { useState } from 'react'
import styled from 'styled-components/native';
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const DiaryInput = ({ submitHandler }) => {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);


    }


    return (
        <Main>
            <InputBox>
            <Entypo name="pencil" size={20} color="white" />
                <Input
                    multiline
                    placeholderTextColor="white"
                    maxLength='100'
                    placeholder='Skriv en kommentar'
                    onChangeText={(val) => changeHandler(val)}
                />
            </InputBox>
            <TouchableOpacity onPress={() => submitHandler(text)}  >
                <View style={styles.button}>

                    <ButtonText>Spara</ButtonText>

                </View>
            </TouchableOpacity>
        </Main>
    )

}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        borderRadius: 50,
        backgroundColor: 'coral',
        marginTop: 5,
    }
})

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
border: dotted white 2px;
margin-top:10px;
border-radius:10px;
width: 300px;
margin-bottom: 10px;
box-shadow: 0px 0px 8px #6F392E;
`

const ButtonText = styled.Text`
color: white;
font-weight:bold;
`

export default DiaryInput;