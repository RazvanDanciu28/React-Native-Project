import styled from "styled-components/native";
import { Text, StyleSheet, Pressable } from 'react-native';
const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Button = styled.TouchableOpacity``;

export interface IHomePage {
  goToLogin: () => void;
  goToRegister: () => void;
  goToUserDetails: () => void;
}

const HomePage: React.FC<IHomePage> = ({
  goToLogin,
  goToRegister,
  goToUserDetails,
}) => {
  return (
    <Container>
     <Pressable  onPress={goToLogin}>
      <Text>Login</Text>
    </Pressable>
     
    <Pressable  onPress={goToRegister}>
      <Text>Register</Text>
    </Pressable>

    <Pressable  onPress={goToUserDetails}>
      <Text>UserDetails</Text>
    </Pressable>
      

    </Container>
  );
};

export default HomePage;