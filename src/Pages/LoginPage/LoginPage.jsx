import React from "react";
import { useNavigate, useSearchParams, Navigate } from "react-router-dom";
import { login } from "../../api";
import LoginForm from "../../Components/LoginForm/LoginForm";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import toast from "react-hot-toast";
import axios from "axios";

function LoginPage() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  
  // if(username){
  //   setTimeout(()=>{
  //     toast.success("خوش آمدید");
  //   }, 2000)
  // }

  // })
  // .then(()=>{
  //          localStorage.setItem('TOKEN', res.data.token);
  //       navigate('/admin/products');
  //
  // })

  // })

  // .catch((error)=>{

  // })

  // return resData;

  return (
    <>
      {!username && (
        <MainLayout>
        <div className="flex justify-center items-center translate-y-1/3 mb-40">
          <LoginForm />
        </div>
        </MainLayout>
      )}
      {
        username &&
        
        <Navigate to="/admin" />
      }
    </>
  );
}

export default LoginPage;
