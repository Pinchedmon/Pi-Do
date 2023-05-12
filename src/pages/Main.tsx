import React from "react";

const main = () => {
  return (
    <div className="h-full bg-[#ededed] grid grid-cols-[max-content_1fr]  grid-rows-[100px]">
      <div className="border-b flex justify-center items-center bg-[#c4c4c4]/20 border-black/10 pl-[100px] text-gray-600/70 pr-[100px] text-3xl tracking-wider font-black text-center">
        Pi - Do
      </div>
      <div className="border-b items-center flex border-l border-black/10">
        <div className="flex items-center ml-auto mr-6">
          <button className="border-2 rounded-md bg-[#c4c4c4]/20 mr-4 border-[#c4c4c4]/40 text-gray-500 py-3 px-6 tracking-widest">
            Аккаунт
          </button>
          <button className="border-2 rounded-md bg-[#c4c4c4]/20 border-[#c4c4c4]/40 text-gray-500 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
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
      <div className="bg-[#c4c4c4]/20 flex pr-12 justify-center align-center">
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
      <div className="border-l border-black/10"></div>
    </div>
  );
};

export default main;
