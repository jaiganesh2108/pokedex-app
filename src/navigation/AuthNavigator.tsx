import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions = {{ headerShown : false}}>
            <Stack.Screen name="Login" component={} />
        </Stack.Navigatior>
    );
}

export default AuthNavigator;