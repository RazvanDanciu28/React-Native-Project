import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthRouteNames } from "../router/route-names";
import { useAuth } from "../hooks/authContext";
import UserDetails from '../components/UserDetails';
import { View, Text } from "react-native";

type AuthNavigationProp = NavigationProp<Record<AuthRouteNames, undefined>>;

const UserDetailsScreen = () => {
    const navigation = useNavigation<AuthNavigationProp>();
    const {userDetails} = useAuth();

    const handleGoToHomePage = () => {
        navigation.navigate(AuthRouteNames.HOME_PAGE);
    }

    return (
        <View>
            {userDetails ? <UserDetails userDetails={userDetails} goToHomePage={handleGoToHomePage}/> : <Text>User Details Not Found. Check if you are logged in.</Text>}
        </View>
    )
}

export default UserDetailsScreen;