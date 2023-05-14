import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import { UserAuth } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const { user, signUp } = UserAuth();
  let navigate = useNavigate();
  let [progress, setProgress] = useState(0);
  let [step, setStep] = useState(1);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [dbPassword, setDbPassword] = useState("");
  let [name, setName] = useState("");
  let [error, setError] = useState("");
  useEffect(() => {
    setProgress((step / 3) * 100);
  }, [step]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      await updateProfile(user, { displayName: name });
      navigate("/");
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    }
  };
  const handleContinue = async (e: any) => {
    console.log(email);
    switch (step) {
      case 3: {
        handleSubmit(e);
        navigate("/");
        break;
      }
      case 2: {
        if (password === dbPassword) {
          setStep(step + 1);
        } else {
          setError("Разные пароли");
        }
        break;
      }
      case 1: {
        setStep(step + 1);
        break;
      }
      // default: {
      //   setStep(step + 1);
      // }
    }
  };
  return (
    <div className="h-full bg-[#ededed]">
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto text-white">
          <div className="max-w-[320px] mx-auto py-16">
            {step === 1 && (
              <h1 className="text-3xl font-bold text-black/60 tracking-widest">
                Регистрация
              </h1>
            )}

            <div className="w-full flex flex-col py-4">
              <div className="text-black/40 tracking-widest">
                Шаг {step} из 3
              </div>
              <ProgressBar
                completed={progress}
                isLabelVisible={false}
                bgColor="#94b591"
              />
              {step === 1 && (
                <>
                  <div className="text-black/60 mt-4 font-bold text-lg">
                    Введите вашу почту
                  </div>
                  <input
                    className="my-2 border-2 rounded-md bg-[#c4c4c4]/20  border-[#c4c4c4]/40 text-gray-500 py-3 px-6 tracking-widest"
                    type="email"
                    placeholder="Почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </>
              )}
              {step === 2 && (
                <>
                  <div className="text-black/60 mt-4 font-bold text-lg">
                    Придумайте пароль
                  </div>
                  <div className="text-red-500/70 mt-4 ">{error}</div>
                  <input
                    className="my-2 border-2 rounded-md bg-[#c4c4c4]/20  border-[#c4c4c4]/40 text-gray-500 py-3 px-6 tracking-widest"
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="my-2 border-2 rounded-md bg-[#c4c4c4]/20  border-[#c4c4c4]/40 text-gray-500 py-3 px-6 tracking-widest"
                    type="password"
                    placeholder="Повторный пароль"
                    value={dbPassword}
                    onChange={(e) => setDbPassword(e.target.value)}
                  />
                </>
              )}
              {step === 3 && (
                <>
                  <div className="text-black/60 mt-4 font-bold text-lg">
                    Как вас будут звать?
                  </div>
                  <input
                    className="my-2 border-2 rounded-md bg-[#c4c4c4]/20  border-[#c4c4c4]/40 text-gray-500 py-3 px-6 tracking-widest"
                    type="password"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </>
              )}
              <button
                onClick={(e) => handleContinue(e)}
                className="my-2 border-2 rounded-md bg-black/40  border-[#c4c4c4]/40 text-gray-100 py-3 px-6 tracking-widest"
              >
                Продолжить
              </button>
              <p className="py-2">
                <span
                  className="text-gray-500 tracking-widest underline"
                  onClick={() => navigate("/login")}
                >
                  У меня есть аккаунт
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
