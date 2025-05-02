import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogsCard";
import { useEffect, useState } from "react";

export const Appbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("Token");
    setIsLoggedIn(false);
    navigate("/signup");
  };

  return (
    <div className="border-b flex justify-between items-center px-10 py-4 sticky top-0 z-50 bg-white">
      <Link to={"/"}>
        <div className="text-xl font-semibold">Medium</div>
      </Link>

      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <Link to={"/publish"}>
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
              >
                New
              </button>
            </Link>
            <button
              onClick={handleLogout}
              type="button"
              className="text-gray-900 border hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={"/signup"}>
              <button
                type="button"
                className="text-gray-900 border hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>
            </Link>
            <Link to={"/signin"}>
              <button
                type="button"
                className="text-gray-900 border hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
            </Link>
          </>
        )}
        <Avatar size={"big"} name={"harsheet"} />
      </div>
    </div>
  );
};
