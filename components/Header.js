import React from 'react'
import { Image, StyleSheet } from 'react-native'
import styled from 'styled-components/native';

import headerImage from '../assets/logggo.png';

const Header = () => {
    return (
        <HeaderContainer>

            <Image source={headerImage} style={styles.image} />

        </HeaderContainer>

    )
}

const styles = StyleSheet.create({
    image: {
        height: 65,
        width: 100,
        marginRight: 20,
        shadowColor: '#202020',
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 1,
    }
})

const HeaderContainer = styled.View`
padding: 5px 10px 0 10px;
align-items: flex-end;
justify-content: center;
`



export default Header;