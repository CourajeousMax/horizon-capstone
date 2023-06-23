import { React, useEffect, useState } from "react";

const GoalsApi = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/goals`);
        if (response.ok) {
          const goalData = await response.json();
          console.log(goalData);
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
  return (
    <div>
      {goals &&
        goals.map((goal) => (
          <div key={goal.id}>
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
            {/* <p>Completion Status: {goal.goal_completed ? "Completed" : "Not Completed"}</p>
            <p>Completion Date: {goal.completion_date}</p> */}
          </div>
        ))}
    </div>
  );
};

export default GoalsApi;
