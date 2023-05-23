import React from "react";
import Particle from "../components/particles";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full bg-[#ededed]">
      <div className="absolute top-8 left-0 right-0 text-2xl font-medium text-center">
        Pi - Do
      </div>
      <div className="flex z-0 flex-col items-center justify-center h-screen  ">
        <div className="leading-normal text-3xl md:text-4xl lg:text-5xl font-black mb-12">
          Первое{" "}
          <span className="text-green-700 text-justify text-4xl md:text-5xl lg:text-7xl">
            To - Do{" "}
          </span>{" "}
          <br className="block md:hidden" />
          приложение. <br />
          Только 100%
          <br className="block md:hidden" /> продуктивности.
        </div>
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
      </div>
      <div className="z-10">
        <Particle />
      </div>
    </div>
  );
};
export default Home;
