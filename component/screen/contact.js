import React,{useState} from 'react';
import database from '@react-native-firebase/database';
import { Container,Textarea, Header, Content, Form, Item,Icon,  Label} from 'native-base';
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
        <Header />
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Name</Label>
              <TextInput defaultValue={name}  onChangeText={(text)=>setname(text)}/>
            </Item>
            <Item inlineLabel last>
              <Label>Email</Label>
              <TextInput defaultValue={email} placeholder="Enter Message" onChangeText={(text)=>setemail(text)}/>
            </Item>
            <Item>
            <TextInput defaultValue={Message}   placeholder="Enter Message"  onChangeText={(text)=>setmessage(text)}/>
            </Item>
            <Button title="Send" onPress={()=>Save()}></Button>
          </Form>
          <View>
          <Text>You can contact also:
          </Text>
          <Text> <Icon name='work' />gujjartayyab9494@gmail.com

          </Text>
          </View>
        </Content>
      </Container>
    );
  
}
export default Contact