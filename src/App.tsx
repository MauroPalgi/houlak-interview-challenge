import { Button } from "@mui/material";
import React from "react";
// import useAuth from "./hooks/useAuth";

// import { Link } from "react-router-dom";

const App = () => {
  // GET ENV VALUES CREATE AUTH URL
  const {
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_CLIENT_ID,
    REACT_APP_REDIRECT_URL,
  } = process.env;
  const spotifyURL = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-follow-read`;

  // AUTH HANDLER
  const handleClick = () => {
    window.location.assign(spotifyURL);
  };

  return (
    <div className="App">
      <p>Hello World!</p>
      <Button variant="outlined" onClick={handleClick}>
        {" "}
        login
      </Button>
    </div>
  );
};

export default App;
