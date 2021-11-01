// @ts-nocheck
import React, { useEffect, useState } from "react";
import queryString, { ParsedQuery } from "query-string";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setStateValues, updateRefreshID } from "../features/spotifySlice";
import { Button } from "@mui/material";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";
// import useAuth from "./hooks/useAuth";

// COMPONENT INTERFACE
interface IHomeProps {
  location?: {
    hash: IHashOBJ;
  };
}

interface IHashOBJ {
  access_token: string;
  expires_in: string;
  token_type: string;
}

const Home = ({ location, history }: IHomeProps) => {
  const dispatch = useAppDispatch();
  const [token, setToken] = useState({
    access_token: "",
    expires_in: "",
    token_type: "",
  });

  let spotifyApi;
  // clean query URL
  useEffect(() => {
    // CLEAR URL QUERY
    history.push("/home");

    if (location.hash) {
      const hashParsed = queryString.parse(location.hash);
      console.log(location);
      console.log(hashParsed);

      setToken({ ...hashParsed });
      dispatch(setStateValues(hashParsed));

      // SET REFRESH TIMEOUT
      setTimeout(() => {
        dispatch(updateRefreshID());
      }, parseInt(hashParsed.expires_in, 10));

      // SPOTIFY WEB API
      spotifyApi = new SpotifyWebApi({
        clientId: process.env.REACT_APP_CLIENT_ID,
        clientSecret: "41416c9281004f16a461beb0ead697b0",
      });
      console.log(hashParsed);

      spotifyApi.setAccessToken(hashParsed.access_token);

      //   spotifyApi
      //     .getMySavedAlbums({
      //       limit: 10,
      //       offset: 0,
      //     })
      //     .then(
      //       function (data) {
      //         // Output items
      //         console.log(data.body.items);
      //       },
      //       function (err) {
      //         console.log("Something went wrong!", err);
      //       }
      //     );
      //   spotifyApi.getUserPlaylists().then(
      //     function (data) {
      //       // Output items
      //       console.log(data.body.items);
      //     },
      //     function (err) {
      //       console.log("Something went wrong!", err);
      //     }
      //   );
      spotifyApi.getMySavedTracks().then(
        function (data) {
          // Output items
          console.log(data.body.items);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
      spotifyApi.getFollowedArtists().then(
        function (data) {
          // Output items
          console.log(data);

          console.log(data.body.artists.items);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
    }
  }, []);

  const handleClick = async () => {
    /*
      "https://api.spotify.com/v1/me/player/recently-played", {
          headers: {
            "Content-Type": "application/json",
            AUTHORIZATION: "Bearer " + Cookies.getItem("SPOTIFY_TOKEN"),
          },
        }
      */
    // const test = await axios.get(
    //   "https://api.spotify.com/v1/me/player/recently-played",
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       AUTHORIZATION: "Bearer " + token.access_token,
    //     },
    //   }
    // );
    // const testJSON = await test.json();
    // console.log(testJSON);
  };

  return (
    <div className="home">
      <p>Hello Home!</p>
      <Button onClick={handleClick}>TEST</Button>
    </div>
  );
};

export default Home;
