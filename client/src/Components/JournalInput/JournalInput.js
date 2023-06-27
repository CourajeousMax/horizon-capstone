import React from "react";
import AvatarContainer from "../../Components/AvatarContainer/AvatarContainer";
import SpotifyWidget from "../../Components/SpotifyWidget/SpotifyWidget";
import JournalApi from "../JournalApi/JournalApi";
import "../../Components/JournalInput/JournalInput.scss";
const JournalInput = () => {
  return (
    <>
      <section className="cover">
        <div className="journal">
          <div className="journal__container">
            <div className="journal__container-avatar">
              <AvatarContainer />
            </div>
            <JournalApi />
          <div className="journal__container-spotify">
            <SpotifyWidget />
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JournalInput;
