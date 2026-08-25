const API_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
};

export const getUser = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`);
    return response.json();
};


export const getPhotos = async (page = 1, limit = 15) => {
    const response = await fetch(`${API_URL}/photos?_page=${page}&_limit=${limit}`);
    return response.json();
};

export const getPhoto = async (id) => {
    const response = await fetch(`${API_URL}/photos/${id}`);
    return response.json();
};