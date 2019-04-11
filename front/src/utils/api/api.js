import RequestManager from './request';

const request = new RequestManager();

const API = {
};

API.url = `${API_URL}`;


API.getBrands = function getBrands(name) {
  const queryParams = {
    limit: 15,
    page: 1,
  };

  if (name) { queryParams.name = name; } 
  return request.get(`${API.url}/brand`, queryParams);
};


API.getCategories = function getCategories(name) {
  const queryParams = {
    limit: 15,
    page: 1,
  };

  if (name) { queryParams.name = name; } 
  return request.get(`${API.url}/category`, queryParams);
};

API.createBrand = function createBrand(payload) {
  return request.post(`${API.url}/brand`, {}, payload);
};

API.createCategory = function createCategory(payload) {
  return request.post(`${API.url}/category`, {}, payload);
};

API.deleteBrand = function deleteBrand(id) {
  return request.del(`${API.url}/brand/${id}`);
};

API.deleteCategory = function deleteCategory(id) {
  return request.del(`${API.url}/category/${id}`);
};


API.editCategory = function editCategory(id, payload) {
  return request.put(`${API.url}/category/${id}`, {}, payload);
};


API.editBrand = function editBrand(id, payload) {
  return request.put(`${API.url}/brand/${id}`, {}, payload);
};


export default API;
