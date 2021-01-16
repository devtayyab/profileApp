
import * as React from 'react';
import { View, Text, Button  } from 'react-native';
import Footter from './footer'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
function HomeScreen({navigation}) {
  const Stack = createStackNavigator();

    return (
     
        
        
      
     <View>
       <Text>MAIN screen</Text>
     {/* <Button title="Click me" onPress={()=>navigation.navigate('Footer')}></Button> */}
     </View>
      
    );
  }
  export default HomeScreen