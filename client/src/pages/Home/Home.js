import React from "react";
import { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import AvatarContainer from "../../Components/AvatarContainer/AvatarContainer";
import WeatherApi from "../../Components/WeatherApi/WeatherApi";
import GoalsApi from "../../Components/GoalsApi/GoalsApi";
import AffirmationsApi from "../../Components/AffirmationsApi/AffirmationsApi";
import "./Home.scss";
import "../SignUp/SignUp.scss";

const Home = () => {
   const [isButtonClicked, setIsButtonClicked] = useState(0);
   const [seedlingColor, setSeedlingColor] = useState(0);

   const handleOnClick = () => {
     setIsButtonClicked((isButtonClicked) => isButtonClicked + 1);
     setSeedlingColor(seedlingColor + 1);
   };
  return (
    <>
      <NavBar />
      <section className="cover">
        <div className="home__flex">
          <div className="home__title-container">
            <h1 className="home__title page-header">Welcome h o m e, user</h1>
          </div>
          <section className="home">
            <AvatarContainer isButtonClicked={isButtonClicked}/>
            <div className="goals__data-container">
              <div className="goals__number-container">
                <h2 className="goals__number">Goals</h2>
              </div>
              <GoalsApi 
              isButtonClicked={isButtonClicked} 
              handleOnClick={handleOnClick}
              seedlingColor={seedlingColor} />
            </div>
            <div className="home__data-container">
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
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
