import http from "./http-common";
//import ConfigService from "./config.service";

class AuthService {


  login(user, password) {
    return http
      .post(`/auth/login`, {
        user: user,
        password: password,
      })
      .then((response) => {
        if (response.data.authToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response;
      })
      .catch((e) => {
        console.log(e);
        return e.response;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
