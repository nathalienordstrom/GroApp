import * as React from 'react'
import { useState } from 'react';
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { user } from "./reducers/user";

import LoginForm from "./components/LoginForm";
import Diary from './components/Diary';
import Explore from './components/Explore';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import HomePage from './components/HomePage';

import ExOne from './components/ExOne';
import ExTwo from './components/ExTwo';
import ExThree from './components/ExThree';
import ExFour from './components/ExFour';
import ExFive from './components/ExFive';
import ExSix from './components/ExSix';
import ExSeven from './components/ExSeven';
import ExEight from './components/ExEight';
import ExNine from './components/ExNine';
import ExTen from './components/ExTen';
import ExEleven from './components/ExEleven';
import ExTwelve from './components/ExTwelve';
import ExThirteen from './components/ExThirteen';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const URL = "http://localhost:8080/users";

const reducer = combineReducers({ user: user.reducer });

const store = configureStore({ reducer });

const Stack = createStackNavigator();

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // To sign up a user.
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log("error:", err));
  }

  return (
    <Provider store={store}>
      <NavigationContainer>

        <Stack.Navigator initialRouteName="HomeActivity"
          screenOptions={{ headerShown: false }} initialRouteName="Home">

          <Stack.Screen
            name="HomePage"
            component={HomePage} />

          <Stack.Screen
            name="LoginForm"
            component={LoginForm} />



          <Stack.Screen
            name="Profile"
            component={Profile}
          />

          <Stack.Screen
            name="Explore"
            component={Explore}
          />


          <Stack.Screen
            name="ExOne"
            component={ExOne}
          /><Stack.Screen
            name="ExTwo"
            component={ExTwo}
          /><Stack.Screen
            name="ExThree"
            component={ExThree}
          /><Stack.Screen
            name="ExFour"
            component={ExFour}
          /><Stack.Screen
            name="ExFive"
            component={ExFive}
          />
          <Stack.Screen
            name="ExSix"
            component={ExSix}
          />
          <Stack.Screen
            name="ExSeven"
            component={ExSeven}
          />

          <Stack.Screen
            name="ExEight"
            component={ExEight}
          />
          <Stack.Screen
            name="ExNine"
            component={ExNine}
          />
          <Stack.Screen
            name="ExTen"
            component={ExTen}
          />
          <Stack.Screen
            name="ExEleven"
            component={ExEleven}
          />
          <Stack.Screen
            name="ExTwelve"
            component={ExTwelve}
          />
          <Stack.Screen
            name="ExThirteen"
            component={ExThirteen}
          />



          <Stack.Screen
            name='Diary'
            component={Diary}
            options={{
              title: 'Dagbok',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#BD614E',
              },
            }}
          />


          <Stack.Screen
            name="Statistics"
            component={Statistics}
            options={{
              title: 'Statestik',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#C497A4',
              },
            }} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;