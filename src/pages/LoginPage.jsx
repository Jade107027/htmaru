import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center" }}>관리자 로그인</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;