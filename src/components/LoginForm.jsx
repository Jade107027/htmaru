// src/components/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const idToEmailMap = {
  admin: "admin@htmaru.com", // 아이디 → 이메일 변환
};

const LoginForm = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = idToEmailMap[userId];
    if (!email) {
      alert("등록되지 않은 아이디입니다.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("로그인 성공!");
      navigate("/admin");
    } catch (error) {
      console.error("로그인 실패:", error.message);
      alert("로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: 400, margin: "0 auto" }}>
      <div>
        <label>아이디</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
      </div>
      <button type="submit" style={{ padding: "10px 20px", width: "100%" }}>
        로그인
      </button>
    </form>
  );
};

export default LoginForm;