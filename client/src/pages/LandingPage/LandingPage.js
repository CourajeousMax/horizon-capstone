import React from "react";
import Header from "../../Components/Header/Header";
import Blathers from "../../assets/images/blathers.png";
import Tree from "../../assets/images/tree.gif";
import Egg from "../../assets/images/egg-drawn.gif";
import "../LandingPage/LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero__container">
            <img className="hero__img" src={Blathers} />
            <article className="title">
              <div className="title__container">
                <h3 className="title__header">Welcome!</h3>
                <h2 className="title__subheader">
                  Struggling with forming healthy habits, self-love, and motivation? Chirp is here to help! Take care of your pet by taking care of
                  yourself!{" "}
                </h2>
                <h2 className="title__subheader">Complete quick self-care exercises to level up your pet and improve your mental health!</h2>
              </div>
            </article>
          </div>
        </section>
        <section className="landing">
          <div className="landing__container">
            <img className="landing__img landing__mobile" src={Tree} />
            <article className="title__two">
              <img className="title__egg-img" src={Egg} />
              <div className="title__container-two">
                <h3 className="title__header-two">Ready..set..grow!</h3>
                <h2 className="title__subheader-two">Meet your new (soon to be) companion, grow together on the journey to self-fulfillment</h2>
                <h2 className="title__subheader-two"></h2>
              </div>
            </article>
          </div>
          <section className="objective__one objective">
            <div className="objective__flex">
            <div className="objective__container">
              <article className="objective__two">
                <div className="objective__container-two">
                  <h3 className="objective__header-two">The sky is the Limit</h3>
                  <h2 className="objective__subheader-two">Complete quick self-care exercises to level up your pet and improve your mental health! </h2>
                  <h2 className="objective__subheader-two"></h2>
                </div>
              </article>
            </div>
            <div className="objective__container">
              <article className="objective__two">
                <div className="objective__container-two">
                  <h3 className="objective__header-two">Free your mind</h3>
                  <h2 className="objective__subheader-two">Jot down your thoughts and feelings</h2>
                  <h2 className="objective__subheader-two"></h2>
                </div>
              </article>
            </div>
            <div className="objective__container">
              <article className="objective__two">
                <div className="objective__container-two">
                  <h3 className="objective__header-two">Level Up!</h3>
                  <h2 className="objective__subheader-two">As you grow and improve your health, so does your companion!</h2>
                  <h2 className="objective__subheader-two"></h2>
                </div>
              </article>
            </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
