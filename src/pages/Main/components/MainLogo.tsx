import React from "react";
import { useNavigate } from "react-router-dom";

const MainLogo = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/home")}
      className="flex justify-center items-center bg-[#c4c4c4]/20  pl-[60px] text-gray-600/70 pr-[60px] text-3xl tracking-wider font-black text-center"
    >
      Pi - Do
    </div>
  );
};

export default MainLogo;
