import axios from "axios";

axios.defaults.baseURL = "pp5-api-f-176f17fcc3bf.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
