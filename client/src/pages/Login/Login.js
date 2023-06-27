import React from "react";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormInput from "../../Components/FormInput/FormInput";
const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      });

      sessionStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      setError(error.response);
    }
  };

  return (
    <div>
      <Header />
      <section className="cover">
        <div className="hero__flex">
          <div className="hero__img"></div>
        </div>
        <div className="signup">
          <form onSubmit={handleSubmit} className="signup__form">
            <h2 className="signup__page-header">Welcome Back!</h2>
            <FormInput label="Username:" name="username" type="text" />
            <FormInput label="Email:" name="email" type="email" />
            <FormInput label="Password:" name="password" type="password" />
            <div className="signup__container">
              <button className="signup__form-button">
                <p className="signup__form-button--text"> Continue</p>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
