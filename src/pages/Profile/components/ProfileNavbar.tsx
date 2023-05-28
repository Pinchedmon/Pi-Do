import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="bg-black/10 p-4 rounded-xl font-black tracking-widest text-xl text-gray-700/80">
        Профиль
      </button>
      <button
        onClick={() => navigate("/home")}
        className="float-right font-black bg-black/40 p-4 rounded-xl tracking-widest text-xl text-white/80"
      >
        Вернуться
      </button>
    </>
  );
};

export default ProfileNavbar;
