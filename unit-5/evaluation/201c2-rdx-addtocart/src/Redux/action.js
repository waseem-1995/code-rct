//Write the API calling functions here;
import * as types from "./actionTypes";
import axios from "axios";

const getProducts=()=>(dispatch)=>{
    dispatch({type:types.GET_PRODUCTS_REQUEST});
    return axios
        .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
        .then((res)=>{
            
            dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:res.data})
        })
        .catch((e)=>{
            dispatch({type:types.GET_PRODUCTS_FAILURE,payload:e})
        })

}

//addproducts

const addProducts = (payload) => async(dispatch)=>{
    dispatch({type:types.ADD_PRODUCT_REQUEST});

    try {
        const res=await axios.post(
            `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,
            payload
        );
        dispatch({type:types.ADD_PRODUCT_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:types.ADD_PRODUCT_FAILURE,payload:error})
    }

}

//edit

const editProducts = (id,payload) => async(dispatch)=>{
    dispatch({type:types.EDIT_PRODUCT_REQUEST});

    try {
        const res=await axios.patch(
            `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`,
            payload
        );
        dispatch({type:types.EDIT_PRODUCT_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:types.EDIT_PRODUCT_FAILURE,payload:error})
    }

}

//delete

const deleteProducts = (id) => async(dispatch)=>{
    dispatch({type:types.DELETE_PRODUCT_REQUEST});

    try {
        await axios.delete(
            `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`
        );
        dispatch({type:types.DELETE_PRODUCT_SUCCESS,payload:id})
    } catch (error) {
        dispatch({type:types.DELETE_PRODUCT_FAILURE,payload:error})
    }

}

export {getProducts,addProducts,editProducts,deleteProducts}