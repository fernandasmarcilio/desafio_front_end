import axios from 'axios';
const token = '7s5txcu909kwc48wookgw8g00occokk';

const api = axios.create({
  baseURL: "https://coletum.com/api/graphql",
  params: {
    token
  }
});

export default api;