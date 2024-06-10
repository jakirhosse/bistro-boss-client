import { Navigate, useLocation } from "react-router-dom";

import useAdmin from "../../hook/useAdmin";
import UseAuth from "../../hook/UseAuth";


const AddminRoute = ({children}) => {
        const {user,loading} = UseAuth()
      const  [isAdmin,isAdminLoading] = useAdmin();
      const location = useLocation()
      if(loading || isAdminLoading) {
              return <div className="mx-auto"><span className="loading loading-spinner loading-md mt-20"></span></div>
          }
          if (user && isAdmin) {
              return children
          }
      
          return  <Navigate to="/login" state={{ from: location }} replace />;
};

export default AddminRoute;