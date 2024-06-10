import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginCoverImg from '../../assets/assets/others/authentication.png'
import loginImg from '../../assets/assets/others/authentication2.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../componetes/SocialLogin/SocialLogin";
const Login = () => {
        const {singIn} = useContext(AuthContext)
        const navigate = useNavigate();
       const location = useLocation();
      const from = location.state?.from?.pathname || "/";
        const handleLogin = (event) => {
                event.preventDefault()
                const form = event.target
                const email = form.email.value
                const password = form.password.value
              singIn(email, password)
                .then(() => {
                  Swal.fire({
                    icon: 'success',
                    title: 'Successful your account login',
                    showConfirmButton: false,
                    timer: 2000
                  })
                  navigate(from, { replace: true });
                })
                .catch((error) => {
                  const errorCode = error.massage;
                  console.log(errorCode)
                  Swal.fire({
                    icon: 'error',
                    title: `${errorCode}`,
                    text: 'Something went wrong!',
                  })
                });
            }
        return (
                <>
        <Helmet>
          <title>bistro-boss | login</title>
        </Helmet>
       <div className="hero min-h-screen w-full italic" style={{ backgroundImage: `url(${loginCoverImg})` }}>
  <div className="hero-content flex-col lg:flex-row">
 <div className="text-center lg:text-left my-40">
       <img src={loginImg} alt="" />
    </div>
        <div className="card  w-full max-w-sm -mt-32 shadow-xl" >
         <form onSubmit={handleLogin}>
         <div className="card-body">
                    <h1 className='font-bold text-center text-2xl'>Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
            </div>
            <div className="form-control mt-3">
              <input  type="submit" className="btn btn-outline border-0 border-b-4 bg-white border-orange-400 text-orange-400" value="Login" />
              </div>
      </div>                 
       </form>
              <p className="text-center py-2 -mt-6">Create a new account<small className="text-lg  text-orange-400 underline hover:underline-offset-4"> <Link to={'/register'}>Registration</Link></small></p>
              <SocialLogin></SocialLogin>
             
    </div>
  </div>
</div>
      </>
        );
};

export default Login;