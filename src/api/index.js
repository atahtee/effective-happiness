import axios from 'axios';

//const url = 'http://:5000/posts'; focus time
//const url = 'https://frame-it-djm7.onrender.com/';
const url ='https://frame-it-backend.onrender.com/';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url,newPost);
export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost)
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

