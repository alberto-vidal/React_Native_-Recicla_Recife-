import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Page_01_01 from './pages/Page_01_01';
import Page_01_01_Plastico from './pages/Page_01_01_Plastico';
import Page_01_01_Outros from './pages/Page_01_01_Outros';
import Page_01_01_Papel from './pages/Page_01_01_Papel';
import Page_01_01_Vidro from './pages/Page_01_01_Vidro';
import Page_01_01_Metal from './pages/Page_01_01_Metal';
import Page_01_01_Dicas from './pages/Page_01_01_Dicas';
import Page_02_01 from './pages/Page_02_01';
import Page_02_01_Retorno from './pages/Page_02_01_Retorno';
import Page_03_01 from './pages/Page_03_01';
import Page_04_01 from './pages/Page_04_01';
import Page_04_01_Retorno_Map from './pages/Page_04_01_Retorno_Map';
import Page_04_01_Retorno_Envio from './pages/Page_04_01_Retorno_Envio';
import Page_04_01_Retorno_Retorno from './pages/Page_04_01_Retorno_Retorno';

const AppStack = createNativeStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName='Page_01' screenOptions={{headerShown: false}}>
                <AppStack.Screen name='Home' component={Home}/>
                <AppStack.Screen name='Page_01_01' component={Page_01_01}/>
                <AppStack.Screen name='Page_01_01_Plastico' component={Page_01_01_Plastico}/>
                <AppStack.Screen name='Page_01_01_Outros' component={Page_01_01_Outros}/>
                <AppStack.Screen name='Page_01_01_Papel' component={Page_01_01_Papel}/>
                <AppStack.Screen name='Page_01_01_Vidro' component={Page_01_01_Vidro}/>
                <AppStack.Screen name='Page_01_01_Metal' component={Page_01_01_Metal}/>
                <AppStack.Screen name='Page_01_01_Dicas' component={Page_01_01_Dicas}/>
                <AppStack.Screen name='Page_02_01' component={Page_02_01}/>
                <AppStack.Screen name='Page_02_01_Retorno' component={Page_02_01_Retorno}/>
                <AppStack.Screen name='Page_03_01' component={Page_03_01}/>
                <AppStack.Screen name='Page_04_01' component={Page_04_01}/>
                <AppStack.Screen name='Page_04_01_Retorno_Map' component={Page_04_01_Retorno_Map}/>
                <AppStack.Screen name='Page_04_01_Retorno_Envio' component={Page_04_01_Retorno_Envio}/>
                <AppStack.Screen name='Page_04_01_Retorno_Retorno' component={Page_04_01_Retorno_Retorno}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Route