import React from "react";
import Particle from "../components/particles";

const home = () => {
  return (
    <div className="h-full bg-[#ededed]">
      <div className="absolute top-8 left-0 right-0 text-2xl font-medium text-center">
        Pi - Do
      </div>
      <div className="flex z-0 flex-col items-center justify-center h-screen  ">
        <div className="leading-normal text-6xl font-black mb-12">
          Первое <span className="text-green-700 text-8xl">To - Do </span>{" "}
          приложение. <br />
          Только 100% продуктивности.
        </div>
        <div className="flex">
          <div className="mr-[100px]">
            <div className="">Pi - Do</div>
            <div className="text-gray-500">
              Позволит вам познакомиться с полным раскрытием вашего <br />
              потенциала. Мы используем разные техники его раскрытие.
            </div>
          </div>
          <div className="mt-4">
            <button className="rounded-2xl bg-black text-white py-4 px-8 text- ">
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
export default home;
