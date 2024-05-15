import React from "react";
import { View, Text} from "react-native";
import styled from "styled-components/native";


const Button = styled.TouchableOpacity``

interface IUserDetails {
    userDetails: {
        id: number
        email: string
    }
    goToHomePage: () => void;
}


// poate adaugi stiluri
const UserDetails: React.FC<IUserDetails> = ({userDetails, goToHomePage}) => {
    return (
        <View>
            <Text>User ID: {userDetails.id}</Text>
            <Text>Email: {userDetails.email}</Text>

            <Button onPress={goToHomePage}>
                <Text>Back to Home Page</Text>
            </Button>
        </View>
    )
}

export default UserDetails;