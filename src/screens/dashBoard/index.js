import React, { useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native'
// import { Container, Background, Overlay, Logo, Loader } from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                // Valida token
            }else{
                // Manda o cabra pra tela de login
                navigation.navigate('Login')
            }
        }

        checkToken();
    },[]);

    return (
        <Text>Dashboard</Text>
    );
}