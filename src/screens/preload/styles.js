import React from 'react';

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;
export const Background = styled.ImageBackground`
    flex: 1;
    background-color: #29235c;
`;
export const Overlay = styled.View`
    flex: 1;
    background-color: #29235c;
    opacity: .7;
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