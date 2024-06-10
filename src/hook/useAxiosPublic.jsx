import axios from "axios";

  const axiosPublic = axios.create({
        // baseURL: 'http://localhost:5000'
        baseURL: 'https://bistro-boss-server-five-coral.vercel.app/'
  })
const useAxiosPublic = () => {
        return axiosPublic
}
export default useAxiosPublic;