
import axios from "axios";

const url           = window.location.hostname
let client_axios    = ({})

console.log("hostname->", url)

client_axios = axios.create({
    baseURL: "https://api-exam-tic.herokuapp.com/",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
});

export default client_axios