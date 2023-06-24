import React from "react";
import Header from "../../Components/Header/Header";
import FormInput from "../../Components/FormInput/FormInput";
const Login = () => {
  return (
    <div>
      <Header />
      <section className="cover">
        <div className="hero__flex">
          <div className="hero__img">
          </div>
        </div>
        <div className="signup">
          <form className="signup__form">
            <h2 className="signup__page-header">Welcome Back!</h2>
            <FormInput label="Username:" name="username" type="text" />
            <FormInput label="Email:" name="email" type="email" />
            <FormInput label="Password:" name="password" type="password" />
            <button >
                Continue
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
