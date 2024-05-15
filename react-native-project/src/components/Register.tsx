import React, { useState } from "react";
import styled from "styled-components/native"
import { Text } from "react-native";

const Container = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px;
`

const Input = styled.TextInput`
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-bottom: 10px;
    padding: 8px;
`

const Button = styled.TouchableOpacity``

export interface IRegister {
    onSubmit: (email: string, password: string) => void;
    goToLogin: () => void;
    onRegisterSuccess: () => void;
}

const Register: React.FC<IRegister> = ({onSubmit, goToLogin, onRegisterSuccess}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        await onSubmit(email, password);
        onRegisterSuccess();
    };

    return (
        <Container>
            <Input keyboardType="email-address" onChangeText={setEmail}/>
            <Input secureTextEntry onChangeText={setPassword}/>

            <Button onPress={handleSubmit}>
                <Text>Register</Text>
            </Button>

            <Button onPress={goToLogin}>
                <Text>Alerady have an account? Login here!</Text>
            </Button>
        </Container>
    )
}

function onRegisterSuccess() {
    throw new Error("Function not implemented.");
}

export default Register;