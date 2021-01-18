import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Footter from '../footer' 
 const cards = [
    {
      text: 'Android & Ios Devoleper',
      name: " Our Android app, iOS app and cross-platform mobile app developers are adroit in the latest mobile technologies and tools like Android Studio, Xcode, React Native, etcto build next-gen mobile application",
      image: require('../../img/download.png')
    },
    {
      text: 'Android Devoleper',
      name: " Our Android app, iOS app and cross-platform mobile app developers are adroit in the latest mobile technologies and tools like Android Studio, Xcode, React Native, etcto build next-gen mobile application",
      image: require('../../img/dev1.jpg'),
    },
    {
      text: 'IoS Devolper',
      name: " Our Android app, iOS app and cross-platform mobile app developers are adroit in the latest mobile technologies and tools like Android Studio, Xcode, React Native, etcto build next-gen mobile application",
      image: require('../../img/dev3.png'),
    },
    {
        text: 'Web App Devoleper',
        name: 'Devolper',
        image: require('../../img/download.png')
      },
    
  ];
export default class CardShowcaseExample extends Component {
  render() {
    return (
    //   <Container>
    <View>
        <Header style={{backgroundColor:'white'}}>
            <Text style={{fontSize:30,color:'darkblue',fontFamily:'serif'}}>Our Services</Text>
        </Header>
          <View>          
            <ScrollView>
        {cards.map((v,i)=>
          <Card key={i}>
            <Text style={{fontSize:20,color:'darkblue'}}>{v.text}</Text>
            <CardItem>
              <Body>
                <Image source={v.image} />
                
                <Text>
                    {v.name}
                </Text>
               
              </Body>
            </CardItem>
           
          </Card>
          )}
          </ScrollView>
          </View>

        </View>       
      
    );
  }
}