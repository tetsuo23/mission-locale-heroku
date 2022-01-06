import http from "../common/http-common";
import axios from './../../../app/front/react-jwt-auth/src/common/http-common';


class PostDataService {
  // getAll() {
  //   return http.get("/posts");
  // }

  // get(userId) {
  //   return http.get(`/posts/${userId}`);
  // }

  // create(data) {
  //   return http.post("/posts", data);
  // }

  // update(id, data) {
  //   return http.put(`/posts/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/posts/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/posts`);
  // }

  // findBymois(mois) {
  //   return http.get(`/posts?mois=${mois}`);
  // }
  // getCurrentUser() {
  //   return JSON.parse(localStorage.getItem('user'));
    
  // }

getAll(mois) {
  return axios
  .get(API_URL + 'posts', {
mois
  })
  .then(response => {
    if (response.data.accessToken) {
      return response.data
    }
  })
}

}

export default new PostDataService();