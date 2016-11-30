import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
import env from '../env';

polyfill();

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

function checkStatus(response) {
  if (response.status >= 400) {
    const error = {
      message: `Bad response from server at ${response.url} => ${response.status}, ${response.statusText}`,
      url: response.url,
      status: response.status,
      statusText: response.statusText
    };

    return new Promise((resolve, reject) => {
      response
        .json()
        .then((message) => {
          error.message = message.error;
          reject(error);
        }).catch(() => {
          reject(error);
        });
    });
  }

  return response.json();
}

export const httpGet = url =>
  fetch(`${env.BASE_URL}${url}`, {
    headers: defaultHeaders
  })
  .then(checkStatus);

export const httpPost = (url, data) => {
  const bodyData = JSON.stringify(data);
  return fetch(`${env.BASE_URL}${url}`, {
    method: 'POST',
    headers: defaultHeaders,
    body: bodyData
  })
  .then(checkStatus);
};

export const httpPut = (url, data) => {
  const bodyData = JSON.stringify(data);
  return fetch(`${env.BASE_URL}${url}`, {
    method: 'PUT',
    headers: defaultHeaders,
    body: bodyData
  })
  .then(checkStatus);
};

export const httpDelete = (url, data) => {
  const bodyData = JSON.stringify(data);
  return fetch(`${env.BASE_URL}${url}`, {
    method: 'DELETE',
    headers: defaultHeaders,
    body: bodyData
  })
  .then(checkStatus);
};
