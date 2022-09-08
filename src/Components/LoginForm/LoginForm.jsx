import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";

function LoginForm(props) {
  // const [user, setUser] = useState();

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log({
      username: document.getElementsByTagName("input")[0].value,
      password: document.getElementsByTagName("input")[1].value,
    });
    login({
      username: document.getElementsByTagName("input")[0].value,
      password: document.getElementsByTagName("input")[1].value,
    })
      .then((token) => {
        localStorage.setItem("TOKEN", token);
        // toast.success("خوش آمدید");
        navigate("/admin");
      })
      .catch((error) => {
        localStorage.clear();
        toast.error("نام کاربری یا رمز عبور اشتباه است");
      });
  };
  // useEffect(() => {
  //   setUser();
  // }, [])

  return (
    <form className="flex flex-col w-50 p-6 gap-2 shadow-2xl">
      <label htmlFor="username">نام کاربری:</label>
      <input
        type="text"
        name="username"
        id="username"
        className="p-2 border-b-2"
        required
        // value={user.username} onChange={(e)=>setUser({...user, username: e.target.value})}
      />
      <label htmlFor="password">کلمه‌ی عبور:</label>
      <input
        type="password"
        name="password"
        id="password"
        className="p-2 border-b-2"
        required
        //  value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})}
      />
      <button
        type="submit"
        className="bg-gray-100 py-2 text-center"
        onClick={() => handleLogin()}
      >
        ورود
      </button>
    </form>
  );
}

export default LoginForm;
