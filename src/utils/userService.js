import tokenService from "./tokenService";

const BASE_URL = "/api/users/";

// PROFILE PAGE
function getProfile(username) {
  return fetch(BASE_URL + username, {
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error(
      "Error from getProfile Request, check the server terminal!"
    );
  });
}

function signup(user) {
  return fetch(BASE_URL + "signup", {
    method: "POST",
    body: user,
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((response) => {
        throw new Error(response.err);
      });
    })
    .then(({ token }) => tokenService.setToken(token));
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((response) => {
        console.log(response);
        throw new Error(response.err);
      });
    })
    .then(({ token }) => tokenService.setToken(token));
}

const userService = {
  signup,
  logout,
  login,
  getUser,
  getProfile,
};

export default userService;
