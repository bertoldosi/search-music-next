import axios from "axios";

const api_key = process.env.REACT_APP_LAST_FM_API_KEY;

const api = axios.create({
  baseURL: "http://ws.audioscrobbler.com/2.0",
  params: {
    api_key,
  },
});

export default api;