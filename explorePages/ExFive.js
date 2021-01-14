import React from 'react';
import styled from 'styled-components/native';

import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Photo5 from '../assets/baby5.png'

const ExFive = ({ navigation }) => {

    return (
        <>
            <Main>

                <View style={styles.overlayContainer}>
                    <View style={styles.overlay}>
                    <Image source={Photo5} style={styles.photo} /> 
                            <Feather name="arrow-left" size={30} color="white" style={styles.overlayIcon} onPress={() => navigation.navigate('Explore')} />
                        <Text style={styles.overlayText}>Ser och lär</Text>
                        </View>
                </View>

            <Article>
                <Text style={styles.article}>
                     Nu ska eran matresa börja och den kommer innefatta
                    många olika delar för barnet. Alla sinnen kommer att få 
                    nya spännande upplevelser. Nya lukter, smaker, konsistenser 
                    och även koordinationen kommer få tränas nu. Att hålla 
                    en sked och att den ska letar sig hela vägen till munnen 
                    behöver inte alltid vara så lätt. 

                    Börja med att mata smakprover av puré från din
                    fingertopp och senare med en plattare, mjuk sked.
                    Låt gärna barnet utforska och känna på purén med händerna.
                    


                </Text>
            </Article>

            <Tips>
            <MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="yellow"style={styles.icon} />
                <Text style={styles.tips}> Om barnet hänger med kropp sdfdfsfs. </Text>
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
        marginTop:200,
        marginLeft: 20,
    },
    overlayIcon: {
        position:'absolute',
        marginTop:45,
        marginLeft: 10,
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


export default ExFive;

