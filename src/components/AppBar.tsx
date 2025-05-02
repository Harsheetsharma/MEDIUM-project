import { Link } from "react-router-dom";
import { Avatar } from "./BlogsCard";

export const Appbar = () => {
  return (
    <div className=" border-b flex justify-between px-10 py-4 sticky top-0 z-50 bg-white">
      <Link to={"/"}>
        <div className="flex flex-col justify-center text-xl font-semibold pt-3">
          Medium
        </div>
      </Link>
      <div>
        <Link to={"/publish"}>
          <Link to={"/signup"}>
            <button
              type="button"
              className="text-gray-900 border  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Sign up
            </button>
          </Link>
          <Link to={"/signin"}>
            <button
              type="button"
              className="text-gray-900 border  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Sign in
            </button>
          </Link>
          <button
            type="button"
            className=" mr-3 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            New
          </button>
        </Link>
        <Avatar size={"big"} name={"harsheet"}></Avatar>
      </div>
    </div>
  );
};
