import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use((value) => {
  return value?.data;
});

export default axiosInstance;
