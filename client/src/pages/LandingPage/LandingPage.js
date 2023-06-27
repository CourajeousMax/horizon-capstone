import { React, useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Blathers from "../../assets/images/blathers.png";
import FeatherPen from "../../assets/images/feather-pen.png";
import Sprout from "../../assets/icons/sprout.png";
import Bird from "../../assets/icons/bird.png"
import Egg from "../../assets/images/egg-drawn.gif";
import Grass from "../../assets/images/grasspng.png";
import Ribbon from "../../assets/images/ribbon.svg";
import "../LandingPage/LandingPage.scss";


const LandingPage = () => {
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 1050; // Adjust this value based on when you want the transition to be activated
      const timer = setTimeout(() => {
        setShowTitle(true);
      }, 600);
      clearTimeout(timer);

      if (scrollPosition > triggerPosition) {
        setShowTitle(false);
      } else {
        setShowTitle(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero__header-container">
            <h1 className="hero__header">Welcome!</h1>
          </div>
          <div className="hero__container">
            <img className="hero__img" src={Blathers} />
            <article className={`title ${showTitle ? "" : "enter-transition"}`}>
              <div className="title__container">
                <h2 className="title__subheader">
                  Struggling with forming healthy habits, self-love, and motivation? Chirp is here to help! Take care of your pet by taking care of
                  yourself!{" "}
                </h2>
              </div>
            </article>
          </div>
        </section>
        <section className="landing">
          <div className="landing__container">
            <article className="title__two">
              <img className={`title__egg-img ${showTitle ? "" : "enter-transition"} `} src={Egg} />
              <img className={`title__grass-img ${showTitle ? "" : "enter-transition"} `} src={Grass} />
              <div className="title__container-two">
                <h3 className="title__header-two">Ready..set..grow!</h3>
                <h2 className="title__subheader-two">Meet your new (soon to be) companion, grow together on the journey to self-fulfillment</h2>
                <h2 className="title__subheader-two"></h2>
              </div>
            </article>
          </div>
        </section>
        <section className="tree">
          <div className="tree__flex">
            <div className="tree__circle-container">
              <div className="tree__circle">
                <img className={`tree__circle-img circle-one ${showTitle ? "" : "enter-transition"} `} src={Bird} />
              </div>
            </div>
            <div className="tree__circle-container">
              <div className="tree__circle">
                <img className={`tree__circle-img circle-two ${showTitle ? "" : "enter-transition"} `} src={FeatherPen} />
              </div>
            </div>
            <div className="tree__circle-container">
              <div className="tree__circle">
                <img className={`tree__circle-img circle-three ${showTitle ? "" : "enter-transition"} `} src={Sprout} />
              </div>
            </div>
          </div>
        </section>
        <section className="objective__one objective">
          <div className="objective__flex">
            <div className="objective__container">
              <article className="objective__two">
                <div className="objective__container-two">
                  <h3 className="objective__header-two">The sky is the Limit</h3>
                  <h2 className="objective__subheader-two">
                    Complete quick self-care exercises to level up your pet and improve your mental health!{" "}
                  </h2>
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
      </main>
    </>
  );
};

export default LandingPage;
