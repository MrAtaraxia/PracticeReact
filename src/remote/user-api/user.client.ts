import axios from "axios";
import baseurl from "../base-url";

const userClient = axios.create( {
    baseURL: baseurl + "/users",
    headers: {
        "Content-Type": 'application/json',
    }
} );

export default userClient;