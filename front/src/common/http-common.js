import axios from "axios";

export default axios.create({
  baseURL: "https://mission-locale-heroku.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});