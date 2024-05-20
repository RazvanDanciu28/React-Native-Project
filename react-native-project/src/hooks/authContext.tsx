import React, { createContext, useContext, useState } from "react";
import {login, register, fetchUserDetails} from "../api";

interface IUserDetails {
    id: number;
    email: string;
}

interface IAuthContext {
    token: string;
    userDetails: () => Promise<any>;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({
    token: '',
    userDetails: async() => {},
    login: async() => {},
    register: async() => {}
});

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [token, setToken] = useState<string>('');

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await login(email, password);
            setToken(response.accessToken);
        } catch (error) {
            throw new Error("Login went wrong " + error);
        }
    };

    const handleRegister = async (email: string, password: string) => {
        try {
            const response = await register(email, password);
            setToken(response.accessToken);
        } catch (error) {
            throw new Error("Register went wrong! " + error);
        }
    }

    const handleFetchUserDetails = async () => {
        if (token){
            try {
                const data = await fetchUserDetails(token);
                return data;
            } catch(error) {
                throw new Error("Fetching user details went wrong! " + error);
            }
        }
    }

    return (
        <AuthContext.Provider value={{token, userDetails: handleFetchUserDetails, login: handleLogin, register: handleRegister}}>
            {children}
        </AuthContext.Provider>
    )
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('')
    }
    return context;
}