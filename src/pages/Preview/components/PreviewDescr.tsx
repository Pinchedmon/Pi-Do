import React from "react";
import { useNavigate } from "react-router-dom";

const PreviewDescr = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute bottom-10 md:bottom-20 flex flex-col md:flex-row w-3/4 md:w-[600px] lg:w-[800px] justify-between">
      <div>
        <div className="">Pi - Do</div>
        <div className="text-gray-500 md:text-sm lg:text-lg">
          Позволит вам познакомиться с полным раскрытием вашего <br />
          потенциала. Мы используем разные техники его раскрытие.
        </div>
      </div>
      <div className="mt-6 justify-center flex">
        <button
          onClick={() => navigate("/home")}
          className="rounded-2xl bg-black text-white py-4 px-8 md:py-3 md:px-6 lg:py-4 lg:px-8 "
        >
          Попробовать
        </button>
      </div>
    </div>
  );
};

export default PreviewDescr;
