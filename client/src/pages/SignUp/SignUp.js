import React from "react";
import GifEmbed from "../../Components/GifEmbed/GifEmbed";
import Header from "../../Components/Header/Header";
import FormInput from "../../Components/FormInput/FormInput";
import "./SignUp.scss";
const SignUp = () => {
  return (
    <>
      <Header />
      <section className="cover">
        <div className="hero__flex">
          <div className="hero__img">
          </div>
        </div>
        <div className="signup">
          <form className="signup__form">
            <h2 className="signup__page-header">New user? Create an account!</h2>
            <FormInput label="Username:" name="username" type="text" />
            <FormInput label="Email:" name="email" type="email" />
            <FormInput label="Password:" name="password" type="password" />
          <button>Register</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
