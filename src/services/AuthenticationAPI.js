import axios from 'axios';

export const getData = (action,payload,) => {
  const URL = `${process.env.REACT_APP_API_URl}`;  
    return axios.get(action)
    .then(response => response.data)
    .catch(function (error) {
      throw error;
    });
}; 

export const postData = (action,payload,) => {
  const URL = `${process.env.REACT_APP_API_URl}`;  
    return axios.post(action,payload)
    .then(response => response.data)
    .catch(function (error) {
      throw error;
    });
}; 