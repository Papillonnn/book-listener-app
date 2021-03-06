import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    CardStyleInterpolators,
    createStackNavigator,
    HeaderStyleInterpolators,
    StackNavigationProp,
} from '@react-navigation/stack';
import Detail from '../pages/Detail';
import { Platform, StyleSheet } from 'react-native';
import BottomTabs from './BottomTabs';

export type RootStackParamList = {
    BottomTabs: undefined;
    Detail: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

class Navigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="float"
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerBackTitleVisible: false,
                        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        gestureEnabled: true,
                        gestureDirection: 'horizontal',
                        headerStyle: {
                            ...Platform.select({
                                android: {
                                    elevation: 0,
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                },
                            }),
                        },
                    }}>
                    <Stack.Screen name="BottomTabs" component={BottomTabs} />
                    <Stack.Screen name="Detail" component={Detail} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator;
