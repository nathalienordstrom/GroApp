import * as React from 'react'
import { useState } from 'react';

import Diary from './components/Diary';
import Explore from './components/Explore';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import HomePage from './components/HomePage';

import ExOne from './explorePages/ExOne';
import ExTwo from './explorePages/ExTwo';
import ExThree from './explorePages/ExThree';
import ExFour from './explorePages/ExFour';
import ExFive from './explorePages/ExFive';
import ExSix from './explorePages/ExSix';
import ExSeven from './explorePages/ExSeven';
import ExEight from './explorePages/ExEight';
import ExNine from './explorePages/ExNine';
import ExTen from './explorePages/ExTen';
import ExEleven from './explorePages/ExEleven';
import ExTwelve from './explorePages/ExTwelve';
import ExThirteen from './explorePages/ExThirteen';


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
          name="Statistics"
          component={Statistics}
        />

        <Stack.Screen
          name="HomePage"
          component={HomePage} />

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


      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;