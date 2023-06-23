import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./Home.scss";
import "../SignUp/SignUp.scss";
import GifEmbed from "../../Components/GifEmbed/GifEmbed";
import WeatherApi from "../../Components/WeatherApi/WeatherApi";
import GoalsApi from "../../Components/GoalsApi/GoalsApi";
import AffirmationsApi from "../../Components/AffirmationsApi/AffirmationsApi";
const Home = () => {
  return (
    <>
      <NavBar />
      <section className="cover">
        <div className="home__flex">
          <div className="home__title-container">
            <h1 className="home__title page-header">Welcome h o m e, user</h1>
          </div>
          <section className="home">
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
                    <div className="home__data-card card__two">
                      <h3 className="home__number">
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                      </h3>
                    </div>
                    <div className="home__data-card card__three">
                      <h3 className="home__number">Energy pts?</h3>
                      <p className="home__copy body-small">
                        <i class="fa-sharp fa-solid fa-seedling"></i>
                        <i class="fa-sharp fa-solid fa-seedling"></i>
                        <i class="fa-sharp fa-solid fa-seedling"></i>
                        <i class="fa-sharp fa-solid fa-seedling"></i>
                        <i class="fa-sharp fa-solid fa-seedling"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="goals__data-container">
              <div className="goals__data-card">
                <h3 className="goals__number">Goals</h3>
                <GoalsApi />
                <p className="goals__copy body-small">prepopulated goals here</p>
              </div>
              <div className="goals__data-card">
                <p className="goals__copy body-small"></p>
              </div>
            </div>
            <div className="home__data-container">
              <div className="home__data-card">
                <h3 className="home__number">Today's date/Affirmations</h3>
                <AffirmationsApi />
              </div>
              <div className="home__data-card">
                <WeatherApi />
              </div>
              <div className="home__data-card">
                <h3 className="home__number home__two">How satisfied are you Today?</h3>
                <p className="home__copy body-small">
                  <i class="fa-solid fa-face-sad-cry"></i>
                  <i class="fa-solid fa-face-frown"></i>
                  <i class="fa-solid fa-face-meh"></i>
                  <i class="fa-sharp fa-solid fa-face-smile"></i>
                  <i class="fa-solid fa-face-laugh-beam"></i>
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
