import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Main = () => {
  const { user, logOut } = UserAuth();
  let navigate = useNavigate();
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="h-full bg-[#ededed] grid grid-cols-[max-content_1fr]  grid-rows-[100px]">
      <div
        onClick={() => navigate("/home")}
        className="flex justify-center items-center bg-[#c4c4c4]/20  pl-[60px] text-gray-600/70 pr-[60px] text-3xl tracking-wider font-black text-center"
      >
        Pi - Do
      </div>
      <div className="items-center flex  ">
        <div className="flex items-center ml-auto mr-6">
          {user ? (
            <>
              <button
                onClick={() => navigate("/profile")}
                className="font-bold rounded-md bg-[#c4c4c4]/20 mr-4 text-gray-500 py-3 px-6 tracking-widest"
              >
                {user.email}
              </button>
              <button
                onClick={logOut}
                className="font-bold rounded-md bg-[#c4c4c4]/20 mr-4 text-red-500/70 py-3 px-3 tracking-widest"
              >
                Выйти
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/signup")}
                className=" rounded-md bg-[#c4c4c4]/20 mr-4 text-gray-500 py-3 px-6 tracking-widest"
              >
                Зарегистрироваться
              </button>
              <button className=" rounded-md bg-[#c4c4c4]/20 mr-4 text-gray-500 py-3 px-6 tracking-widest">
                Войти
              </button>
            </>
          )}
          <button className=" rounded-md bg-[#c4c4c4]/20 text-gray-500 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-[#c4c4c4]/20 flex pr-6 justify-center align-center">
        <div className="flex mt-12 flex-col">
          <div className="flex mb-8 items-center">
            <div className="mr-4 text-black/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </div>
            <div className=" tracking-widest text-black/60 text-xl">To-dos</div>
          </div>
          <div className="flex mb-2 text-sm text-black/30">
            <div>Последние</div>
          </div>
          <div className="flex mb-2 text-sm">
            <div className="mr-4">cartinka</div>
            <div>To-dos</div>
          </div>
        </div>
      </div>
      <div className="mx-4  mb-4 border-2 border-black/10 p-2 rounded-xl">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
  );
};

export default Main;
