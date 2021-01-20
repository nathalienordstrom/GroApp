import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';

import data from '../components/data';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Header from '../components/Header'
import { sub } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

const transistion = (
    <Transition.Together>
        <Transition.In type="fade" duration={200} />
        <Transition.Change />
        <Transition.Out type="fade" duration={200} />
    </Transition.Together> 
)

const Statistics = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = React.useState(null);
    const ref = React.useRef()
    return (
        <>
            <Main>
                <ScrollView>
                    <HeaderContainer>
                        <HeaderText>
                            Statestik
                        </HeaderText>
                        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                            <Header />
                        </TouchableOpacity>
                    </HeaderContainer>
                    <Transitioning.View 
                    ref={ref}
                    transition={transistion}
                    style={styles.container}>

                        {data.map(({ bg, color, name, subCategories, rating }, index) => {
                            return <TouchableOpacity
                                key={name}
                                onPress={() => {
                                    ref.current.animateNextTransition();
                                    setCurrentIndex(index === currentIndex ? null : index)
                                }}
                                style={styles.cardContainer}
                                activeOpacity={0.6}
                            >
                                <View style={[styles.card, { backgroundColor: bg }]}>
                                    <Text style={[styles.heading, { color }]}>{name}<Text style={styles.rating}>{rating}</Text></Text>
                                    {index === currentIndex && (
                                        <View style={styles.subCategoriesList}>
                                        {subCategories.map(subCategory => (
                                            <Text key={subCategory} style={[styles.body]}> {subCategory}</Text>
                                        ))}
                                    </View>
                                    )}
                                </View>
                            </TouchableOpacity>
                        })}

                    </Transitioning.View>
                </ScrollView>
            </Main>
            <FooterContainer>
                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
                        <MaterialCommunityIcons name="fountain-pen-tip" size={40} color="#ABA97B" />
                        <IconText>Dagbok</IconText>
                    </TouchableOpacity>
                </Icon>
                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
                        <FontAwesome5 name="readme" size={40} color="#ABA97B" />
                        <IconText>Utforska</IconText>
                    </TouchableOpacity>
                </Icon>

                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
                        <FontAwesome name="bar-chart" size={40} color="#C497A4" />
                        <IconText>Statestik</IconText>
                    </TouchableOpacity>
                </Icon>

                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <FontAwesome name="child" size={40} color="#ABA97B" onPress={() => navigation.navigate('Profile')} />
                        <IconText>Profil</IconText>
                    </TouchableOpacity>
                </Icon>
            </FooterContainer>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems:'center',
    },
    cardContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        shadowColor: '#202020',
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 9,
        width: 400,
    },
    heading: {
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: -2,
    },
    rating:{
        fontSize: 20,
        color: 'white',
        fontWeight: '500',
        letterSpacing: 1,
    },
    card: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    body: {
        fontSize: 30,
        paddingTop: 25,

    
    }
})

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
const IconText = styled.Text`
font-size: 15px;
`

const Icon = styled.View`
align-items: center;
`

export default Statistics