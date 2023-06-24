import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import AvatarContainer from '../../Components/AvatarContainer/AvatarContainer';
import SpotifyWidget from '../../Components/SpotifyWidget/SpotifyWidget';
import "../SignUp/SignUp.scss"
import "../../pages/Journal/Journal.scss"
const Journal = () => {
    return (
      <div>
        <NavBar />
        <section className="cover">
            <AvatarContainer />
            <SpotifyWidget />
          </section>
      </div>
    );
};

export default Journal;