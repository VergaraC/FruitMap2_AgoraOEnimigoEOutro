import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Homepage from './pages/Homepage';
import Login from './pages/Login';

const AppStack = createStackNavigator(
    {
        Homepage: { screen: Homepage },
        Login: { screen: Login }
    },
    {
        headerMode: false
    }
);

export default createAppContainer(AppStack);