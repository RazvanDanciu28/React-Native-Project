import { useState } from "react";
import styled from "styled-components/native";

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
    
}

//de adaugat chestii
const Login: React.FC<ILogin> = ({onSubmit}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleSubmit - de facut

    return (
        <Container>
            <Input keyboardType="email-address" onChangeText={setEmail} placeholder="Type Email" />
            <Input secureTextEntry onChangeText={setPassword} placeholder="Type Password" />
            {/* de vazut */}
            {/* <Button onPress={handleSubmit}>
                <Text>Submit</Text>
            </Button> */}
            {/* de vazut si asta */}
            {/* <Button onPress={de vazut}>
                <Text>Don't have an account? Register here</Text>
            </Button> */}
        </Container>
    )
}

export default Login;