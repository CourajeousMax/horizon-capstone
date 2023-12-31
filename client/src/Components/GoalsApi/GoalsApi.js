import { React, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { useGoals } from "../../pages/Home/use-goals";

const GoalsApi = () => {
  const { handleGoalClick, goals } = useGoals();

  return (
    <div className="goals__data-container">
      {goals &&
        goals
          .filter((goal) => !goal.goal_completed)
          .map((goal) => (
            <div className={`goals__data-card ${goal.goal_completed ? "completed" : ""}`} key={goal.id}>
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
              <button className={`goals__data-button ${goal.goal_completed ? "clicked" : ""}`} onClick={() => handleGoalClick(goal.id)}>
                {goal.goal_completed ? (
                  <>
                    <FontAwesomeIcon
                      key={goal.id}
                      icon={faSeedling}
                      className={`fa-sharp fa-solid fa-seedling ${goal.goal_completed ? "clicked" : ""}`}
                      style={{
                        color: "green",
                      }}
                    />
                  </>
                ) : (
                  <>
                    <p className="goals__data-button--text">Complete</p>
                    <FontAwesomeIcon
                      key={goal.id}
                      icon={faSeedling}
                      className={`fa-sharp fa-solid fa-seedling ${goal.goal_completed ? "clicked" : ""}`}
                      style={{
                        color: "black",
                      }}
                    />
                  </>
                )}
              </button>
            </div>
          ))}
      {goals.length > 0 && (
        <div className="goals__data-completed">
          <div className="goal__completed">
            <h2 className="goals__copy body-large">Goals Completed</h2>
          </div>
          {goals
            .filter((goal) => goal.goal_completed)
            .map((goal) => (
              <div className="goals__data-card--completed" key={goal.id}>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
                <h3>completed on: {new Date(goal.completion_date).toLocaleDateString()}</h3>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default GoalsApi;
