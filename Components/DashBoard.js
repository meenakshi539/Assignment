import React, { Component } from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
 //import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import Icon from 'react-native-vector-icons/FontAwesome';
import Home from "./Home";
const Tab = createMaterialBottomTabNavigator();

function DashBoard() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="blue"
            inactiveColor="#AAAAAA"
            shifting={false}
            barStyle={{ backgroundColor:"#FFFFFF", }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                      <Icon name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Orders" component={Home} 
             options={{
                tabBarLabel: 'Orders',
                tabBarIcon: ({ color }) => (
                  <Icon name="inbox" color={color} size={26} />
                ),
            }}
            />
            <Tab.Screen name="Favorite" component={Home}
             options={{
                tabBarLabel: 'Favorite',
                tabBarIcon: ({ color }) => (
                  <Icon name="heart" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="My cart" component={Home}
             options={{
                tabBarLabel: 'My cart',
                tabBarIcon: ({ color }) => (
                  <Icon name="shoppingcart" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    );
}
export default DashBoard;