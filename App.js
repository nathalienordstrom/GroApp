import * as React from 'react';

import Diary from './components/Diary';
import Explore from './components/Explore';
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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name='Home'
          component={HomePage}
        />

        <Stack.Screen
          name="Diary"
          component={Diary} />

        <Stack.Screen
          name="Explore"
          component={Explore} />

           <Stack.Screen 
        name="Statistics" 
        component={Statistics}/>

         <Stack.Screen 
        name="Profile" 
        component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;


// const App = () => {
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="HomePage" component={HomaPage} />
//         </Stack.Navigator>

//       </NavigationContainer>

//     </>
//   );
// }