import React from "react";
import { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import AvatarContainer from "../../Components/AvatarContainer/AvatarContainer";
import WeatherApi from "../../Components/WeatherApi/WeatherApi";
import GoalsApi from "../../Components/GoalsApi/GoalsApi";
import AffirmationsApi from "../../Components/AffirmationsApi/AffirmationsApi";
import SpotifyWidget from "../../Components/SpotifyWidget/SpotifyWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.scss";
import "../SignUp/SignUp.scss";
import { useGoals } from "./use-goals";

const Home = () => {
  const { goals } = useGoals();
  return (
    <>
      <NavBar />
      <section className="cover">
        <div className="home__flex">
          <div className="home__title-container">
            <h1 className="home__title page-header">Welcome h o m e, user</h1>
          </div>
          <section className="home">
            <AvatarContainer />
            <div className="goals__data-container ">
              <div className="goals__number-container">
                <h2 className="goals__number">Goals</h2>
              </div>
              <GoalsApi />
            </div>
            <div className="home__data-container">
              <div className="home__data-card--container">
                <AffirmationsApi />
                <div className="home__data-card">
                  <WeatherApi />
                </div>
                <div className="home__data-card">
                  <div className="home__number">
                    <h3 className="home__number home__two">How satisfied are you Today?</h3>
                    <div className="fa-solid__container emote">
                      <i class="fa-solid fa-face-sad-cry"></i>
                      <i class="fa-solid fa-face-frown"></i>
                      <i class="fa-solid fa-face-meh"></i>
                      <i class="fa-sharp fa-solid fa-face-smile"></i>
                      <i class="fa-solid fa-face-laugh-beam"></i>
                    </div>
                  </div>
                </div>
              </div>
              <SpotifyWidget />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
