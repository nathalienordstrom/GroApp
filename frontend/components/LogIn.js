import React, { useState, useEffect } from "react";
import { user } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components/native';

const URL = "http://localhost:8080/sessions";
export const LogIn = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const statusMessage = useSelector((store) => store.user.login.statusMessage);

  const loginSuccess = (loginResponse) => { };

  const loginFailed = (loginError) => { };

  const logout = () => { };

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
      <Form>
        <Response>{`${statusMessage}`}</Response>
      </Form>
      {/* <h4>userId :</h4>
      <p> {`${userId}`}</p>
      <h4>accessToken :</h4>
      <p> {`${accessToken}`}</p>
      <input type="submit" onClick={login} value="Test Login" />
      <input type="submit" onClick={logout} value="Test Logout" /> */}
    </Main>
  );
};

// const styles = StyleSheet.create({
//   : {

//   },


// });

const Main = styled.View`
align-items: center;

`
// const Header = styled.View`
// align-items: center;
// border: solid 3px red;
// `
const HeaderText = styled.Text`
font-size: 50px;
color: black;

`
const Form = styled.View`

`
const FormHeader = styled.Text`
color: black;


`
const Response = styled.Text`
color: black;

`


export default LogIn;
