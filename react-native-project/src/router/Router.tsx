import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/authContext"
import authRoutes from "./auth.router";

const Router: React.FC = () => {
    const auth = useAuth();
    return (
        <NavigationContainer>
            {authRoutes}
        </NavigationContainer>
    )
}

export default Router;