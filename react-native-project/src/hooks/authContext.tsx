import React, { createContext, useContext, useState } from "react";
import {login, register, fetchUserDetails} from "../api";

interface IUserDetails {
    id: number;
    email: string;
}

interface IAuthContext {
    token: string;
    userDetails: () => Promise<IUserDetails>;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({
    token: '',
    userDetails: async() => ({ id: 0, email: '' }),
    login: async() => {},
    register: async() => {}
});

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [token, setToken] = useState<string>('');
    const [userDetails, setUserDetails] = useState<IUserDetails | null>(null);

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await login(email, password);
            setToken(response.accessToken);
            const details = await fetchUserDetails(response.accessToken);
            setUserDetails(details);
        } catch (error) {
            throw new Error("Login went wrong " + error);
        }
    };

    const handleRegister = async (email: string, password: string) => {
        try {
            const response = await register(email, password);
            setToken(response.accessToken);
            const details = await fetchUserDetails(response.accessToken);
            setUserDetails(details);
        } catch (error) {
            throw new Error("Register went wrong! " + error);
        }
    }

    const handleFetchUserDetails = async () => {
        if (token){
            try {
                const data = await fetchUserDetails(token);
                setUserDetails(data);
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