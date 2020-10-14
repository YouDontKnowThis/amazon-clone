import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-react-challenge-5b0d0.cloudfunctions.net/api",
});

export default instance;
