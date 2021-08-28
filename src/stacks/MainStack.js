import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import preload from '../screens/preload';
import login from '../screens/login';

const Stack = createStackNavigator();

export default () => {
    <Stack.Navigator>
        <Stack.Screen name="preload" component={preload} />
        <Stack.Screen name="login" component={login} />
    </Stack.Navigator>
}