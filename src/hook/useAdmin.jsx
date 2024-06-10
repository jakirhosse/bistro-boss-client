import { useQuery } from "react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSeceure";

const useAdmin = () => {
    const { user,loading } = UseAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin ,isPending:isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled:!loading,
        queryFn: async () => {
            if (!user?.email) {
                return false;
            }
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res?.data?.admin;
        }
    });

    return [isAdmin,isAdminLoading];
};

export default useAdmin;
