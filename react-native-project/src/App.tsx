import Router from "./router/Router";
import { AuthContextProvider } from "./hooks/authContext";

export default function App() {
    return (
        <AuthContextProvider>
            <Router></Router>
        </AuthContextProvider>
    )
}