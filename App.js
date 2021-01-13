import * as React from 'react'
import { useState } from 'react';

import Diary from './components/Diary';
import Explore from './components/Explore';
import ExploreOne from './components/ExploreOne';
import ExploreTwo from './components/ExploreTwo';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import HomePage from './components/HomePage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="HomeActivity"
        screenOptions={{ headerShown: false }} initialRouteName="Home">

<Stack.Screen
          name="Explore"
          component={Explore}
        />


        <Stack.Screen
          name="ExploreOne"
          component={ExploreOne}
        />
        <Stack.Screen
          name="ExploreTwo"
          component={ExploreTwo}
        />

        <Stack.Screen
          name="HomePage"
          component={HomePage} />
          
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

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profil',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#CE7937',
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;