import Swal from "sweetalert2";
import UseAuth from "../../hook/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSeceure from "../../hook/useAxiosSeceure";
import useCart from "../../hook/useCart";

const FoodCard = ({ item }) => {
    const { price, image, name, recipe, _id } = item;
    const { user } = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();
      const axiosSeceure = useAxiosSeceure();
      const [,refetch] = useCart()
    const handleAddtoCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            };
            axiosSeceure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Added to cart",
                            text: "Your item has been added to the cart",
                            icon: "success",
                            confirmButtonColor: "#3085d6"
                        });
                        // refetch cart
                        refetch();
                    }
                })
                .catch(error => {
                    console.error('There was an error adding the item to the cart!', error);
                });
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please log in",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className="card card-compact bg-base-100 shadow-md">
            <figure><img className="w-full" src={image} alt="" /></figure>
            <p className="absolute right-0 bg-black p-1 px-3 rounded m-2 text-white font-semibold">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center mt-3">
                    <button onClick={handleAddtoCart} className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 text-orange-400">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
