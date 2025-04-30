import { Appbar } from "../components/AppBar";
import { BlogCard } from "../components/BlogsCard";
import { useBlog } from "../hooks";

export const Blogs = () => {
  const { blogs, loading } = useBlog();
  if (loading) {
    return (
      <div className="flex items-center flex-col justify-center w-screen h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              authorname={blog.author.name || "anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="5th Oct 2025"
              id={blog.id}
            ></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};
