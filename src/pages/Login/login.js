import React from "react";
import { useState, useEffect } from "react";
import "./login.css";
import Navbar from "./Navforauth";

function Login() {
  const [formValid, setFormValid] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (form.username !== "" && form.password !== "") {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [form.username, form.password]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    sessionStorage.setItem("userDetails", JSON.stringify({ ...form }));
    window.location = "/";
  };

  return (
    <div>
      {" "}
      <Navbar />
      <div className="login">
        <div>
          <h1>WELCOME BACK!</h1>
          <h3>LOGIN HERE</h3>

          <form onSubmit={loginHandler}>
            <input
              type="text"
              required
              placeholder=" Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              required
              placeholder=" Password"
              name="password"
              onChange={handleChange}
            />

            <button className={formValid ? "login-active" : "login-submit"}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
