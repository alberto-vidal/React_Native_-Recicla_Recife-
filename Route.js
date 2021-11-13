import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Page_01 from './pages/Page_01';
//import Page_02 from './pages/Page_02';
//import Page_03 from './pages/Page_03';
//import Page_04 from './pages/Page_04';
//import Page_05 from './pages/Page_05';

const AppStack = createNativeStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName='Page_01' screenOptions={{headerShown: false}}>
                <AppStack.Screen name='Page_01' component={Page_01}/>
                
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Route