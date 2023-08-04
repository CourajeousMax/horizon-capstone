import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React from "react";

const PetsApi = () => {
  const [petName, setPetName] = useState("");
  const [editpetName, setEditPetName] = useState(false);

  const handleInputChange = (e) => {
    setPetName(e.target.value);
  };

  const handleEditClick = () => {
    setEditPetName(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setEditPetName(false);
    setPetName("");

    try {
      const response = await fetch("http://localhost:8000/api/pets/:id", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: petName }),
      });

      if (!response.ok) {
        throw new Error("Failed to update pet name");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/pets/:id")
      .then((response) => response.json())
      .then((data) => setPetName(data.name))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      {/* <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter pet name" value={petName} onChange={handleInputChange} disabled={editpetName} />
      </form>
      <div>
        <button type="submit">
          <FontAwesomeIcon icon={faPen} onClick={handleEditClick} />
        </button> */}
        <h3 className="home__number">{petName} mango </h3>
      {/* </div> */}
    </div>
  );
};
export default PetsApi;
