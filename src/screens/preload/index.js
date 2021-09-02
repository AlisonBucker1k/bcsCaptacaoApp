import React, { useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native'
import { Container, Background, Overlay, Logo, Loader } from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';

export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                // Valida token
                let res = await Api.checkToken(token);

                
                if(res.return === false){
                    // Manda o cabra pra tela de login
                    navigation.navigate('Login')
                }else{

                    userDispatch({
                        type:'setAvatar',
                        payload:{
                            avatar:res.data.avatar
                        }
                    });

                    // Manda o cabra pro dashboard
                    navigation.navigate('DashBoard')    
                }

            }else{
                // Manda o cabra pra tela de login
                navigation.navigate('Login')
            }
        }

        checkToken();
    },[]);

    return (
        <Container>
            <Background source={require('../../../assets/images/bg02.jpg')}>
                <Overlay>
                    <Logo source={require('../../../assets/images/logos/logo-bcs-club-2.png')}/>
                    <Loader color="#fff" size="large"/>
                </Overlay>
            </Background>
        </Container>
    );
}