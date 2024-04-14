import axios from 'axios';

export const signup = async ({name, email, password}) =>{
    try {
        const {data} = await axios.post('https://blog-backend-dt5r.onrender.com/api/users/register',{
            name,
            email,
            password
        });
        return data;
    } catch (error) {
        if(error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};

export const login = async ({ email, password}) =>{
    try {
        const {data} = await axios.post('https://blog-backend-dt5r.onrender.com/api/users/login',{
            email,
            password
        });
        return data;
    } catch (error) {
        if(error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};

export const getUserProfile = async ({ token }) =>{
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const {data} = await axios.get('https://blog-backend-dt5r.onrender.com/api/users/profile', config);
        return data;
    } catch (error) {
        if(error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};

export const updateProfile = async ({ token, userData }) =>{
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const {data} = await axios.put('https://blog-backend-dt5r.onrender.com/api/users/updateProfile', userData,config);
        return data;
    } catch (error) {
        if(error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};

export const updateProfilePicture = async ({ token, formData }) =>{
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        }
        const {data} = await axios.put('https://blog-backend-dt5r.onrender.com/api/users/updateProfilePicture', formData,config);
        return data;
    } catch (error) {
        if(error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};