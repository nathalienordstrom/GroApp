import React, { useState, useEffect } from "react";
import { user } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components/native';

const URL = "http://localhost:8080/users";
export const SignUp = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const statusMessage = useSelector((store) => store.user.login.statusMessage);

  const loginSuccess = (loginResponse) => {};

  const loginFailed = (loginError) => {};

  const logout = () => {};

  const login = () => {
    // Include userId in the path
    fetch(`${URL}/${userId}`, {
      method: "GET",
      // Include the accessToken to get the protected endpoint
      headers: { Authorization: accessToken },
    })
      .then((res) => res.json())
      // SUCCESS: Do something with the information we got back
      .then((json) => loginSuccess(json))
      .catch((err) => loginFailed(err)); //401
  };

  return (
    <Main>   

      <Response>{`${statusMessage}`}</Response>

    </Main>
  );
};



const Main = styled.View`
align-items: center;
`

const Response = styled.Text`
color: black;
`


export default SignUp;
