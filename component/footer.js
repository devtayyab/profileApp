import React, { Component } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Container,View, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import DeckSwiperrr from './slider'
import Service from './screen/Services'
import About from './about'
function Footter({navigation}) {
 
    return (
      
      
     
     <Container>

     
    
<Header style={{backgroundColor:'white'}}>
            <Text style={{fontSize:30,color:'darkblue',fontFamily: "serif"}}>WellCome To SufiCloud</Text>
        </Header>
        <Content>
       <DeckSwiperrr></DeckSwiperrr>
       <Service></Service>
       {/* <Header style={{backgroundColor:'white'}}>
            <Text style={{fontSize:30,color:'darkblue'}}>About Us</Text>
        </Header>
       <About></About> */}
        </Content>
        <Footer style={{bottom:0}}>
          <FooterTab>
            <Button badge vertical onPress={() => navigation.navigate('SufiCloud')}>
              <Badge><Text>.</Text></Badge>
              <Icon name="apps" />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={() => navigation.navigate('services')}>
              <Icon name="camera" />
              <Text>Services</Text>
            </Button>
            <Button active badge vertical onPress={() => navigation.navigate('About')}>
              <Badge ><Text>.</Text></Badge>
              <Icon active name="navigate" />
              <Text>About Us</Text>
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