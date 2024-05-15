import axios from "axios";

// make a successful login request to the reqres.in API
export const loginAPI = async (email:string,password:string) => {
    let cred = {
        email,
        password
    };
    let response = await axios.post(`https://reqres.in/api/login`,cred);
    return response.data;
    
};

// make a request to get the list of countries from the db.json file, using JSON server
export const getCountriesAPI = async() => {
    let response = await axios(`http://localhost:8080/countries`);
    return response;
};

//make a request to add a country to the db.json file, using JSON server
export const addCountryDetailsAPI = async(country:string,capital:string) => {
    let data = {
        name:country,
        capital
    }
    let response= await axios.post(`http://localhost:8080/countries`,data);
    return response;
};
