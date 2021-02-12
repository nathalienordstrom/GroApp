import React from 'react';
import styled from 'styled-components/native';

import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Photo10 from '../assets/baby10.png'

const ExTen = ({ navigation }) => {

    return (
        <>
            <Main>

                <View style={styles.overlayContainer}>
                    <View style={styles.overlay}>
                    <Image source={Photo10} style={styles.photo} /> 
                            <Feather name="arrow-left" size={30} color="white" style={styles.overlayIcon} onPress={() => navigation.navigate('Explore')} />
                        <Text style={styles.overlayText}>Celiaki / glutenintolerans</Text>
                        </View>
                </View>

            <Article>
                <Text style={styles.article}>
                    Till skillnad från allergi, är celiaki en autoimmun sjukdom, där immunförsvare
                    attackerar den egna kroppen. För att skydda bebisar mot celiaki har föräldrar
                    tidigare fått rådet att introducera gluten redan vid fyra-sex månaders ålder. 
                    Många har låtit sina spädbarn suga på smörgåsrån, äta vitt bröd eller smaka
                    på industiproducerad pulvergröt.
                    Rådet att introducera gluten tidigt hänger delvis kvar inom barnhälsovården,
                    men Livsmedlesverket meddelade våren 2016 att de behöver omvärdera sina rekommendationer,
                    eftersom att äta gluten tidigt inte ger något extra sjydd. Den senaste forskningen
                    på området tyder istället på att mängden gluten verkar ha betydelse:
                    bebisar som äter mycket gluten tycks löpa större risk att utveckla celiaki.
                    


                </Text>
            </Article>

            <Tips>
            <MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="yellow"style={styles.icon} />
                <Text style={styles.tips}> Vid celiaki attackerar immunförsvaret tarmens slemhinna och tarmludd </Text>
            </Tips>

            </Main>

        </>
    )
}

const styles = StyleSheet.create({
    photo: {
        height: 250,
        width: 375,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
    },
    overlayContainer: {
        flexDirection: 'row',
    },
    overlay: {
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#94A968',
    },
    overlayText: {
        position:'absolute',
        fontSize: 27,
        color: 'white',
        marginTop:190,
        marginLeft: 20,
        textShadowColor: '#202020',
        textShadowOffset: { width: 0, height: 3 },
        textShadowRadius: 3,
        textShadowColor: 'black'
    },
    overlayIcon: {
        position:'absolute',
        marginTop:45,
        marginLeft: 10,
        textShadowColor: '#202020',
        textShadowOffset: { width: 0, height: 3 },
        textShadowRadius: 3,
        textShadowColor: 'black'
    },
    article:{
        color: 'white',
        fontSize: 17
    },
    tips:{
        fontSize: 20,
        color:'white',
        paddingLeft: 5,
        paddingTop:20,
        paddingBottom:20,
        width: 300,

    },
    icon: {
        padding: 5,

    }

})



const Main = styled.View`
padding-bottom: 20px;
background-color:#5A673E;
`

const Article = styled.View`
border: solid white 2px;
padding: 20px;
margin: 40px;
`
const Tips = styled.View`
flex-direction: row;
background-color:rgba(255, 255, 255, 0.3);
margin: 10px 20px 0 20px;
`


export default ExTen;

