import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://bistro-restaurant-rho.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;