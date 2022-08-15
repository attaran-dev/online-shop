import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import MainLayout from "../../Layouts/MainLayout/MainLayout";

function LoginPage() {
  return (
    <MainLayout>
      <div className="flex justify-center items-center translate-y-1/3"> 
        <LoginForm />
      </div>
    </MainLayout>
  );
}

export default LoginPage;
