import React, { useState } from "react";
import LogIn from "./LogIn";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../reducers/user";
import styled from 'styled-components/native';
import { FlatList, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

import Photo from '../assets/Dokumentlayout3.jpg'
import SignUp from './SignUp';
import LoginForm from './LoginForm'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';

const SIGNUP_URL = "http://localhost:8080/users";
const LOGIN_URL = "http://localhost:8080/sessions";

export const SignUpForm = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLoginSuccess = (loginResponse) => {
    dispatch(
      user.actions.setAccessToken({ accessToken: loginResponse.accessToken })
    );
    dispatch(user.actions.setUserId({ userId: loginResponse.userId }));
    dispatch(user.actions.setStatusMessage({ statusMessage: 'Wrong Success' }));

  };

  const handleLoginFailed = (loginError) => {
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setStatusMessage({ statusMessage: loginError }));

  };

  const handleSignupSuccess = (signupResponse) => {
    navigation.navigate('LoginForm')
  }

  // To sign up a user.
  const handleSignup = (event) => {
    event.preventDefault();

    fetch(SIGNUP_URL, {
      method: "POST",
      body: JSON.stringify({ name, password, email }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => handleSignupSuccess(json))
      .catch((err) => handleLoginFailed(err));
  };

 

  // To sign up a user.
  const handleLogin = (event) => {
    event.preventDefault();

    fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({ name, password, email }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => handleLoginSuccess(json))
      .catch((err) => handleLoginFailed(err));
  };


    // If user is logged out, show login form
    return (
      <Main>


        <Icon>
          <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
            <Ionicons name="arrow-back-circle-outline" size={50} color="#D2D09D" />
          </TouchableOpacity>
        </Icon>
        <MainContainer>
          <Container>
          <View style={styles.card}>
            <SignUpBox>
            <AppleIcon>
              <MaterialCommunityIcons name="food-apple-outline" size={40} color="#BD614E" />
            </AppleIcon>
            <SignUpText>Blir medlem</SignUpText>
            </SignUpBox>
            <Form>
              <FormInput>
                <Ionicons name="person" size={24} color="#BD614E" />
                <Input
                  required
                  value={name}
                  placeholder='namn'
                  onChange={(event) => setName(event.target.value)}
                />
              </FormInput>
              {/* <FormInput>
                <Zocial name="email" size={24} color="#BD614E" />
                <Input
                  required
                  value={email}
                  placeholder='email'
                  onChange={(event) => setName(event.target.value)}
                />
              </FormInput> */}
              <FormInput>
                <FontAwesome name="key" size={24} color="#BD614E" />
                <Input
                  required
                  value={password}
                  placeholder='lörsenord'
                  onChange={(event) => setPassword(event.target.value)}
                />
                 
              </FormInput>
              <Buttons>
                <TouchableOpacity onPress={handleSignup}>
                  <View style={styles.button}>
                  <AntDesign name="checkcircleo" size={40} color="#BD614E"/> 

                  </View>
                </TouchableOpacity>
              </Buttons>
              <SignUp />
            
            </Form>
            </View>
            <Image source={Photo} style={styles.image} />
          </Container>
        </MainContainer>
      </Main>
    );

};

const styles = StyleSheet.create({
  image: {
    marginTop: 100,
    width: 400,
    height: 130,
    right: 50,
},
card: {
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 30,
  shadowColor: '#c0c0c0',
  shadowOpacity: 0.9,
  shadowOffset: {
    height: 2,
    width: 2,
  },
  shadowRadius: 8,
  elevation: 6,
},


});


const Main = styled.View`
background-color: white;
flex:1;
`

const Icon = styled.View`
padding-top: 50px;
margin-left: 20px;
`
const MainContainer = styled.View`
justify-content: center;
flex:1;
`

const Container = styled.View`
margin-left: 50px;
margin-right: 50px;
`

const SignUpBox = styled.View`
flex-direction: row;
justify-content:center;
align-items: center;
`

const AppleIcon = styled.View`
align-items:center;
`
const SignUpText = styled.Text`
font-size: 30px;
color:  #D2D09D 
`

const Form = styled.View`
align-items: center;
margin-top: 30px;
`

const Input = styled.TextInput`
font-size: 20px;
padding-left: 20px;
`


const FormInput = styled.View`
flex-direction:row;
box-shadow: 1px 2px 4px #c0c0c0;
background-color: white;
border-radius: 50px;
padding: 10px;
width: 100%;
margin-bottom: 20px;

`


const Buttons = styled.View`
flex-direction: row;
margin-top: 20px;

`






export default SignUpForm;
