import React from "react";
import AvatarContainer from "../../Components/AvatarContainer/AvatarContainer";
import SpotifyWidget from "../../Components/SpotifyWidget/SpotifyWidget";
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
            <div className="journal__container-spotify">
              <SpotifyWidget />
            </div>
            <div className="journal__container-data">
              <div className="journal__container-element">
                <div className="journal__container-title">
                  <h2 className="journal__title">What's on your mind?</h2>
                </div>
              </div>
              <div className="journal__reflection-container">
                <textarea rows={10} cols={35}></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="journal__box">
          <label className="journal__label"></label>
          <input placeholder="Jot something down" className="input__input" />
        </div> */}
    </>
  );
};

export default JournalInput;
