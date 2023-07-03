import React from 'react';

const SpotifyApi = () => {
    return (
        <div>
            
        </div>
    );
};

export default SpotifyApi;
// const playlistId = "41GwSGHJcwMYRh3OEQBsmh";

// <iframe
//   title="Spotify Embed: Recommendation Playlist "
//   src={`https://open.spotify.com/embed/playlist/41GwSGHJcwMYRh3OEQBsmh?utm_source=generator&theme=0`}
//   width="100%"
//   height="100%"
//   style={{ minHeight: "360px" }}
//   frameBorder="0"
//   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//   loading="lazy"
// />;
// const token =
//   "BQCHJXIKRLd1cCUYcRos1gVmofJT_i5xRNXAiZ7mjuHhfdQ4ikfyG--z8ltyMVnJc8Dfe_MAkamtpDpn6aq3jo0XIpvznDiIl3dPafQjo80-cwbeDA5sWR-QGh7zR0YRWN0IVGlRPgoyMvCIkAxk9Q0Uo8mV-olp2kEZFnHrnp0Bl9Vw6S8CriD_yk9yGCsDl7IR82qIC9dcumkEnkb0ELLp7g8mlMwFT-9D2-gH-hXF6lTbfE4pYwPmkA77Cta6YfKk";
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body: JSON.stringify(body),
//   });
//   return await res.json();
// }

// async function getTopTracks() {
//   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
//   return (await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=5", "GET")).items;
// }

// const topTracks = await getTopTracks();
// console.log(topTracks?.map(({ name, artists }) => `${name} by ${artists.map((artist) => artist.name).join(", ")}`));
