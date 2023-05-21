import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { user, refetch } = UserAuth();
  let [editName, setEditName] = useState(false);
  let [editNameText, setEditNameText] = useState("");
  const navigate = useNavigate();
  let handleEditName = async () => {
    await updateProfile(user, { displayName: editNameText });
    await refetch();
    setEditName(false);
  };

  return (
    <div className="h-full  bg-[#ededed]">
      <div className="p-8">
        <button className="bg-black/10 p-4 rounded-xl font-black tracking-widest text-xl text-gray-700/80">
          Профиль
        </button>
        <button
          onClick={() => navigate("/home")}
          className="float-right font-black bg-black/40 p-4 rounded-xl tracking-widest text-xl text-white/80"
        >
          Вернуться
        </button>
        <div className="bg-white/90 border-black/20 mt-6 rounded-xl px-5 pt-5 pb-3">
          <p className="text-black/90 text-xl tracking-widest ">
            Ваша почта: <span className="italic font-normal">{user.email}</span>
          </p>
          <p className="text-black/90 text-xl mt-4  tracking-widest ">
            Ваш ник:
            {editName ? (
              <>
                <input
                  className="p-2 ml-2 text-sm bg-black/10 rounded-xl "
                  value={editNameText}
                  onChange={(e) => {
                    setEditNameText(e.target.value);
                  }}
                />
              </>
            ) : (
              <span className="italic font-normal">
                {" "}
                {user.displayName
                  ? user.displayName
                  : user?.email?.match(/^([^@]*)@/)[1]}
              </span>
            )}
          </p>

          <button
            onClick={() => {
              setEditName(!editName);

              editName && handleEditName();
            }}
            className=" bg-green-900/10 p-3 rounded-xl mt-2 tracking-widest  text-green-900 font-bold -ml-1"
          >
            {editName ? "Готово" : "Сменить ник"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
