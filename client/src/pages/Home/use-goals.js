import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { goalsState } from "../../store/goals";

export const useGoals = () => {
  const [goals, setGoals] = useRecoilState(goalsState);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/goals`);
        if (response.ok) {
          const goalData = await response.json();
          console.table(goalData);
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
    console.log(goalId);
    const goalIdx = goals.findIndex((g) => g.id === goalId);
    const _goals = [...goals];
    _goals[goalIdx] = { ..._goals[goalIdx], goal_completed: 1 };
    setGoals([..._goals]);
  };

  return {
    handleGoalClick,
    goals,
  };
};
