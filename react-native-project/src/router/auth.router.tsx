import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthRouteNames } from "./route-names";
import { Text } from "react-native";
import React from 'react';

import HomePageScreen from "../screens/HomePage.screen";
import LoginScreen from "../screens/Login.screen";
import RegisterScreen from "../screens/Register.screen";
import UserDetailsScreen from "../screens/UserDetails.screen";




const AuthStack = createNativeStackNavigator();

const authRoutes = (
    <AuthStack.Navigator initialRouteName={AuthRouteNames.HOME_PAGE}>
        {/* home page */}
        <AuthStack.Screen 
            name={AuthRouteNames.HOME_PAGE}
            component={HomePageScreen}
            options={{
                headerTitle: (props) => <Text {...props}>Home Page</Text>
            }}
        />

        {/* login */}
        <AuthStack.Screen 
            name={AuthRouteNames.LOGIN}
            component={LoginScreen}
            options={{
                headerTitle: (props) => <Text {...props}>Login Page</Text>
            }}
        />

        {/* register */}
        <AuthStack.Screen 
            name={AuthRouteNames.REGISTER}
            component={RegisterScreen}
            options={{
                headerTitle: (props) => <Text {...props}>Register Page</Text>
            }}
        />

        {/* user details */}
        <AuthStack.Screen 
            name={AuthRouteNames.USER_DETAILS}
            component={UserDetailsScreen}
            options={{
                headerTitle: (props) => <Text {...props}>User Details Page</Text>
            }}
        />
    </AuthStack.Navigator>
)

export default authRoutes;