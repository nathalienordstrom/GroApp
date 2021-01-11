import React from 'react'
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
const DiaryFood = ({ item, pressHandler }) => {

    return (

        <List>
            
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Ex>✖️</Ex>
         </TouchableOpacity>
             <Text>{item.text}</Text>
             
        </List>
    )
}

const Ex = styled.Text`
margin-right: 10px;
margin-left: 10px;
`
const Text = styled.Text`
font-size: 20px; 
color:black;
`
const List = styled.View`
border-radius: 20px;
width: 320px;
padding: 10px 0 10px 0px;
flex-direction: row;
align-items:center;
`

export default DiaryFood