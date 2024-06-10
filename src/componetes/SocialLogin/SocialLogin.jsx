import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../hook/UseAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
        const { googleLogin} = UseAuth()
        const axiosPublic = useAxiosPublic();
        const navigate = useNavigate()
        const handleGoogleSignUp = async () => {
                try {
                    const result = await googleLogin();
                    console.log(result.user);
        
                    const userInfo = {
                        name: result.user?.displayName,
                        email: result.user?.email
                    };
        
                    const res = await axiosPublic.post('/user', userInfo);
                    console.log(res.data);
                    navigate('/');
                } catch (error) {
                    console.error("Error during Google sign-up:", error);
                }
            };
        
        return (
                <div className="-mt-5"> 
               <div className="divider"></div>
               <div className="text-center -mt-3">
                <button onClick={handleGoogleSignUp} className="mx-5"><FaGoogle></FaGoogle></button>
            </div>
        </div>
        );
};

export default SocialLogin;