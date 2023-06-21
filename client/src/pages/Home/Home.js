import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./Home.scss"
import "../SignUp/SignUp.scss";
import GifEmbed from "../../Components/GifEmbed/GifEmbed";

const Home = () => {
  return (
    <>
      <NavBar />
      <section className="cover">
        <div className="home__flex">
          <section className="home">
            <div className="home__title-container">
              <h1 className="home__title page-header">Welcome h o m e, user</h1>
            </div>
            <div className="home__avatar-container">
                <div className="home__card-container">
              <div className="home__data-card card">
                <GifEmbed />
                    
                <h3 className="home__number">Mango</h3>
                <p className="home__copy body-small">prepopulated goals here</p>
                <div className="home__level-container">
              <div className="home__data-card card__one">
                <h3 className="home__number">Level </h3>
                <p className="home__copy body-small">all goals completed</p>
              </div>
              <div className="home__data-card card__one">
                <h3 className="home__number">2.4</h3>
                <p className="home__copy body-small">Average Risk Rating</p>
              </div>
              <div className="home__data-card card__one">
                <h3 className="home__number">151</h3>
                <p className="home__copy body-small">Websites Holding Your Data</p>
              </div>
                </div>
              </div>
            </div>
                </div>
            <div className="home__data-container">
              <div className="home__data-card">
                <h3 className="home__number">Goals</h3>
                <p className="home__copy body-small">prepopulated goals here</p>
              </div>
              <div className="home__data-card">
                <h3 className="home__number">Goals Completed</h3>
                <p className="home__copy body-small">all goals completed</p>
              </div>
            </div>
            <div className="home__data-container">
              <div className="home__data-card">
                <h3 className="home__number">Today's date/Affirmations</h3>
                <p className="home__copy body-small">prepopulated goals here</p>
              </div>
              <div className="home__data-card">
                <h3 className="home__number">Goals Completed</h3>
                <p className="home__copy body-small">all goals completed</p>
              </div>
              <div className="home__data-card">
                <h3 className="home__number">2.4</h3>
                <p className="home__copy body-small">Average Risk Rating</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
