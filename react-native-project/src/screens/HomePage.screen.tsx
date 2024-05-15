import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthRouteNames } from "../router/route-names";
import HomePage from "../components/HomePage"; 

type AuthNavigationProp = NavigationProp<Record<AuthRouteNames, undefined>>;

const HomePageScreen = () => {
    const navigation = useNavigation<AuthNavigationProp>();
    
    const handleGoToLogin = () => {
        navigation.navigate(AuthRouteNames.LOGIN);
    }

    const handleGoToRegister = () => {
        navigation.navigate(AuthRouteNames.REGISTER);
    }

    const handeGoToUserDetails = () => {
        navigation.navigate(AuthRouteNames.USER_DETAILS);
    }

    return <HomePage goToLogin={handleGoToLogin} goToRegister={handleGoToRegister} goToUserDetails={handeGoToUserDetails}/>
}

export default HomePageScreen;