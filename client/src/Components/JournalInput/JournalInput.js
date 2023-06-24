import React from "react";
import "../../Components/JournalInput/JournalInput"
const JournalInput = () => {
  return (
    <>
        <div className="journal__box">
          <label className="journal__label"></label>
          <input placeholder="Jot something down" className="input__input" />
        </div>
    </>
  );
};

export default JournalInput;
