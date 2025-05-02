import { SingleBlog } from "../components/SingleBlog";
import { useSingleBlog } from "../hooks";
import { useParams } from "react-router-dom";

export function Blog() {
  const { id } = useParams();
  const { blog, loading } = useSingleBlog({ id: id || "" });
  if (loading) {
    return (
      <div className="flex items-center flex-col justify-center min-h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }
  return (
    <div>
      <SingleBlog blog={blog}></SingleBlog>
    </div>
  );
}
