import React from 'react';

const SpotifyWidget = () => {
    return (
      <div className="spotify">
        <iframe
          className="spotify__playlist"
          // style="border-radius:12px"
          src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    );
};

export default SpotifyWidget;