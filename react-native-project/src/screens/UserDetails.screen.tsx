import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthRouteNames } from "../router/route-names";
import { useAuth } from "../hooks/authContext";
import UserDetails from '../components/UserDetails';
import { View, Text } from "react-native";
import React, { useEffect, useState } from 'react';

type AuthNavigationProp = NavigationProp<Record<AuthRouteNames, undefined>>;

const UserDetailsScreen = () => {
    const navigation = useNavigation<AuthNavigationProp>();
    const auth = useAuth();
    const [userDetails, setUserDetails] = useState<any>(null);

    const handleGoToHomePage = () => {
        navigation.navigate(AuthRouteNames.HOME_PAGE);
    }

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const data = await auth.userDetails();
                setUserDetails(data);
            } catch (error) {
                throw new Error("Fetching details went wrong from screen " + error);
            }
        };
        fetchUserDetails();
    }, [auth])

    return (
        <View>
            {userDetails ? <UserDetails userDetails={userDetails} goToHomePage={handleGoToHomePage}/> : <Text>User Details Not Found. Check if you are logged in.</Text>}
        </View>
    )
}

export default UserDetailsScreen;