import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hook/useCart";
import useAdmin from "../../../hook/useAdmin";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navbaroption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="menu">menu</Link>
      </li>
      <li>
        <Link to="/order/salad">order now</Link>
      </li>
     {
      user && isAdmin &&  <li>
      <Link to="/dashboard/userAdmin">Dashbroad</Link>
    </li>
     }
     {
     user && !isAdmin &&  <li>
      <Link to="/dashboard/userHome">Dashbroad</Link>
    </li>
     }
      <li>
        <Link to="/dashboard/cart">
          <button>
            <FaShoppingCart></FaShoppingCart>
            <p className="btn btn-secondary">+{cart.length}</p>
          </button>
        </Link>
      </li>
      {/* <li><Link to="register">Register</Link></li> */}
      <div className="flex gap-2">
        {user ? (
          <div>
            <button onClick={handleLogout} className="btn btn-ghost">
              Log out
            </button>
          </div>
        ) : (
          <li>
            <Link to="login">Login</Link>
          </li>
        )}
      </div>
    </>
  );

  return (
    <div className="navbar sticky z-10 top-0 opacity-80 bg-slate-300 text-white  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbaroption}
          </ul>
        </div>
        <button className="btn btn-secondary normal-case text-xl">
          Bistro Boss
        </button>
      </div>
      <div className="navbar-center hidden md:block lg:flex">
        <ul className="menu menu-horizontal px-1">{navbaroption}</ul>
      </div>
    </div>
  );
};

export default Navbar;
