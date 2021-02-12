import React from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity, StyleSheet, Image } from 'react-native';


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Header from './Header'

import { useNavigation } from '@react-navigation/native'

const FOOD_URL = "http://localhost:8080/foods";

const Statistics = () => {
        const navigation = useNavigation();

        const dispatch = useDispatch();
        const name = useSelector((store) => store.food.foods.name);
        const foodId = useSelector((store) => store.food.foods.foodId);
        const accessToken = useSelector((store) => store.food.foods.accessToken);
    
        const foodName = (foodNameResponse) => {
            dispatch(
                food.actions.setName({
                    name: foodNameResponse.name,
                })
            );
        };
    
        useEffect(() => {
            fetch(`${FOOD_URL}`, {
                method: "GET",
                headers: { "Content-Type": "application/json", "Authorization": accessToken },
            })
                .then((res) => res.json())
                .then((json) => foodName(json))
        }, [])
    

    return (
        <>
            <Main>
                <HeaderContainer>
                    <HeaderText>
                        Statestik
                        </HeaderText>
                   
                        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                            <Header />
                            {`${name}`}
                        </TouchableOpacity>
                </HeaderContainer>
            </Main>
            <FooterContainer>
                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
                        <MaterialCommunityIcons name="fountain-pen-tip" size={40} color="#ABA97B" />
                        <Text>Dagbok</Text>
                    </TouchableOpacity>
                </Icon>
                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
                        <FontAwesome5 name="readme" size={40} color="#ABA97B" />
                        <Text>Utforska</Text>
                    </TouchableOpacity>
                </Icon>

                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
                        <FontAwesome name="bar-chart" size={40} color="#C497A4" />
                        <Text>Statestik</Text>
                    </TouchableOpacity>
                </Icon>

                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <FontAwesome name="child" size={40} color="#ABA97B" onPress={() => navigation.navigate('Profile')} />
                        <Text>Profil</Text>
                    </TouchableOpacity>
                </Icon>
            </FooterContainer>
        </>
    )
}


const Main = styled.View`
flex: 1;
background-color:#C497A4;
`
const HeaderContainer = styled.View`
margin-top: 40px;
justify-content: space-between;
flex-direction: row;
`
const HeaderText = styled.Text`
padding: 10px 0 0 40px;
color: white;
font-size: 35px;
align-items: center;
`

const FooterContainer = styled.View`
margin-top: 0px;
height: 100px;
width: 100%;
flex-direction:row;
align-items: center;
justify-content: space-evenly;
`
const Text = styled.Text`
font-size: 15px;
`

const Icon = styled.View`
align-items: center;
`

export default Statistics