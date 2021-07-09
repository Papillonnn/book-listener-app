import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from '../pages/Home';
import Listen from '../pages/Listen';
import Found from '../pages/Found';
import Account from '../pages/Account';

export type BottomTabParamList = {
    Home: undefined;
    Listen: undefined;
    Found: undefined;
    Account: undefined;
};

export type BottomTabNavigation = BottomTabNavigationProp<BottomTabParamList>;

const Tab = createBottomTabNavigator();

class BottomTabs extends React.Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#f86442',
                }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: '首页',
                        tabBarIcon: ({ size, color }) => (
                            <Icon name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Listen"
                    component={Listen}
                    options={{
                        tabBarLabel: '我听',
                        tabBarIcon: ({ size, color }) => (
                            <Icon name="bells" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Found"
                    component={Found}
                    options={{
                        tabBarLabel: '发现',
                        tabBarIcon: ({ size, color }) => (
                            <Icon name="find" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Account"
                    component={Account}
                    options={{
                        tabBarLabel: '我的',
                        tabBarIcon: ({ size, color }) => (
                            <Icon name="user" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }
}

export default BottomTabs;
