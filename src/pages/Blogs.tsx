import { Appbar } from "../components/AppBar";
import { BlogCard } from "../components/BlogsCard";

export const Blogs = () => {
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center">
        <div className="max-w-xl">
          <BlogCard
            authorname="Harsheet sharma"
            title="Read thorough this amazing news ough this amazing news"
            content="random data here you can read it ough this amazing news ough this amazing news ough this amazing news"
            publishedDate="5th Oct 2025"
          ></BlogCard>
          <BlogCard
            authorname="Harsheet sharma"
            title="Read thorough this amazing news ough this amazing news"
            content="random data ough this amazing news ough this amazing newshere you can read it"
            publishedDate="5th Oct 2025"
          ></BlogCard>
          <BlogCard
            authorname="Harsheet sharma"
            title="Read thorough though this amazing news is amazing news"
            content="random data here you can rea ough this amazing news ough this amazing news d it"
            publishedDate="5th Oct 2025"
          ></BlogCard>
        </div>
      </div>
    </div>
  );
};
