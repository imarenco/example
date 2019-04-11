import fetch from 'axios';
const CancelToken = fetch.CancelToken;
const mapCancel = {};

let instance = null;


class Request {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  request(method, url, params = {}, body = null, headers = null, options = {}) {
    const reqParams = {
      method,
      responseType: 'json',
      cancelToken: new CancelToken((c) => {
        if (options.isCancelable) {
          typeof mapCancel[url] === 'function' && mapCancel[url]();
          mapCancel[url] = c;
        }
      }),
      headers: headers || {
        Accept: 'application/json',
      },
    };

    const parsedParams = Object.keys(params).map(p => `${p}=${params[p]}`).join('&');

    if (method !== 'get' && method !== 'head' && body !== null) {
      if (!reqParams.headers['Content-Type']) {
        reqParams.headers['Content-Type'] = 'application/json';
      }
      reqParams.data = body;
    }

    if (this.config && this.config.headers) {
      reqParams.headers = Object.assign({}, reqParams.headers, this.config.headers);
    }

    reqParams.url = parsedParams ? `${url}?${parsedParams}` : url;

    return fetch(reqParams);
  }

  get(url, query, headers = null, options = {}) {
    return this.request('get', url, query, {}, headers, options);
  }

  post(url, query, body = {}, headers = null, options = {}) {
    return this.request('post', url, query, body, headers, options);
  }

  put(url, query, body = {}, headers = null, options = {}) {
    return this.request('put', url, query, body, headers, options);
  }

  patch(url, query, body = {}, headers = null, options = {}) {
    return this.request('patch', url, query, body, headers, options);
  }

  del(url, query, headers = null, options = {}) {
    return this.request('delete', url, query, {}, headers, options);
  }

  uploadFile(method, url, formData, config = {}) {
    const headers = {};
    const configData = config;
    configData.headers = headers;
    return fetch[method](url, formData, configData);
  }

  setConfig(config) {
    this.config = config;
  }
}

export function onError(handleError) {
  fetch.interceptors.response.use((response) => response, (error) => handleError(error));
}


export default Request;