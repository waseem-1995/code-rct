//Write the API calling functions and action creator functions here
import axios from "axios";
import * as types from "./actionTypes";

const appLoading = () => {
    return {type:types.APP_LOADING}
}
const appError = () => {
    return {type:types.APP_ERROR}
}

const getPosts = (payload) => {
    return {type: types.GET_POSTS, payload:payload}
}

const addPost = (payload) => {
return {type: types.ADD_POST, payload:payload}
}

const toggleLike =(payload)=>{
    return {type: types.TOGGLE_LIKE,payload:payload}
}
const fetchPost = async(dispatch) => {
    dispatch(appLoading)
 let res = await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`);
dispatch(getPosts(res.data))
}

const addData = (title) => (dispatch) => {
const payload = {
    title,
    liked:false
}
dispatch(appLoading)
axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`,payload).then(res => {
dispatch(addPost(res.data))
})
}

const toggleStatus =(id,liked) => (dispatch) => {
 const payload = {
    liked:!liked,
 }
 
 axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${id}`,payload).then(res =>{
    console.log(res)
    dispatch(toggleLike(res.data))
 })
}
export {
    appLoading,
    appError,
    getPosts,
    addPost,
    fetchPost,
    addData,
    toggleStatus
}