import React, { useState, useContext } from 'react';
import { Container, Background, Overlay, Logo, BoxLogin, LoginInput, BtnSubmit, SubmitText, BckLogo, Loader } from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api';

import { UserContext } from '../../contexts/UserContext';

export default () => {

    const [ email, setEmail ] = useState('alison@bckcode.com.br');
    const [ pass, setPass ] = useState('bckcode@#2021');

    const [ loading, setLoading ] = useState(false);

    const  { dispatch:userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const handleSubmit = async () => {
        setLoading(true);
        if(email != '' && pass != ''){

            let json = await Api.login(email, pass);

            if(json.token){
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar:json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'DashBoard'}]
                });

            }else{
                alert('Credenciais inválidas');
            }

        }else{
            alert('Preencha os campos');
        }
        setLoading(false)
    }

    return (
        <Container>
            <Background source={require('../../../assets/images/bg02.jpg')}>
                <Overlay>
                    <Logo source={require('../../../assets/images/logos/logo-bcs-club-2.png')}/>
                    <BoxLogin>
                        <LoginInput 
                            value={email}
                            placeholder="E-mail"
                            placeholderTextColor="#ddd"
                            keyboardType="email-address"
                            onChangeText={(e)=>setEmail(e)}                        />
                        <LoginInput 
                            value={pass}
                            placeholder="Senha"
                            placeholderTextColor="#ddd"
                            keyboardType="email-address"
                            secureTextEntry={true}
                            onChangeText={(p)=>setPass(p)}
                        />
                        <BtnSubmit onPress={()=>handleSubmit()}>
                            {!loading ?
                                <SubmitText>Entrar</SubmitText>
                                :
                                <Loader color="#fff" size="small"/>
                            }
                        </BtnSubmit>
                        <BckLogo>Desenvolvido por BCKCode</BckLogo>
                    </BoxLogin>
                </Overlay>
            </Background>
        </Container>
    );
}