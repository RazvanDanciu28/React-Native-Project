import React, { createContext, useContext, useState } from "react";
import {login, register} from "../api";

interface IUserDetails {
    id: number;
    email: string;
}

interface IAuthContext {
    token: string;
    userDetails: IUserDetails | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [token, setToken] = useState<string>('');
    const [userDetails, setUserDetails] = useState<IUserDetails | null>(null);

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await login(email, password);
            setToken(response.accessToken);
            setUserDetails(response.userDetails);
        } catch (error) {
            throw new Error("Login went wrong " + error);
        }
    };

    const handleRegister = async (email: string, password: string) => {
        try {
            const response = await register(email, password);
            setToken(response.accesToken);
            setUserDetails(response.userDetails);
        } catch (error) {
            throw new Error("Register went wrong! " + error);
        }
    }

    return (
        <AuthContext.Provider value={{token, userDetails, login: handleLogin, register: handleRegister}}>
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