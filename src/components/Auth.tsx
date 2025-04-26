import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "../../../common/src/zod";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data.Token;
      localStorage.setItem("Token", jwt);
      navigate("/blogs");
    } catch (e) {
      //alert the user that request had failed
      alert("failed while signing up");
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-12">
            <div className="text-3xl font-extrabold">Create an account</div>
            <div className="text-slate-500">
              {type === "signin"
                ? "Don't have an account"
                : "Already have an account?"}
              <Link
                className="pl-2 underline"
                to={type === "signup" ? "/signin" : "/signup"}
              >
                {type === "signin" ? "signup" : "signin"}
              </Link>
            </div>
          </div>
          <div>
            {type === "signup" ? (
              <LabelledInputs
                label="Name"
                placeholder="Your name"
                onchange={(e) => {
                  setPostInputs((c) => ({
                    ...c, //this is just spread of operator to copy the values of Postinputs and update them
                    name: e.target.value,
                  }));
                }}
              ></LabelledInputs>
            ) : null}

            <LabelledInputs
              label="Username"
              placeholder="example@gmail.com"
              onchange={(e) => {
                setPostInputs((c) => ({
                  ...c, //this is just spread of operator to copy the values of Postinputs and update them
                  email: e.target.value,
                }));
              }}
            ></LabelledInputs>

            <LabelledInputs
              label="Password"
              placeholder="••••••"
              type="password"
              onchange={(e) => {
                setPostInputs((c) => ({
                  ...c, //this is just spread of operator to copy the values of Postinputs and update them
                  password: e.target.value,
                }));
              }}
            ></LabelledInputs>
          </div>
          <div>
            <button
              onClick={sendRequest}
              type="button"
              className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputsType {
  label: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInputs({
  label,
  placeholder,
  onchange,
  type,
}: LabelledInputsType) {
  return (
    <div>
      <div>
        <label className="block mb-2 text-md font-semibold text-gray-900 mt-4">
          {label}
        </label>
        <input
          onChange={onchange}
          type={type || "text"}
          id="first_name"
          className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-sky-600 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
