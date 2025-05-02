import { Appbar } from "./AppBar";
import { Blog } from "../hooks";
import { Avatar } from "./BlogsCard";
export const SingleBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full  mt-20 max-w-screen-2xl">
          <div className="grid-cols-8  col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-gray-400 pt-4">Posted on 2nd Oct 2025</div>
            <div className="text-gray-600">{blog.content}</div>
          </div>

          <div className="grid-cols-4 col-span-4">
            <div className="text-xl font-semibold pb-6 text-gray-600">
              Author
            </div>
            <div className="flex w-full">
              <div className="pr-2 pt-2 flex flex-col justify-center">
                <Avatar
                  size="big"
                  name={blog.author.name || "Anonymous"}
                ></Avatar>
              </div>
              <div>
                <div className="text-3xl font-bold">
                  "{blog.author.name || "Anonymous"}"
                </div>
                <div className="text-gray-500 pt-3">
                  Random catch phrase about the author's ability
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
