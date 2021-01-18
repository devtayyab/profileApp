import React,{useState} from 'react';
import database from '@react-native-firebase/database';
import { Container,Textarea, Header, Content, Form, Item,Icon,  Label, Card, CardItem} from 'native-base';
import { Text ,Button ,TextInput,View} from 'react-native';
function Contact(){

  const [name, setname] = useState("")
  const [email, setemail] = useState()
  const [Message, setmessage] = useState()
  const [info, setinfo] = useState()
  const Save= ()=>{
    var data={
      name,
      email,
      Message
    }
   
  setinfo(data)

    const newReference = database()
    .ref('/users')
    .push();
  
  console.log('Auto generated key: ', newReference.key);
  
  newReference
  .set({
    data
  })
    .then(() => console.log('Data updated.'));
    // console.log(data.email)
    setemail("")
  setmessage("")
  setname("")

  }
      return (
      <Container>
        {/* <Header /> */}
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Name</Label>
              <TextInput defaultValue={name} placeholder="Enter Name" onChangeText={(text)=>setname(text)}/>
            </Item>
            <Item inlineLabel last>
              <Label>Email</Label>
              <TextInput defaultValue={email} placeholder="Enter Email" onChangeText={(text)=>setemail(text)}/>
            </Item>
            <Item>
            <TextInput defaultValue={Message}   placeholder="Enter Message"  onChangeText={(text)=>setmessage(text)}/>
            </Item>
            <Button title="Send" onPress={()=>Save()}></Button>
          </Form>
          <View>
            <Card>
              <CardItem>
          <Text style={{fontSize:20}}>You can also contact on: {"\n"} {"\n"} {"\n"} {"\n"}
          </Text>
         
          <Text style={{position:'absolute',fontSize:15,fontFamily:'serif'}}> gujjartayyab9494@gmail.com
          
         
          </Text>
          <Text  style={{position:'absolute',fontSize:15,fontFamily:'serif'}} >
          {"\n"}   {"\n"} {"\n"}03037902194</Text>
          </CardItem>
          </Card>
          </View>
        </Content>
      </Container>
    );
  
}
export default Contact