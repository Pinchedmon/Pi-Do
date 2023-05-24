import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import PreviewLogo from "../components/PreviewLogo";

const Login = () => {
  let navigate = useNavigate();
  const { logIn } = UserAuth();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex  flex-col md:flex-row h-full bg-[#ededed]">
        <PreviewLogo />
        <div className=" basis-2/3 w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold text-black/60 tracking-widest ">
                Вход
              </h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="my-2 border-2 rounded-md bg-[#c4c4c4]/20  border-[#c4c4c4]/40 text-gray-500 py-3 px-6 tracking-widest"
                  type="email"
                  placeholder="Почта"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="my-2 border-2 rounded-md bg-[#c4c4c4]/20  border-[#c4c4c4]/40 text-gray-500 py-3 px-6 tracking-widest"
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="my-2 border-2 rounded-md bg-black/40 border-[#c4c4c4]/40 text-gray-100 py-3 px-6 tracking-widest">
                  Войти
                </button>
                <p className="py-2">
                  <span
                    className="text-gray-500 tracking-widest"
                    onClick={() => navigate("/signup")}
                  >
                    Зарегистрироваться
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
