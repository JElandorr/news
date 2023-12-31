export const requester = async (url, method, data) => {
    const UserDataJSON = localStorage.getItem("userData");
    const token = UserDataJSON ? JSON.parse(UserDataJSON).accessToken : null;

    let options;

    switch (method.toLowerCase()) {
        case "get":
            options = {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
            };
            break;
        case "post":
            options = {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            break;
        case "put":
            options = {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            break;
        case "delete":
            options = {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
            };
            break;
        default:
            throw new Error("Not supported method passed to requester function!");
    }

    if (token) {
        options.headers["X-Authorization"] = token;
    }

    try {
        const response = await fetch(url, options);

        // console.log(response);

        if (!response.ok) {
            throw new Error(response);
            // throw new Error("Error: " + response.status + ". " + "Message: " + response.statusText);
        }

        if (response.status === 204) {
            return response;
        }

        if (response.url === "http://localhost:3030/users/logout" && response.status === 200) {
            return response;
        }

        const result = await response.json();

        // console.log(result);

        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
