import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
   // baseURL: 'https://bistro-web.vercel.app'
   baseURL: 'http://localhost:5000'
});

const useAxios = () => {
   const { logOut } = useAuth();
   const navigate = useNavigate();

   axiosSecure.interceptors.request.use(function (config) {
      const token = localStorage.getItem('access-token');

      config.headers.authorization = `Bearer ${token}`;
      return config;
   }, function (error) {
      return Promise.reject(error);
   });

   axiosSecure.interceptors.response.use(function (response) {
      return response;
   }, async function (error) {
      const status = error.response.status;


      if (status === 401 || status === 403) {
         await logOut();
         navigate('/login');
      }
      return Promise.reject(error);
   });

   return axiosSecure;
};

export default useAxios;
