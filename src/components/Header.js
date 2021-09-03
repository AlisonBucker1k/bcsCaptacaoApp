import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const HeaderArea = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-top: 15px;
`;
const Logo = styled.Image`
    width: 270px;
    height: 70px;
`;
const UserArea = styled.Text`
    color: #fff;
    font-weight: 700;
    margin-top: 20px;
    font-size: 20px;
`;

export default () => {
    return(
        <HeaderArea>
            <Logo source={require('../../assets/images/logos/logo-bcs-club-2.png')}/>
            <UserArea>Olá, Alison Bucker!</UserArea>
        </HeaderArea>
    );
}