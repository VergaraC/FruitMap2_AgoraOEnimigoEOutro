import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import MapPage from './pages/MapPage';
import Cadastro from './pages/Cadastro';

const AppStack = createStackNavigator(
    {
        MapPage: { screen: MapPage },
        Cadastro: { screen: Cadastro },
        Homepage: { screen: Homepage },
        Login: { screen: Login }
    },
    {
        headerMode: false
    }
);

export default createAppContainer(AppStack);