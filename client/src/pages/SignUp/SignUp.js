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
          <section className="hero">
            <article className="title">
              <h3 className="title__header">Hi! Welcome to Chirp!</h3>
              <h2 className="title__subheader">Meet your new companion, grow together on the journey to self-fulfillment</h2>
              <h2 className="title__subheader">Ready to start your journey?</h2>
            </article>
          </section>
          <div className="hero__img">
            <GifEmbed />
          </div>
        </div>
        <div className="signup">
          <form className="signup__form">
            <h2 className="signup__page-header">New user? Create an account!</h2>
            <FormInput label="Username:" name="username" type="text" />
            <FormInput label="Email:" name="email" type="email" />
            <FormInput label="Password:" name="password" type="password" />
          <button>Get started!</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
