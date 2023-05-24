import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState("");
  return (
    <div className="flex flex-col ml-12">
      <div className="pb-4" onClick={() => navigate("/home")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-7 h-7 border-2 border-black/40 rounded-2xl text-black/40"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="font-black text-2xl tracking-widest">Новая задача</div>
      <div className="flex gap-2">
        <button
          onClick={() => setSelectedDay("today")}
          className={`border border-black rounded-xl px-3 py-1 ${
            selectedDay === "today" && "bg-black text-white"
          }`}
        >
          Сегодня
        </button>
        <button className={`border border-black rounded-xl px-3 py-1`}>
          Завтра
        </button>
      </div>
      <div>Для тайтла</div>
      <button className="text-lg tracking-widest italic bg-black w-48 rounded-xl text-white py-1">
        Добавить
      </button>
    </div>
  );
};

export default CreateTask;
