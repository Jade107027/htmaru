import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (res.status === 200) {
        alert("로그인 성공!");
        navigate("/admin");
      }
    } catch (err) {
      alert("로그인 실패: 이메일 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: 400, margin: "0 auto" }}>
      <div>
        <label>이메일</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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