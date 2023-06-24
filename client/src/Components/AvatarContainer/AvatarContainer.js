import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSeedling } from "@fortawesome/free-solid-svg-icons";
import GifEmbed from "../GifEmbed/GifEmbed";

const AvatarContainer = ({ isButtonClicked }) => {
  const renderIcons = (icon, count) => {
    const icons = [];

    for (let i = 0; i < count; i++) {
       icons.push(
        <FontAwesomeIcon
          key={i}
          icon={icon}
          className={`fa-sharp fa-solid fa-seedling ${isButtonClicked && i === count - 1 ? "clicked" : ""}`}
          style={{ color: isButtonClicked && i === count - 1 ? "green" : "black" }}
        />
      );
    }
    return icons;
  };

  const heartIcons = renderIcons(faHeart, 5);
  const seedlingIcons = renderIcons(faSeedling, 5);

   const seedlings = Array.from({ length: 5 }, (_, index) => ({
     clicked: index < seedlingIcons.length, // Initialize all seedlings as clicked
   }));

   const isAllSeedlingsClicked = seedlings.every((seedling) => seedling.clicked);

  return (
    <>
      <div className="home__avatar-container-journal">
        <div className="home__card-container">
          <div className="home__data-card card">
            <GifEmbed />
            <div className="home__level-container">
              <h3 className="home__number">Mango</h3>
              <div className="home__data-card card__one">
                <h3 className="home__number">Level 0</h3>
                <h3 className={`home__number ${isAllSeedlingsClicked ? "red-heart" : ""}`}>{heartIcons}</h3>
              </div>
              <div className="home__data-card card__three">
                <h3 className="home__number">Energy pts:</h3>
                {seedlingIcons.map((icon, index) => (
                  <p
                    key={index}
                    className={`fa-sharp fa-solid fa-seedling ${seedlings[index].clicked ? "clicked" : ""}`}
                    style={{ color: seedlings[index].clicked ? "green" : "black" }}
                  >
                    {icon}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvatarContainer;
