import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ScrollView, ImageBackground, TouchableOpacity } from 'react-native'

const image = { uri: "https://cdn.pixabay.com/photo/2019/11/14/07/17/smoothie-4625476_1280.jpg" };
const HomePage = () => {
    const [name, setName] = useState('Edith')
    const [age, setAge] = useState('4');
    const [family, setFamily] = useState([
        { name: 'Nathalie', id: '1' },
        { name: 'Daniel', id: '2' },
        { name: 'Edith', id: '3' },
        { name: 'Frank', id: '4' },
    ]);

    const pressHandler = (id) => {
        console.log(id);
        //if you want the items to disapear when you click on them
        // setFamily((prevName) => {
        //     return prevName.filter(name => name.id != id)
        // })
    }

    return (
        <Container>
            <ScrollView>
                <Header>
                    <Title>Home Page</Title>

                </Header>
                <Body>
                    <ImageBackground source={image} style={{ width: '100%', height: '100%' }}>

                        <Content>
                            <Text>Enter Name:</Text>
                            <InputBox>
                                <Input
                                    placeholder='...'
                                    onChangeText={(val) => setName(val)}
                                />
                            </InputBox>
                            <Text>Enter age:</Text>
                            <InputBoxTwo>
                                <InputTwo
                                    keyboardType='numeric'
                                    placeholder='...'
                                    onChangeText={(val) => setAge(val)}
                                />
                            </InputBoxTwo>

                            <Text>My name is {name} and I am {age} years old</Text>



                            {family.map((item) => {
                                return (
                                    <TouchableOpacity onPress={() => pressHandler(item.id)}>
                                        <View key={item.id}>

                                            <Text>{item.name}</Text>

                                        </View>
                                    </TouchableOpacity>
                                )
                            })}

                        </Content>
                    </ImageBackground>
                </Body>
                <Footer></Footer>
            </ScrollView>
        </Container >
    )

}

const Container = styled.View`
    background-color: white;
`

const Title = styled.Text`
    font-size: 20px;
`

const Text = styled.Text`
  color: pink;
`
const View = styled.View`
    background-color: black;
    margin-top: 20px;
    border: solid grey 1px;
    padding: 10px 0 10px 10px;
    width: 200px;
    
 `


const Header = styled.View`
    background-color: pink;
    padding: 50px;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const Body = styled.View`
    width: 100%;
    height:1000px;
    color: white;
    
`

const Content = styled.View`
    align-items: center;
    margin-top: 50px;
`


const InputBox = styled.View`
    border: solid grey 1px;
    border-radius:10px;
    height:40px;
    width: 140px;
    margin-bottom: 10px;
    color: white;
`

const Input = styled.TextInput`
    padding-left: 10px;
    margin-top: 10px;
    color: pink;

`

const InputBoxTwo = styled.View`
    border: solid grey 1px;
    border-radius:10px;
    height:40px;
    width: 140px;
    margin-bottom: 10px;
`

const InputTwo = styled.TextInput`
    padding-left: 10px;
    margin-top: 10px;
    color: pink;
`
const Footer = styled.View`
    background-color: pink;
    padding: 50px;
    width: 100%;
`



export default HomePage;