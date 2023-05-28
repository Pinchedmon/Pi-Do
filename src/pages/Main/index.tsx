import React from "react";

import MainLogo from "./components/MainLogo";
import MainNavbar from "./components/MainNavbar";
import MainContent from "./components/MainContent";

const Main = () => {
  return (
    <div className="h-screen bg-[#ededed] grid grid-cols-[max-content_1fr]  grid-rows-[100px]">
      <MainLogo />
      <MainNavbar />
      <div className="bg-[#c4c4c4]/20 flex pr-6 justify-center align-center"></div>
      <MainContent />
    </div>
  );
};

export default Main;
