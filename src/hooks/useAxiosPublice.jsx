import axios from "axios";

const axiosPublice = axios.create({
  baseURL: "https://dalmart-server-site.vercel.app",
});

const useAxiosPublice = () => {
  return axiosPublice;
};

export default useAxiosPublice;
