import { useState } from "react";
import styled from "styled-components/native";
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

export interface ILogin {
    onSubmit: (email: string, password: string) => void;
    goToRegister: () => void;
    onLoginSuccess: () => void;
    
}

//de adaugat chestii
const Login: React.FC<ILogin> = ({onSubmit, goToRegister, onLoginSuccess}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        await onSubmit(email, password);
        onLoginSuccess();
    }

    return (
        <Container>
            <Input keyboardType="email-address" onChangeText={setEmail} placeholder="Type Email" />
            <Input secureTextEntry onChangeText={setPassword} placeholder="Type Password" />
            
            <Button onPress={handleSubmit}>
                <Text>Login</Text>
            </Button>

            <Button onPress={goToRegister}>
                <Text>Don't have an account? Register here</Text>
            </Button>
        </Container>
    )
}

export default Login;