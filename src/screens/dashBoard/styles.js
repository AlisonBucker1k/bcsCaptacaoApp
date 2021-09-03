import React from 'react';

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
`;
export const Background = styled.ImageBackground`
    flex: 1;
    width: 100%;
    background-color: #29235c;
`;
export const Overlay = styled.View`
    flex: 1;
    background-color: #29235c;
    opacity: .8;
    align-items: center;
    justify-content: center;
`;
export const Logo = styled.Image`
    width: 250px;
    height: 70px;
`;

export const Loader = styled.ActivityIndicator`
    margin-top: 25px;
`;

export const BlocksContainer = styled.View`
    flex: 2;
    width: 100%;
    padding: 10px;
`;
export const Void = styled.View`
    flex: 1;
`;

export const BlocksRow = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;
export const Block = styled.TouchableOpacity`
    width: 49%;
    background-color: rgba(255,255,255,.1);
    border-radius: 15px;
    justify-content:center;
    align-items: center;
`;
export const BlockTitle = styled.Text`
    color: #fff;
    text-transform: uppercase;
`;
export const BlockValue = styled.Text`
    font-size: 100px;
    color: #fff;
`;
export const BlockImage = styled.Image`
    width: 100px;
    height: 100px;
    margin-top: 20px;
`;
export const ModalAddCredenciado = styled.Modal`
    background-color: rgba(41,35,92,.8);
`;