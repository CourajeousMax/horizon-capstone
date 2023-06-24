import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const GoalsApi = ({ isButtonClicked, handleOnClick, seedlingColor }) => {
  const [goals, setGoals] = useState([]);
  const [completedGoals, setCompletedGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/goals`);
        if (response.ok) {
          const goalData = await response.json();
          setGoals(goalData);
        } else {
          console.log("Can't get goals", response.status);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchGoals();
  }, []);

  const handleGoalClick = (goalId) => {
    handleOnClick();
    const clickedGoal = goals.find((goal) => goal.id === goalId);
    if (clickedGoal) {
      setCompletedGoals((prevCompletedGoals) => [...prevCompletedGoals, clickedGoal]);
    }
  };
  const remainingGoals = goals.filter((goal) => !completedGoals.includes(goal));

  return (
    <div className="goals__data-container">
      {goals &&
        remainingGoals.map((goal) => (
          <div className={`goals__data-card ${completedGoals.includes(goal) ? "completed" : ""}`} key={goal.id}>
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
            <button className={`goals__data-button ${seedlingColor > 0 ? "clicked" : ""}`} onClick={() => handleGoalClick(goal.id)}>
              <p>Complete</p>
              {[...Array(goal.seedlingColor)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faSeedling}
                  className={`fa-sharp fa-solid fa-seedling ${seedlingColor > 0 ? "clicked" : ""}`}
                  style={{
                    color: seedlingColor > 0 ? "green" : "black",
                  }}
                />
              ))}
            </button>
          </div>
        ))}
      {completedGoals.length > 0 && (
        <div className="goals__data-completed">
          <div className="goal__completed">
            <p className="goals__copy body-small">Goals Completed</p>
          </div>
          {completedGoals.map((goal) => (
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
