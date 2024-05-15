import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthRouteNames } from "../router/route-names"
import { useAuth } from "../hooks/authContext";
import Login from "../components/Login"; 

type AuthNavigationProp = NavigationProp<Record<AuthRouteNames, undefined>>;

const LoginScreen = () => {
    const navigation = useNavigation<AuthNavigationProp>();
    const { login } = useAuth();

    const handleLoginSuccess = () => {
        navigation.navigate(AuthRouteNames.USER_DETAILS);
    };

    const handleGoToRegister = () => {
        navigation.navigate(AuthRouteNames.REGISTER);
    };

    const handleSubmit = async (email: string, password: string) => {
        try {
            await login(email, password);
            handleLoginSuccess();
        } catch (error) {
            throw new Error("Login went wrong !" + error);
        }
    };

    return <Login onSubmit={handleSubmit} goToRegister={handleGoToRegister} onLoginSuccess={handleLoginSuccess} />;
}

export default LoginScreen;