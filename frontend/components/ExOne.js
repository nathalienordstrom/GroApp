
import React from 'react';
import styled from 'styled-components/native';

import { StyleSheet, Image, View, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Photo1 from '../assets/baby1.jpg'

const ExOne = ({ navigation }) => {

    return (
        <>
            <Main>

                <View style={styles.overlayContainer}>
                    <View style={styles.overlay}>
                    <Image source={Photo1} style={styles.photo} /> 
                            <Feather name="arrow-left" size={30} color="white" style={styles.overlayIcon} onPress={() => navigation.navigate('Explore')} />
                        <Text style={styles.overlayText}> Svårt att sitta själv? </Text>
                        </View>
                </View>

            <Article>
                <Text style={styles.article}>
                Om barnet hänger med kropp och huvudet kan det vara bra att
                barnet sitta i famnen dom första gångerna.  
                När barnet är tillräckligt stadig för att sitta upp kan provsmakningen 
                börja. Bulla upp med kuddar i stolen för stöd och börja med 
                några minuter i taget, för att barnet inte ska bli för trött 
                musklerna. 
                </Text>
            </Article>

            <Tips>
            <MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="yellow"style={styles.icon} />
                <Text style={styles.tips}> Matresan innebär även träning för krio  </Text>
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
        // borderColor:'red',
        // borderWidth:1,
        paddingLeft: 5,
        paddingRight:10,
        paddingTop:20,
        paddingBottom:20,
        width: 300,

    },
    icon: {
        // borderColor:'red',
        // borderWidth:1,
        padding: 5,

    }

})



const Main = styled.View`
flex: 1;
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


export default ExOne;