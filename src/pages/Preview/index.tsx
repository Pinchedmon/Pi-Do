import React from "react";
import PreviewLogo from "./components/PreviewLogo";
import PreviewTitle from "./components/PreviewTitle";
import PreviewDescr from "./components/PreviewDescr";
import Particle from "../../components/Particles";

const Home = () => {
  return (
    <div className="h-full bg-[#ededed]">
      <PreviewLogo />
      <div className="flex z-0 flex-col items-center justify-center h-screen  ">
        <PreviewTitle />
        <PreviewDescr />
      </div>
      <div className="z-10">
        <Particle />
      </div>
    </div>
  );
};
export default Home;
