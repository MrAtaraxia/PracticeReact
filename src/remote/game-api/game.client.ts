import axios from "axios";
import baseurl from "../base-url";

const gameClient = axios.create( {
    baseURL: baseurl + "/games",
    headers: {
        "Content-Type": 'application/json',
    }
} );

export default gameClient;