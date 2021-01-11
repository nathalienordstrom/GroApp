import React from 'react'
import { Image, StyleSheet } from 'react-native'
import styled from 'styled-components/native';

import headerImage from '../assets/gro..png';

const Header = () => {
    return (
        <HeaderContainer>

            <Image source={headerImage} style={styles.image} />

        </HeaderContainer>

    )
}

const styles = StyleSheet.create({
    image: {
        height: 70,
        width: 122,
        marginRight: 20
    }
})

const HeaderContainer = styled.View`
width: 100%;
align-items: flex-end;
justify-content: center;
margin-top: 50px;
`



export default Header;