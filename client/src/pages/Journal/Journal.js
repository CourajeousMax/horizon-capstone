import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import JournalInput from '../../Components/JournalInput/JournalInput';

import "../SignUp/SignUp.scss"
import "../../pages/Journal/Journal.scss"
const Journal = () => {
    return (
      <div>
        <NavBar />
        <JournalInput />
      </div>
    );
};

export default Journal;