import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native'
import { Container, Background, Overlay, Loader, BlocksContainer, Void, BlocksRow, Block, BlockTitle,    BlockValue, BlockImage, ModalAddCredenciado } from './styles';

import Header from '../../components/Header';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default () => {

    const navigation = useNavigation();

    const [ modalNovoCredenciado, setModalNovoCredenciado ] = useState(false);

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
        <Container>
            <Background source={require('../../../assets/images/bg02.jpg')}>
                <Overlay>
                <Header />

                <BlocksContainer>
                    <BlocksRow>
                        <Block disabled={true}>
                            <BlockTitle>Seus Credenciados</BlockTitle>
                            <BlockValue>10</BlockValue>
                        </Block>
                        <Block disabled={true}>
                            <BlockTitle>Total Credenciados</BlockTitle>
                            <BlockValue>10</BlockValue>
                        </Block>
                    </BlocksRow>
                    <BlocksRow>
                        <Block onPress={()=>setModalNovoCredenciado(!modalNovoCredenciado)}>
                            <BlockTitle>Novo Credenciado</BlockTitle>
                            <BlockImage source={require('../../../assets/images/icons/add.png')}/>
                        </Block>
                        <Block>
                            <BlockTitle>Ver Credenciados</BlockTitle>
                            <BlockImage source={require('../../../assets/images/icons/list.png')}/>
                        </Block>
                    </BlocksRow>
                </BlocksContainer>
                <Void></Void>
                </Overlay>
            </Background>

            <ModalAddCredenciado
                visible={modalNovoCredenciado}
                onRequestClose={()=>setModalNovoCredenciado(!modalNovoCredenciado)}
                animationType="slide"
            >

            </ModalAddCredenciado>

        </Container>
    );
}