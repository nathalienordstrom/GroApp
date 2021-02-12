import React from 'react';
import styled from 'styled-components/native';

import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Photo9 from '../assets/baby9.png'

const ExNine = ({ navigation }) => {

    return (
        <>
            <Main>

                <View style={styles.overlayContainer}>
                    <View style={styles.overlay}>
                    <Image source={Photo9} style={styles.photo} /> 
                            <Feather name="arrow-left" size={30} color="white" style={styles.overlayIcon} onPress={() => navigation.navigate('Explore')} />
                        <Text style={styles.overlayText}>Att tänka på </Text>
                        </View>
                </View>

            <Article>
                <Text style={styles.article}>
               Risken att utveckla celiaki tidigt i livet tycks öka om barn äter stora mängder
               gluten. När svenska forskare följde barn med genetisk risk för celiaki, såg de
               att de barn som åt mest gluten under sina första två år löpte en minst dubbelt
               så hög risk att utveckla sjukdomen.
               I en italiensk studie jämförde forskare barn som fick börja äta gluten tills de
               var ett halvår gamla, med barn som fick vänta med gluten tills de var ett år.
               När barnen fyllde två år hade dubbelt så många fått celiaki i gruppen som fick 
               äta gluten tidigt, men vid fem års ålder var det ingen skillnad mellan barnen. 
                    


                </Text>
            </Article>

            <Tips>
            <MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="yellow"style={styles.icon} />
                <Text style={styles.tips}>  Bebisar som äter mycket gluten tycks löpa större 
                risk att utveckla glutenintolerans. </Text>
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
        fontSize: 17,
        marginBottom: 10,
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
        // borderColor:'red',
        // borderWidth:1,
        padding: 5,

    }

})



const Main = styled.View`
background-color:#5A673E;
padding-bottom: 20px;
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


export default ExNine;

