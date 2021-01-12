import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler';

import Photo1 from '../assets/baby1.jpg'
import Photo2 from '../assets/baby2.jpg'
import Photo3 from '../assets/baby3.jpg'
import Photo4 from '../assets/baby4.jpg'

import Pea1 from '../assets/pea1.png'
import Pea2 from '../assets/pea2.png'
import Pea3 from '../assets/pea3.png'
import Pea4 from '../assets/pea4.png'


const Explore = ({ navigation }) => {

    return (
        <>
            <Main>
            <ScrollView>
                <Header />
                
                    <Container>
                        <Boxes>
                            <BoxText>
                                Prova mat - del 1
                </BoxText>
                <ScrollView  horizontal={true}>
                            <View style={styles.overlayView}>
                                <View style={styles.overlay}>
                                    <Image source={Photo1} style={styles.photo} />

                                    <Text style={styles.overlayText}> Svårt att sitta själv?  </Text>
                                </View>


                                <View style={styles.overlayView}>
                                    <View style={styles.overlay}>
                                        <Image source={Photo2} style={styles.photo} />

                                        <Text style={styles.overlayText}> Hur ska man börja? </Text>
                                    </View>

                                    <View style={styles.overlay}>
                                        <Image source={Photo3} style={styles.photo} />

                                        <Text style={styles.overlayText}> Hur ska man börja?  </Text>
                                    </View>

                                    <View style={styles.overlay}>
                                        <Image source={Photo4} style={styles.photo} />

                                        <Text style={styles.overlayText}> Hur ska man börja?  </Text>
                                    </View>


                                </View>
                            </View>
                            </ScrollView>
                        </Boxes>

                       
                        <Image source={Pea1} style={styles.pea1} />
                    

                        <Boxes>
                            <BoxText>
                                Prova mat - del 2
                </BoxText>
                <ScrollView  horizontal={true}>
                            <View style={styles.overlayView}>
                                <View style={styles.overlay}>
                                    <Image source={Photo1} style={styles.photo} />

                                    <Text style={styles.overlayText}> Svårt att sitta själv?  </Text>
                                </View>


                                <View style={styles.overlayView}>
                                    <View style={styles.overlay}>
                                        <Image source={Photo2} style={styles.photo} />

                                        <Text style={styles.overlayText}> Hur ska man börja? </Text>
                                    </View>

                                    <View style={styles.overlay}>
                                        <Image source={Photo1} style={styles.photo} />

                                        <Text style={styles.overlayText}> Hej </Text>
                                    </View>


                                </View>
                            </View>
                            </ScrollView>
                        </Boxes>

                        <Image source={Pea2} style={styles.pea2} />

                        <Boxes>
                            <BoxText>
                                Gluten
                </BoxText>
                <ScrollView  horizontal={true}>
                            <View style={styles.overlayView}>
                                <View style={styles.overlay}>
                                    <Image source={Photo1} style={styles.photo} />

                                    <Text style={styles.overlayText}> Svårt att sitta själv?  </Text>
                                </View>


                                <View style={styles.overlayView}>
                                    <View style={styles.overlay}>
                                        <Image source={Photo2} style={styles.photo} />

                                        <Text style={styles.overlayText}> Hur ska man börja? </Text>
                                    </View>

                                    <View style={styles.overlay}>
                                        <Image source={Photo1} style={styles.photo} />

                                        <Text style={styles.overlayText}> Hej </Text>
                                    </View>


                                </View>
                            </View>
                            </ScrollView>
                        </Boxes>

                        <Image source={Pea3} style={styles.pea3} />
                        <Boxes>
                            <BoxText>
                                8 x regeln
                </BoxText>
                <ScrollView  horizontal={true}>
                            <View style={styles.overlayView}>
                                <View style={styles.overlay}>
                                    <Image source={Photo1} style={styles.photo} />

                                    <Text style={styles.overlayText}> Svårt att sitta själv?  </Text>
                                </View>


                                <View style={styles.overlayView}>
                                    <View style={styles.overlay}>
                                        <Image source={Photo2} style={styles.photo} />

                                        <Text style={styles.overlayText}> Hur ska man börja? </Text>
                                    </View>

                                    <View style={styles.overlay}>
                                        <Image source={Photo1} style={styles.photo} />

                                        <Text style={styles.overlayText}> Hej </Text>
                                    </View>


                                </View>
                            </View>
                            </ScrollView>
                        </Boxes>
                        <Image source={Pea4} style={styles.pea4} />
                        <Boxes>
                            <BoxText>
                                Allergi
                </BoxText>
                <ScrollView  horizontal={true}>
                            <View style={styles.overlayView}>
                                <View style={styles.overlay}>
                                    <Image source={Photo1} style={styles.photo} />

                                    <Text style={styles.overlayText}> Svårt att sitta själv?  </Text>
                                </View>


                                <View style={styles.overlayView}>
                                    <View style={styles.overlay}>
                                        <Image source={Photo2} style={styles.photo} />

                                        <Text style={styles.overlayText}> Hur ska man börja? </Text>
                                    </View>

                                    <View style={styles.overlay}>
                                        <Image source={Photo1} style={styles.photo} />

                                        <Text style={styles.overlayText}> Hej </Text>
                                    </View>


                                </View>
                            </View>
                            </ScrollView>
                        </Boxes>
                    </Container>
                </ScrollView>
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
                        <FontAwesome5 name="readme" size={40} color="#5A673E" />
                        <Text>Utforska</Text>
                    </TouchableOpacity>
                </Icon>

                <Icon>
                    <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
                        <FontAwesome name="bar-chart" size={40} color="#ABA97B" />
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

const styles = StyleSheet.create({
    pea1: {
        height: 70,
        width: 200,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        borderRadius: 20,
        marginLeft: 160,
    },
    pea2: {
        height: 70,
        width: 100,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        borderRadius: 20,
        marginLeft: 30,
    },
    pea3: {
        height: 70,
        width: 70,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        borderRadius: 20,
        marginLeft: 200,
    },
    pea4: {
        height: 70,
        width: 100,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        borderRadius: 20,
        marginLeft: 100,
    },
    photo: {
        height: 100,
        width: 120,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        borderRadius: 20,
    },
    overlayView: {
        flexDirection: 'row',
    },
    overlay: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#94A968',
        marginLeft: 6,
        marginRight: 6,
    },
    overlayText: {
        fontSize: 10,
        color: 'white',
        paddingTop: 7,
        paddingBottom: 7,
    }

})
const Main = styled.View`
flex: 1;
background-color:#5A673E;
`

const Container = styled.View`
flex: 1;
`
const Boxes = styled.View`
padding-bottom:20px;
background-color:#fff;
box-shadow: 1px 1px 5px black;
flex-direction: column;
`
const BoxText = styled.Text`
color: #929292;
font-size: 20px;
padding: 10px;
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

export default Explore