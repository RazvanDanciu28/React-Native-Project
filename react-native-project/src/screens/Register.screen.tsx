import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthRouteNames } from "../router/route-names";
import { useAuth } from "../hooks/authContext";
import Register from "../components/Register"; 

type AuthNavigationProp = NavigationProp<Record<AuthRouteNames, undefined>>;

const RegisterScreen = () => {
    const navigation = useNavigation<AuthNavigationProp>();
    const {register} = useAuth();

    const handleRegisterSuccess = () => {
        navigation.navigate(AuthRouteNames.USER_DETAILS);
    }

    const handleGoToLogin = () => {
        navigation.navigate(AuthRouteNames.LOGIN);
    }

    const handleGoToHomePage = () => {
        navigation.navigate(AuthRouteNames.HOME_PAGE);
    }

    const handleSubmit = async (email: string, password: string) => {
        try {
            await register(email, password);
            handleRegisterSuccess();
        } catch (error) {
            throw new Error("Register went wrong! " + error);
        }
    };

    return <Register onSubmit={handleSubmit} goToLogin={handleGoToLogin} onRegisterSuccess={handleRegisterSuccess} goToHomePage={handleGoToHomePage}/>;
}

export default RegisterScreen;