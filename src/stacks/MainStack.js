import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/preload';
import Login from '../screens/login';
import DashBoard from '../screens/dashBoard';

const Stack = createStackNavigator();

export default() => (
    <Stack.Navigator
    initialRouteName="Preload"
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="DashBoard" component={DashBoard}/>
    </Stack.Navigator>
);