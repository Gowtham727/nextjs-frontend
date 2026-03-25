"use client";
import styles from "./login2.module.css";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
         if(res.ok){
           
    const data = await res.json();
    localStorage.setItem("username", data.name);
    console.log(data.role);
    if (data.role === "ADMIN") {
      window.location.href = "/admin-dashboard";
    } else{
      window.location.href = "/dashboard2";
    }
}

     else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.container}>   {/* ✅ FIX */}
      <div className={styles.card}>      {/* ✅ FIX */}
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>

        <p>
          New user? <a href="/register2">Register</a>
        </p>
      </div>
    </div>
  );
}