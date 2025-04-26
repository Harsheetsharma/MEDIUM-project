import { Avatar } from "./BlogsCard";

export const Appbar = () => {
  return (
    <div className=" border-b flex justify-between px-10">
      <div>Medium</div>
      <div>
        <Avatar name={"harsheet"}></Avatar>
      </div>
    </div>
  );
};
