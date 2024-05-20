const baseUrl = "http://163.172.177.98:8081";

const baseHeaders = {
    "Content-Type": 'application/json',
    "Accept": 'application/json'
};

export const login = async(email: string, password: string) : Promise<{accessToken: string}>=> {
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
    return data;
};

export const register = async(email: string, password: string) : Promise<{accessToken: string}>=> {
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
    return data;
};

export const fetchUserDetails = async(token: string) => {
    const response = await fetch(`${baseUrl}/user/details/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok){
        throw new Error("Fetching user details went wrong");
    }

    const data = await response.json();
    return data;
}