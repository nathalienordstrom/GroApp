import React from 'react'
import { Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import styled from 'styled-components/native';


import headerImage from '../assets/logggo.png';

const Header = ({ navigation }) => {
    return (
        <HeaderContainer>
                 <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                 <Image source={headerImage} style={styles.image} />
                    </TouchableOpacity>
          
        </HeaderContainer>

    )
}

const styles = StyleSheet.create({
    image: {
        height: 65,
        width: 100,
        marginRight: 20,
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 21,
    }
})

const HeaderContainer = styled.View`
padding: 5px 10px 0 10px;
align-items: flex-end;
justify-content: center;
`



export default Header;