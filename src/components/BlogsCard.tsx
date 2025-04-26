interface BlogCardProps {
  authorname: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  authorname,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="p-4 border-b border-slate-200 pb-4">
      <div className="flex">
        <Avatar name={authorname}></Avatar>
        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          {authorname}
        </div>
        <div className="pl-2 text-slate-500 flex justify-center flex-col">
          •
        </div>
        <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
          {" "}
          {publishedDate}
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">{title}</div>
      <div className="text-sm font-thin">{content.slice(0, 100) + "..."}</div>
      <div className="w-full text-slate-400 text-xs pt-4">{`${Math.ceil(
        content.length / 100
      )} Minute(s) read`}</div>
    </div>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
