import { Helmet } from "react-helmet-async";
import loginCoverImg from '../../assets/assets/others/authentication.png';
import loginImg from '../../assets/assets/others/authentication2.png';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hook/useAxiosPublic";
import SocialLogin from "../../componetes/SocialLogin/SocialLogin";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const userInfo = {
          name: data.name,
          email: data.email
        };
        axiosPublic.post('/user', userInfo)
          .then(res => {
            if (res.data.insertedId) {
              console.log('user added database');

              reset();
              Swal.fire({
                icon: 'success',
                title: 'Successfully registered your account',
                showConfirmButton: false,
                timer: 2000
              });
              navigate("/");
            }
          });
      });
  };

  return (
    <>
      <Helmet>
        <title>bistro-boss | Register</title>
      </Helmet>
      <div className="hero min-h-screen w-full italic" style={{ backgroundImage: `url(${loginCoverImg})` }}>
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left my-40">
            <img src={loginImg} alt="" />
          </div>
          <div className="card w-full max-w-sm -mt-32 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <h1 className='font-bold text-center text-2xl'>Register Now</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" {...register("name", { required: true })} name='name' placeholder="Enter your name" className="input input-bordered" />
                  {errors.name?.type === 'required' && <p className="text-red-600" role="alert">Name is required</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" {...register("email", { required: true })} placeholder="Enter your email" className="input input-bordered" />
                  {errors.email?.type === 'required' && <p className="text-red-600" role="alert">Email is required</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })} placeholder="Enter your password" className="input input-bordered" />
                  {errors.password?.type === 'required' && <p className="text-red-600" role="alert">Password is required</p>}
                  {errors.password?.type === 'minLength' && <p className="text-red-600" role="alert">Password must be at least 6 characters</p>}
                  {errors.password?.type === 'maxLength' && <p className="text-red-600" role="alert">Password must be less than 20 characters</p>}
                </div>
                <div className="form-control mt-3">
                  <input type="submit" className="btn btn-outline border-0 border-b-4 bg-white border-orange-400 text-orange-400" value="Register" />
                </div>
              </div>
            </form>
            <p className="text-center py-2 -mt-6">Already have an account? <small className="text-lg text-orange-400 underline hover:underline-offset-4"> <Link to={'/login'}>Login</Link></small></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
