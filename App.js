// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import About from './component/about'
import Services from './component/screen/Services'
import DeckSwiperrr from './component/slider'
import Footter from './component/footer'
import Contact from './component/screen/contact'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SufiCloud" component={Footter} />
        <Stack.Screen name="Slider" component={DeckSwiperrr} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="services" component={Services} />
        <Stack.Screen name="Contact Us" component={Contact} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;