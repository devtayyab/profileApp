import React from 'react';
import { Container, Header,View,  DeckSwiper,Button, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

var img = require('../img/tayyab.jpg')
 function About (){
     return(
        <View>
            <Card>
                <CardItem style={{alignItems:"center"}}>
                    <Thumbnail source={img}>
                   </Thumbnail>
                   <CardItem>
                   <Text style={{fontFamily:"serif", fontSize:20}}>Tayyab chuhadry</Text>
                   <CardItem>
                   <Text style={{fontFamily:"serif", fontSize:15}}>(Owner)</Text></CardItem>
                   </CardItem>
                </CardItem>
                <CardItem>
                    <Text>SufiCloud is a top mobile agency and software
                         development company with a large pool of software developers 
                         available for dedicated and fixed time/cost projects.
                          Hire web developers from SufiCloud Solutions who have
                           proven expertise in trending web technologies like
                            ReactNative, Redux, React, ApoloClient, material-ui
                             and back-end technologies like Node.js, python, flask,
                              django, magento, wordpress to develop custom and 
                        responsive websites, web apps and eCommerce solutions.</Text>
                </CardItem>
            </Card>
          
        </View>       
     )
 }
 export default About