import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:7700",
//   withCredentials: true,
// });

const axiosInstance = axios.create({
  baseURL: "https://notely-mui.onrender.com",
  withCredentials: true,
});

export default axiosInstance;
