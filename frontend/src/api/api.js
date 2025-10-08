import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const signup = (data) => api.post('/auth/signup', data);
export const login = (data) => api.post('/auth/login', data);
export const logout = () => api.post('/auth/logout');
export const getMe = () => api.get('/auth/me');
export const updateProfile = (data) => api.put('/auth/profile', data);
export const updatePassword = (data) => api.put('/auth/password', data);

// Posts API
export const getAllPosts = () => api.get('/posts');
export const getPostById = (id) => api.get(`/posts/${id}`);
export const getPostBySlug = (slug) => api.get(`/posts/slug/${slug}`);
export const createPost = (data) => api.post('/posts', data);
export const updatePost = (id, data) => api.put(`/posts/${id}`, data);
export const deletePost = (id) => api.delete(`/posts/${id}`);

// Categories and Tags API
export const getAllCategories = () => api.get('/categories');
export const getAllTags = () => api.get('/tags');
export const getAllAuthors = () => api.get('/posts/authors/all');

// Likes API
export const likePost = (postId) => api.post(`/posts/${postId}/like`);
export const unlikePost = (postId) => api.delete(`/posts/${postId}/like`);
export const getPostLikes = (postId) => api.get(`/posts/${postId}/likes`);

// Comments API
export const createComment = (postId, data) => api.post(`/posts/${postId}/comments`, data);
export const getPostComments = (postId) => api.get(`/posts/${postId}/comments`);
export const updateComment = (id, data) => api.put(`/posts/comments/${id}`, data);
export const deleteComment = (id) => api.delete(`/posts/comments/${id}`);

// User API
export const getUserProfile = (userId) => api.get(`/users/${userId}`);
export const getUserPosts = (userId) => api.get(`/users/${userId}/posts`);
export const followUser = (userId) => api.post(`/users/${userId}/follow`);
export const unfollowUser = (userId) => api.delete(`/users/${userId}/follow`);
export const getFollowers = (userId) => api.get(`/users/${userId}/followers`);
export const getFollowing = (userId) => api.get(`/users/${userId}/following`);
export const checkFollowing = (userId) => api.get(`/users/${userId}/is-following`);

// Bookmark API
export const bookmarkPost = (postId) => api.post(`/posts/${postId}/bookmark`);
export const removeBookmark = (postId) => api.delete(`/posts/${postId}/bookmark`);
export const getUserBookmarks = () => api.get(`/posts/bookmarks`);
export const checkBookmark = (postId) => api.get(`/posts/${postId}/bookmark/check`);

export default api;
