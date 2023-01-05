import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const register = async credential => {
  const { data } = await axios.post('user/signup', credential);
  return data;
};

const userLogin = async credential => {
  const { data } = await axios.post('/users/login', credential);
  return data;
};

export { register, userLogin };
