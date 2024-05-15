import styled from "styled-components/native";

const Container = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px;
`

const Button = styled.TouchableOpacity``;

export interface IHomePage {
    goToLogin: () => void;
    goToRegister: () => void;
    goToUserDetails: () => void;
}

const HomePage: React.FC<IHomePage> = ({goToLogin, goToRegister, goToUserDetails}) => {
    return (
        <Container>
            <Button onPress={goToLogin}>
                Login
            </Button>

            <Button onPress={goToRegister}>
                Register
            </Button>

            <Button onPress={goToUserDetails}>
                UserDetails
            </Button>
        </Container>
    )
}

export default HomePage;