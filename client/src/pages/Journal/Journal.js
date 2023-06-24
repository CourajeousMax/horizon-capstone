import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import AvatarContainer from '../../Components/AvatarContainer/AvatarContainer';
import JournalInput from '../../Components/JournalInput/JournalInput';
import "../SignUp/SignUp.scss"
import "../../pages/Journal/Journal.scss"
const Journal = () => {
    return (
      <div>
        <NavBar />
        <section className="cover">
          <section className="home">
            <AvatarContainer />
            <JournalInput />
            <iframe className="journal__playlist"
              // style="border-radius:12px"
              src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </section>
        </section>
      </div>
    );
};

export default Journal;