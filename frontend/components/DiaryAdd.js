import React, { useState } from 'react'
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { food } from "../reducers/food";

const FOOD_URL = "http://localhost:8080/food";

const DiaryAdd = () => {
    const [text, setText] = useState('');


        const dispatch = useDispatch();
    const accessToken = useSelector((store) => store.user.login.accessToken);

  const foodSuccess = (foodResponse) => {
    dispatch(
        food.actions.setAccessToken({ accessToken: foodResponse.accessToken })
      );
    dispatch(food.actions.setUserId({ userId: foodResponse.userId }));
 

  };

  const submitHandler = (event) =>{ 
    event.preventDefault();
    addFood();
  }

    const addFood = () => {
    
    
        fetch(FOOD_URL, {
          method: "POST",
          body: JSON.stringify({ name: text }),
          headers: {"Content-Type" : "application/json", "Authorization": accessToken }
        })
          .then((res) => res.json())
          .then((json) => foodSuccess(json))
      };

     

    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <Main>
            <InputBox>
                <Input
                    placeholderTextColor="white"
                    placeholder='...'
                    maxLength= "20"
                    onChangeText={(val) => changeHandler(val)}
                />
            </InputBox>
            <TouchableOpacity onPress={(event) => submitHandler(event)} >
         
                <ButtonBox>

                    <ButtonText><Entypo name="heart-outlined" size={40} color="white" /></ButtonText>

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
border: dotted white 2px;
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

export default DiaryAdd;