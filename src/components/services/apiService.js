export const requester = async (url, method, data) => {
    const token = localStorage.getItem("accessToken");

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

        if (!response.ok) {
            throw new Error(response);
        }

        if (response.status === 204) {
            return response;
        }

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
