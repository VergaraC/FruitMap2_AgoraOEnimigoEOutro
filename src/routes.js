import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Location from './pages/Location';

const AppStack = createStackNavigator(
    {
        Homepage: { screen: Homepage },
        Login: { screen: Login },
        Location: { screen: Location }
    },
    {
        headerMode: false
    }
);

export default createAppContainer(AppStack);