const baseUrl = "https://malamute-enabled-yak.ngrok-free.app";

const baseHeaders = {
    "Content-Type": 'application/json',
    "Accept": 'application/json'
};

export const login = async(email: string, password: string) : Promise<{accessToken: string; userDetails: any}>=> {
    const result = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
            ...baseHeaders
        },
        body: JSON.stringify({
            email, password
        })
    })

    if (!result.ok) {
        throw new Error("Login went wrong!");
    }

    const data = await result.json();
    const userDetails = await fetchUserDetails(data.accessToken);

    return {
        accessToken: data.accessToken,
        userDetails: userDetails
    };
};

export const register = async(email: string, password: string) => {
    const result = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: {
            ...baseHeaders
        },
        body: JSON.stringify({
            email, password
        })
    })

    if (!result.ok) {
        throw new Error("Register went wrong!");
    }

    const data = await result.json();
    const userDetails = await fetchUserDetails(data.accesToken);

    return {
        accesToken: data.accesToken,
        userDetails: userDetails
    }
};

export const fetchUserDetails = async(token: string) => {
    const response = await fetch(`${baseUrl}/user/details/me`, {
        method: "GET",
        headers: {
          ...baseHeaders,
          Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok){
        throw new Error("Fetching user details went wrong");
    }

    const data = await response.json();
    return data;
}