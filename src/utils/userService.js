import tokenService from './tokenService';

const BASE_URL = '/api/users/';


// NOTE THIS IS configured to send of a multi/part form request
// aka photo 
function signup(user) {
  console.log(user, '<--USER SIGN UP');
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user) 
  })
  .then(res => {
    if (res.ok) return res.json();
    return res.json().then(response => {
      console.log(response)
      throw new Error(response.err)
    })
  })
  
  .then(({token}) => tokenService.setToken(token));
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    if (res.ok) return res.json();
    return res.json().then(response => {
      console.log(response)
      throw new Error(response.err)
    })
  })
  .then(({token}) => tokenService.setToken(token));
}


export default {
  signup, 
  logout,
  login,
  getUser
};
