import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSeedling } from "@fortawesome/free-solid-svg-icons";
import GifEmbed from "../GifEmbed/GifEmbed";
import { goalsState } from "../../store/goals";
import  PetsApi  from "../../Components/PetsApi/PetsApi.js";
import "../../Components/AvatarContainer/AvatarContainer.scss"
const AvatarContainer = ({}) => {
  const [goals, setGoals] = useRecoilState(goalsState);
  const level = useMemo(() => {
    const goalsCount = goals.length;
    const count = goals.filter((goal) => goal.goal_completed === 1).length;
    return count > 0 ? Math.floor((count / goalsCount) * 100) : 0;
  }, [goals]);

  const currentLevel = Math.floor(level / 10) + 1;
  // const level = useMemo(() => {
  //   const goalsCount = goals.length;
  //   const count = goals.filter((goal) => goal.goal_completed === 1).length;
  //   return goalsCount === count ? 1 : 0;
  // }, [goals]);
  const isLevelOne = level !== 0 ;
  return (
    <>
      <div className="avatar__avatar-container-journal">
        {/* Render the container when level is 1 */}
        {isLevelOne && (
          <div className="level-container__one">
          <div className="level-container">
            <h2>Woohoo!! You've reached level {level}!</h2>
            <p className="level-container__text">Reflect on your thoughts:</p>
            <Link className="level-container__text" to="/journal"> How ya feeling? </Link>
          </div>
          </div>
        )}
        <div className="avatar__card-container">
          <div className="avatar__data-card card">
            <GifEmbed />
            <div className="avatar__level-container">
              <div className="avatar__number-container">
              <PetsApi />
              </div>
              {isLevelOne && <p>Baby Mango is proud of you!! Keep up the good work!</p>}
              <div className="avatar__data-card card__one">
                <h3 className="avatar__number">Level {level}</h3>
                <div className="avatar__hearts-container">
                  {goals.map((goal, index) => (
                    <FontAwesomeIcon
                      key={goal.id}
                      icon={faHeart}
                      className={`fa-sharp fa-solid fa-heart ${goal.goal_completed ? "clicked" : ""}`}
                      style={{
                        color: goal.goal_completed ? "red" : "black",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="avatar__data-card card__three">
                <h3 className="avatar__number">Energy Points:</h3>
                <div className="avatar__seedling-container">
                  {goals.map((goal, index) => (
                    <FontAwesomeIcon
                      key={goal.id}
                      icon={faSeedling}
                      className={`fa-sharp fa-solid fa-seedling ${goal.goal_completed ? "clicked" : ""}`}
                      style={{
                        color: goal.goal_completed ? "green" : "black",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvatarContainer;
