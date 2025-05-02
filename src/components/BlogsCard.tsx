import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

interface BlogCardProps {
  authorname: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({
  id,
  authorname,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 max-w-screen-lg cursor-pointer">
        <div className="flex">
          <Avatar size={"small"} name={authorname}></Avatar>
          <div className="font-semibol pl-2 text-xl flex justify-center flex-col">
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
    </Link>
  );
};

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "h-8 w-8" : "h-12 w-12"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`font-medium text-gray-600 dark:text-gray-300 ${
          size === "small" ? "text-sm" : "text-md"
        }`}
      >
        {name[0]}
      </span>
    </div>
  );
}
