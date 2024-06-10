import UseAuth from "../../../hook/UseAuth";

const Userhome = () => {
  const { user } = UseAuth();
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, welcome </span>
        {user?.displayName ? user?.displayName : 'Guest'}
      </h2>
    </div>
  );
};

export default Userhome;
