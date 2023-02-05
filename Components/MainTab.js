import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import About from './Screens/About';
import Home from './Screens/Home';
import MapScreen from './Screens/MapScreen';

class MainTab extends Component {
    render() {
        const Tab = createMaterialTopTabNavigator()
        return (
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Map' component={MapScreen} />
                <Tab.Screen name='About' component={About} />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({})

export default MainTab;
