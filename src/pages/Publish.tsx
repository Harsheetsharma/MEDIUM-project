import axios from "axios";
import { Appbar } from "../components/AppBar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      {/* <Appbar></Appbar> */}
      <div className="flex justify-center w-full mt-10">
        <div className="max-w-screen-lg w-full">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="w-full outline-none h-14 text-base font-normal bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-4 p-2.5"
            placeholder="Title"
          />
          <TextEditor
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog/createblog`,
                {
                  title,
                  content,
                },
                {
                  headers: {
                    Authorization: `${localStorage.getItem("Token")}`,
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            type="submit"
            className="mt-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <form>
      <div className="w-full mb-4 border rounded mt-4 bg-gray-100">
        <div className="flex items-center justify-between border-b">
          <div className=" py-2 bg-white rounded-b-lg w-full">
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <textarea
              onChange={onChange}
              id="editor"
              rows={8}
              className="appearance-none outline-none block w-full pl-4 text-normal text-gray-600 bg-white rounded-lg"
              placeholder="Write an article..."
              required
            />
          </div>
        </div>
      </div>
    </form>
  );
}
