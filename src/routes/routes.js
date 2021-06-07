import React from 'react';
import  { createStackNavigator } from '@react-navigation/stack';

import home from './tab.routes'
// import home from "../pages/home";

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.background
            },
        }}
    >
        <stackRoutes.Screen 
            name="Welcome"
            component={home}
        />

    </stackRoutes.Navigator>
)


export default AppRoutes;