import { useContext } from "react";
import UserContext from "../context/UserContext";

const LoginInVerif = () => {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <div className="flex items-center justify-center bg-blue-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Please Login
          </button>
        </div>
      </div>
    );

  return (
    <div className="flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          welcome <hr />
          User : {user.username} <hr />
        </button>
      </div>
    </div>
  );
};

export default LoginInVerif;
