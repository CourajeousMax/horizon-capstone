import { useState, useEffect } from "react";
import React from "react";

const PetsApi = () => {
  const [pets, setPets] = useState([]);
  const [petName, setPetName] = useState("");

  const handleInputChange = (event) => {
    setPetName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ petName }),
      });

      if (response.ok) {
        console.log("Pet name successfully updated");
           setPets([...pets, petName]);

      // Clear the input field after adding the pet name
      setPetName("");

      // Update the h3 element with the entered pet name
      document.querySelector(".home__number").textContent = petName;
      } else {
        console.log("Failed to change pet name");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/pets`);
        if (response.ok) {
          const petsData = await response.json();
          console.table(petsData);
          setPets(petsData);
        } else {
          console.log("Can't get pet", response.status);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPets();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={petName} onChange={handleInputChange} placeholder="Enter pet name" />
        <button type="submit">Add Pet Name</button>
      </form>
      <h3 className="home__number">{petName}</h3>
    </div>
  );
  
};
  export default PetsApi;
