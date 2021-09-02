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
    background-color: rgba(41, 35, 92,0.7);
    
    align-items: center;
    justify-content: space-between;
    padding-top: 100px;
`;
export const Logo = styled.Image`
    width: 250px;
    height: 70px;
`;
export const Loader = styled.ActivityIndicator`
`;
export const BoxLogin = styled.View`
    width: 100%;
    height: 350px;
    align-items: center;
    justify-content: center;
    padding: 50px;
`;

export const LoginInput = styled.TextInput`
    border: .2px #85829d solid;
    borderTopWidth:0;
    borderLeftWidth:0
    borderRightWidth:0
    color: #fff;
    width: 100%;
    margin-bottom: 25px;
    padding: 10px;
`;

export const BtnSubmit = styled.TouchableOpacity`
    width: 100%;
    background-color: #00b939;
    padding: 15px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
`;
export const SubmitText = styled.Text`
    color: #fff;
    
`;
export const BckLogo = styled.Text`
    color: #c5c5c5;
`;