import axios from "axios";
import baseurl from "../base-url";

const meetingClient = axios.create( {
    baseURL: baseurl + "/meetings",
    headers: {
        "Content-Type": 'application/json',
    }
} );

export default meetingClient;