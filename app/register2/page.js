"use client";

import { useState } from "react";
import styles from "./register2.module.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "STUDENT"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      alert("Registered successfully ✅");
      window.location.href = "/login";
    } else {
      alert("Registration failed ❌");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        <h2>Create Account</h2>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <select name="role" onChange={handleChange}>
          <option value="STUDENT">Student</option>
          <option value="ADMIN">Admin</option>
        </select>

        <button onClick={register}>Register</button>

        <p>
          Already have an account?{" "}
          <a href="/login2">Login</a>
        </p>

      </div>
    </div>
  );
}