export async function GetAsync(
    baseUrl,
    authorize = true
) {
    let headers = {
        Accept: "application/json",
    };
    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }
    try {
        return await fetch(baseUrl, {
            method: "GET",
            headers: headers,
        }).then((res) => {
            if (res.status === 401) {
                // action when status 401
            }
            return res.json();
        });
    } catch (error) {
        return false
    }
}

export async function DeleteAsync(
    baseUrl,
    authorize = true
) {
    let headers = {};
    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }
    try {
        return await fetch(baseUrl, {
            method: "DELETE",
            headers: headers,
        }).then((res) => {
            if (res.status === 401) {
                // action when status 401
            }
            return res;
        });
    } catch (error) {
        return error
    }
}

export async function PostAsync(
    baseUrl,
    body,
    authorize = true
) {
    let headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": 'http://localhost:3000',
        "Access-Control-Allow-Credentials": 'true'
    };
    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }
    try {
        return await fetch(baseUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
        }).then((res) => {
            if (res.status === 401) {
                // action when status 401
            }
            return res;
        });
    } catch (error) {
        return error
    }
}

export async function PutAsync(
    baseUrl,
    body,
    authorize = true
) {
    let headers = {
        "Content-Type": "application/json",
    };
    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }
    try {
        return await fetch(baseUrl, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(body),
        }).then((res) => {
            if (res.status === 401) {
                // action when status 401
            }
            return res.json();
        });
    } catch (error) {
        return error;
    }
}

export async function PutWithFormDataAsync(
    baseUrl,
    formData,
    authorize = true
) {
    let headers = {};
    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }
    try {
        return await fetch(baseUrl, {
            method: "PUT",
            body: formData,
            headers: headers,
        }).then((res) => {
            if (res.status === 401) {
                // action when status 401
            }
            return res.json();
        });
    } catch (error) {
        return error;
    }
}

export async function PostWithFormDataAsync(
    baseUrl,
    formData,
    authorize = true
) {
    let headers = {
    };

    if (authorize) {
        let accessToken = await validateAccessToken();
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    try {
        return await fetch(baseUrl, {
            method: "POST",
            body: formData,
            headers: headers,
        }).then((res) => {
            if (res.status === 401) {
                // action when status 401
            }
            return res.json();
        });
    } catch (error) {
        return error
    }
}
async function validateAccessToken() {
    // return accessToken if not expired
    //for now validateAccessToken not call because when we call api whenever we pass Authorization false.That means accesstoken not required.
    return true;
}
