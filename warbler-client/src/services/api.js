import axios from "axios";

export function setTokenHeader(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Autorization'];
  }
}

/**
 * A wrapper around axios API call that formats errors, etc
 * @param {String} method the HTTP verb you want to use
 * @param {String} path the route path / endpoint
 * @param {Object} data (optional) data in JSON form for POST requests
 */
export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err.response.data.error);
      });
  });
}
