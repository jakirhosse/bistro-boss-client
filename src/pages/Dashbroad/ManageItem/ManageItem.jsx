import { FaUserTie } from "react-icons/fa";

import Swal from "sweetalert2";
import SecctionTitle from "../../../componetes/SecctionTitle/SecctionTitle";
import useMenu from "../../../hook/UseMenu";
import useAxiosSecure from "../../../hook/useAxiosSeceure";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menu, ,refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleUserDelete = (item) => {
    Swal.fire({
      title: "deleted successfully",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/menu/${item._id}`);
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        } catch (error) {
          console.error("Failed to delete item:", error);
        }
      }
    });
  };

//   const handleUserUpdate = (item) => {
//     // Update logic here
//   };

  return (
    <div>
     <SecctionTitle heading={"What's Up"} setHeading={"Manage Item"}></SecctionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full ml-20">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => handleUserDelete(item)}
                    className="btn btn-md hover:bg-orange-400 text-white bg-red-500"
                  >
                    <FaUserTie /> Delete
                  </button>
                </td>
                <td>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                  <button className="btn btn-md hover:bg-orange-400 text-whitbg-red-500"
                  >
                    <FaUserTie /> Update
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
