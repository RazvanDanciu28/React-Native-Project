import React from "react";
import { View, Text} from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    width: 100%;
    height: 100%;
`
const Button = styled.TouchableOpacity``

interface IUserDetails {
    userDetails: any;
    goToHomePage: () => void;
}


// poate adaugi stiluri
const UserDetails: React.FC<IUserDetails> = ({userDetails, goToHomePage}) => {
    return (
        <Container>
            {userDetails ? (
                <View>
                    <Text>User ID: {userDetails.user.id}</Text>
                    <Text>Email: {userDetails.user.email}</Text>
                </View>
            ) : (
                <Text>User Details Not Found. Check if you are logged in.</Text>
            )}
            
            <Button onPress={goToHomePage}>
                <Text>Back to Home Page</Text>
            </Button>
        </Container>
        
    )
}

export default UserDetails;