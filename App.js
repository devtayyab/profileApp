// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './component/detail'
import DeckSwiper from './component/slider'
import Footter from './component/footer'
import Contact from './component/screen/contact'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Footter} />
        <Stack.Screen name="Slider" component={DeckSwiper} />
        <Stack.Screen name="detail" component={Detail} />
        <Stack.Screen name="Footer" component={Footter} />
        <Stack.Screen name="Contact Us" component={Contact} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;