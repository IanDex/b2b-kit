import BaseService from './BaseService'

const ApiService = {
  fetchData(param) {

    const token = window.localStorage.getItem('accessToken');

    const headers = param.headers ? {...param.headers} : {};

    headers.Authorization = `${token}`;

    console.log(param.url + ' -> [START]');

    return new Promise((resolve, reject) => {
      BaseService({...param, headers})
        .then(response => {
          console.log(param.url + ' -> [END]');
          resolve(response);
        })
        .catch(errors => {
          console.error('Error en la llamada a la API:', param.url, errors);
          resolve(errors)
        });
    });
  }
};

export {ApiService}
