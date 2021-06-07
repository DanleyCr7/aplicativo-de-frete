import React from 'react';
import {Platform, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import colors from '../styles/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import home from '../pages/home';
import routeFreigh from '../pages/routeFreigh';
const AppTab = createBottomTabNavigator();
const sized = 20;
const Home = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        indicatorStyle: {backgroundColor: 'transparent'},
        activeTintColor: colors.active,
        inactiveTintColor: colors.text_black_title,
        showLabel: false,
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 70,
          marginBottom: 20,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 25,
          backgroundColor: '#1b1b1b',
          borderTopColor: '#1b1b1b',
        },
      }}>
      <AppTab.Screen
        name="Nova Planta"
        component={home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({size, color}) => (
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 25,
                backgroundColor: color == '#f8ab05' ? color : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome5
                name="home"
                size={sized}
                color={color == '#f8ab05' ? colors.background : color}
              />
            </View>
          ),
        }}
      />

      <AppTab.Screen
        name="Minhas Plantas"
        component={routeFreigh}
        options={{
          tabBarIcon: ({size, color}) => (
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 25,
                backgroundColor: color == '#f8ab05' ? color : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome5
                name="map-marker-alt"
                size={sized}
                color={color == '#f8ab05' ? colors.background : color}
              />
            </View>
          ),
        }}
      />
      <AppTab.Screen
        name="dad"
        component={routeFreigh}
        options={{
          tabBarIcon: ({size, color}) => (
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 25,
                backgroundColor: color == '#f8ab05' ? color : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome5
                name="calendar-plus"
                size={sized}
                color={color == '#f8ab05' ? colors.background : color}
              />
            </View>
          ),
        }}
        
      />
       <AppTab.Screen
        name="ddadad"
        component={routeFreigh}
        options={{
          tabBarIcon: ({size, color}) => (
            <View
              style={{
                width: 45,
                height: 45,
                borderRadius: 25,
                backgroundColor: color == '#f8ab05' ? color : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome5
                name="user-alt"
                size={18}
                color={color == '#f8ab05' ? colors.background : color}
              />
            </View>
          ),
        }}
        
      />
      
    </AppTab.Navigator>
  );
};

export default Home;
