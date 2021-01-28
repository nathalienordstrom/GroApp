import React, { useState } from "react";
import LogIn from "./LogIn";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../reducers/user";
import styled from 'styled-components/native';
import { FlatList, StyleSheet, View, Alert, ScrollView, TouchableOpacity, Text } from 'react-native'


import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const SIGNUP_URL = "http://localhost:8080/users";
const LOGIN_URL = "http://localhost:8080/sessions";

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSuccess = (loginResponse) => {
    dispatch(
      user.actions.setAccessToken({ accessToken: loginResponse.accessToken })
    );
    dispatch(user.actions.setUserId({ userId: loginResponse.userId }));
    dispatch(user.actions.setStatusMessage({ statusMessage: 'Login Success' }));

  };

  const handleLoginFailed = (loginError) => {
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.setStatusMessage({ statusMessage: loginError }));

  };

  // To sign up a user.
  const handleSignup = (event) => {
    event.preventDefault();

    fetch(SIGNUP_URL, {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => handleLoginSuccess(json))
      .catch((err) => handleLoginFailed(err));
  };

  // To sign up a user.
  const handleLogin = (event) => {
    event.preventDefault();

    fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => handleLoginSuccess(json))
      .catch((err) => handleLoginFailed(err));
  };

  if (!accessToken) {
    // If user is logged out, show login form
    return (
      <Main>
        <Container>
          <LogIn />
          <Form>
          

            <FormName>
             
                <Ionicons name="person" size={24} color="black" />
                <Input
                  required
                  value={name}
                  placeholder='namn'
                  onChange={(event) => setName(event.target.value)}
                />
              
            </FormName>
            <FormPassword>
              
                <FontAwesome name="key" size={24} color="black" />
                <Input
                  required
                  value={password}
                  placeholder='lörsenord'
                  onChange={(event) => setPassword(event.target.value)}
                />
              
            </FormPassword>

            <Buttons>

              <TouchableOpacity onPress={handleSignup}>
                <View style={styles.button}>

                  <ButtonText>Bli Medlem</ButtonText>

                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleLogin}>
                <View style={styles.button}>

                  <ButtonText>Logga in
                  </ButtonText>

                </View>
              </TouchableOpacity>
              
            </Buttons>

          </Form>
        </Container>
      </Main>
    );
  } else {
    // If user is logged in, show profile
    return <Profile />;
  }
};

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderColor: 'black',
    borderWidth:1,
    marginTop: 5,
    margin: 5,
  },


});

const Main = styled.View`
background-color: white;
flex:1;
justify-content: center;
`

const Container = styled.View`
margin-left: 50px;
margin-right: 50px;
`

const Form = styled.View`
align-items: center;
margin-top: 30px;
`

const Input = styled.TextInput`
font-size: 20px;
padding-left: 20px;
`


const FormName = styled.View`
flex-direction:row;
border: black solid 1px;
border-radius: 50px;
padding: 10px;
width: 100%;
margin-bottom: 20px;

`
const FormPassword = styled.View`
flex-direction:row;
border: black solid 1px;
border-radius: 50px;
padding: 10px;
width: 100%;
`
const Buttons = styled.View`
flex-direction: row;
margin-top: 20px;

`

const ButtonText = styled.Text`
color: black;
font-size: 15px;
`




export default SignUpForm;
