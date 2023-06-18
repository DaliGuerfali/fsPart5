import axios from 'axios';
const baseUrl = '/api/blogs';

let auth = null;

const setToken = (newToken) => {
  auth = `Bearer ${newToken}`;
}


const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}


const create = async (blog) => {
  const config = {
    headers: {
      Authorization: auth
    }
  }
  const response = await axios.post(baseUrl, blog, config);
  return response.data;
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, setToken }