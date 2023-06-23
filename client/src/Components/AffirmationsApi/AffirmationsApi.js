import React, { useState, useEffect } from "react";

const AffirmationsApi = () => {
  const [affirmation, setAffirmation] = useState("");

  useEffect(() => {
    const fetchAffirmations = async () => {
      try {
        const response = await fetch(`http://localhost:8000/`);
        console.log(response)
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          const affirmationData = data.affirmation;
          setAffirmation(affirmationData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAffirmations();
  }, []);

  return (
    <div>
      <h3>Affirmation:</h3>
      <p>{affirmation}</p>
    </div>
  );
};

export default AffirmationsApi;
