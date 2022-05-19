import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Login/Navforauth";
import "./signup.css";

function SignUp() {
  const [formValid, setFormValid] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    phonenumber: "",
  });

  useEffect(() => {
    if (
      form.name !== "" &&
      form.email !== "" &&
      form.username !== "" &&
      form.password !== "" &&
      form.phonenumber !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [form.name, form.email, form.username, form.password, form.phonenumber]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const SignupHandler = (e) => {
    e.preventDefault();
    sessionStorage.setItem("userDetails", JSON.stringify({ ...form }));
    window.location = "/login";
  };

  return (
    <div>
      {" "}
      <Navbar />
      <div className="signup">
        <div>
          <h1>SIGN UP</h1>

          <form onSubmit={SignupHandler}>
            <input
              type="text"
              required
              placeholder=" Name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              required
              placeholder=" Email"
              name="email"
              onChange={handleChange}
            />
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
            <input
              type="text"
              required
              placeholder=" Phonenumber"
              name="phonenumber"
              onChange={handleChange}
            />

            <button className={formValid ? "signup-active" : "signup-submit"}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
