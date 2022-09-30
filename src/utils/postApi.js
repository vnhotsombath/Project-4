import tokenService from "./tokenService";

const BASE_URL = "/api/posts";

export function create(post) {
  return fetch(BASE_URL, {
    method: "POST",
    body: post,
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json(); // res.ok will be try if the http statusCode in the response is anything in the 200's
    return res.json().then(response => {
      console.log(response)
      throw new Error(response.err)
    })
  });
}


export function getAll() {
  return fetch(BASE_URL, {
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken() // This grabs thee JWT token out
      // local storage and send its in the header to the server
    }
  })
  .then((res) => {
    if(res.ok) return res.json();

    return res.json().then(response => {
      console.log(response)
      throw new Error(response.err)
    })
  });
}