import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateTask from "../../../components/CreateTask";
import { useStore } from "../../../store/useStore";

const MainContent = () => {
  const todos = useStore((state: any) => state.todos);
  const navigate = useNavigate();
  return (
    <div className="">
      <Routes>
        <Route element={<CreateTask />} path="/create" />
        <Route
          element={
            <div className="flex justify-between">
              <div className="bg-black/10 p-3 rounded-r-3xl w-64 text-black/50 text-lg">
                Твои задачи: 0
              </div>

              <button
                onClick={() => navigate("/home/create")}
                className="bg-black/10 p-3 rounded-l-3xl w-36 text-black/50 text-lg"
              >
                Создать
              </button>
              {todos.map((todo: any) => (
                <>{todo.title}</>
              ))}
            </div>
          }
          path="/"
        />
      </Routes>
    </div>
  );
};

export default MainContent;
