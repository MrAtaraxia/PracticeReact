import axios from "axios";
import baseurl from "../base-url";

const messageClient = axios.create( {
    baseURL: baseurl + "/messages",
    headers: {
        "Content-Type": 'application/json',
    }
} );

export default messageClient;