import { useQuery } from "react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {
    const axiosPublic = useAxiosPublic()
    const { data: menu = [], isLoading, refetch } = useQuery('menu', async () => {
        const res = await axiosPublic.get('/menu');
        return res.data;
      });
    
      return [menu, isLoading, refetch];
    };


export default useMenu;
