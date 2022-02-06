import axios from "axios";

// const API_URL = "https://mission-locale-heroku.herokuapp.com/api/";
const API_URL = "http://localhost:8080/api/";
const API_URL_2 = "http://localhost:8080/api/posts/";

class PostDataService {


  getAll(mois) {
    return axios
      .get(API_URL + "posts", {
        mois,
      })
      .then((response) => {
        if (response.data.accessToken) {
          return response.data;
        }
      });
  }

  create(data) {
    return axios.post(API_URL + "posts", data);
  }
  createLogement(data) {
    return axios.post(API_URL_2 + "log", data);
  }
  createFinance(data) {
    return axios.post(API_URL_2 + "fin", data);
  }
  createEmploi(data) {
    return axios.post(API_URL_2 + "emp", data);
  }
  createCitoyennete(data) {
    return axios.post(API_URL_2 + "cit", data);
  }
  createSante(data) {
    return axios.post(API_URL_2 + "san", data);
  }
}

export default new PostDataService();
