import React, { Component } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Container,View, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import Post from './screen/post'
import { ScrollView } from 'react-native-gesture-handler';
function Footter({navigation}) {
 
    return (
      
      
     
     <Container>

     
    
        {/* <Header>
          <Text style={{color: "white"}}>Practice App</Text>
        </Header> */}
        <Content>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        </Content>
        <Footer style={{bottom:0}}>
          <FooterTab>
            <Button badge vertical onPress={() => navigation.navigate('Dtail')}>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={() => navigation.navigate('Slider')}>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical onPress={() => navigation.navigate('Servicess')}>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Message</Text>
            </Button>
            <Button vertical onPress={() => navigation.navigate('Contact Us')}>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
        </Container>
      
     
        
       
      
    );
  }
export default Footter