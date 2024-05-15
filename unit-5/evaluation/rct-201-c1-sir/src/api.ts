import axios,{AxiosResponse} from "axios";
import { LoginPayload } from "./App";
import {Country} from "./Pages/Countries"

// make a successful login request to the reqres.in API
export const loginAPI = async(payload:LoginPayload) => {

    const response :AxiosResponse<{token:string}>  = await axios.post(`https://reqres.in/api/login`,
    payload
    );
    return response.data;
};

// make a request to get the list of countries from the db.json file, using JSON server
export const getCountriesAPI = async() => {
    const response:AxiosResponse<Country[]>=await axios.get("http://localhost:8080/countries");
    return response.data;
};

//make a request to add a country to the db.json file, using JSON server
export const addCountryDetailsAPI = async(payload:Country) => {
    const response:AxiosResponse<Country>=await axios.post("http://localhost:8080/countries",payload);
    return response.data

};
