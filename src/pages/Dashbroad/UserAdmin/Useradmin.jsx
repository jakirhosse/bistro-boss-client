import { useQuery } from "react-query";
import UseAuth from "../../../hook/UseAuth";
import useAxiosSecure from "../../../hook/useAxiosSeceure";
import { FaDollarSign } from "react-icons/fa";
import { FaBookBible, FaUser } from "react-icons/fa6";

const Useradmin = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: stats,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi welcome</span>
        {user?.displayName ? user?.displayName : "black"}
      </h2>

      <div className="w-2/3 mt-6 flex gap-5 justify-start">
        <div className="stat ml-10 border border-red-500 bg-teal-400">
          <div className="stat-figure text-secondary ">
            <FaDollarSign />
          </div>
          <div className="stat-title">Carts</div>
          <div className="stat-value">{stats?.carts ?? "N/A"}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat border border-red-500 bg-teal-400">
          <div className="stat-figure text-secondary">
            <FaUser />
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.users ?? "N/A"}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat border border-red-500 bg-teal-400">
          <div className="stat-figure text-secondary">
            <FaBookBible />
          </div>
          <div className="stat-title">Books</div>
          <div className="stat-value">{stats?.menuItem ?? "N/A"}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Useradmin;
