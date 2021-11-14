import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Page_01 from './pages/Page_01';
import Page_01_01 from './pages/Page_01_01';
import Page_01_01_Plastico from './pages/Page_01_01_Plastico';
import Page_01_01_Outros from './pages/Page_01_01_Outros';
import Page_01_01_Papel from './pages/Page_01_01_Papel';
import Page_01_01_Vidro from './pages/Page_01_01_Vidro';
import Page_01_01_Metal from './pages/Page_01_01_Metal';
import Page_01_01_Dicas from './pages/Page_01_01_Dicas';


const AppStack = createNativeStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName='Page_01' screenOptions={{headerShown: false}}>
                <AppStack.Screen name='Page_01' component={Page_01}/>
                <AppStack.Screen name='Page_01_01' component={Page_01_01}/>
                <AppStack.Screen name='Page_01_01_Plastico' component={Page_01_01_Plastico}/>
                <AppStack.Screen name='Page_01_01_Outros' component={Page_01_01_Outros}/>
                <AppStack.Screen name='Page_01_01_Papel' component={Page_01_01_Papel}/>
                <AppStack.Screen name='Page_01_01_Vidro' component={Page_01_01_Vidro}/>
                <AppStack.Screen name='Page_01_01_Metal' component={Page_01_01_Metal}/>
                <AppStack.Screen name='Page_01_01_Dicas' component={Page_01_01_Dicas}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Route