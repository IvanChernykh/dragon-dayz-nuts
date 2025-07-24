import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use((res) => {
  return res?.data;
});

export default axiosInstance;
