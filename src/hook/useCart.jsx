import { useQuery } from "react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSeceure"; // This should match the import from your hook

const useCart = () => {
    const axiosSecure = useAxiosSecure(); // Make sure this hook provides authenticated Axios instance
    const { user } = UseAuth(); // Assumed to provide user context with email and possibly auth token

    const fetchCart = async () => {
        if (!user?.email) {
            return [];
        }
        try {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        } catch (error) {
            console.error("Failed to fetch cart:", error); // Log the error for better debugging
            throw error; // Propagate the error to handle it in the UI if needed
        }
    };

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: fetchCart,
        enabled: !!user?.email, // ensures the query only runs if user.email is defined
    });

    return [cart, refetch];
};

export default useCart;
