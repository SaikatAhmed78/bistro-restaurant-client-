import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://bistro-web.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;