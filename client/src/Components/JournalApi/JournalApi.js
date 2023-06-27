import React, { useState } from "react";
import { useEffect } from "react";

const JournalApi = () => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/journals`);
        if (response.ok) {
          const journalData = await response.json();
          console.table(journalData);
          setJournals(journalData);
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
    <div className="journal__container-block">
      <div className="journal__container-element">
        <div className="journal__container-title">
          <h2 className="journal__title">What's on your mind? Write something down</h2>
        </div>
      </div>
      <div className="journal__container-data">
        {journals &&
          journals.slice(0, 6).map((journal) => (
            <div className="journal__reflection-block">
              <ul className="journal__reflection-text" key={journal.id}>
                <p className="journal__reflection-content">{journal.content}</p>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JournalApi;
