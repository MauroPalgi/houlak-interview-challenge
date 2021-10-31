// @ts-nocheck
import React, { useEffect } from 'react';
import queryString, { ParsedQuery } from "query-string";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setStateValues, updateRefreshID } from "../features/spotifySlice";
// import useAuth from "./hooks/useAuth";


// COMPONENT INTERFACE
interface IHomeProps {
    location: {
        hash: IHashOBJ;
    }
}

interface IHashOBJ {
    access_token: string;
    expires_in: string;
    token_type: string
}


const Home = ({ location, history }: IHomeProps) => {
    const dispatch = useAppDispatch();    
    const hashParsed = queryString.parse(location.hash);    
    // clean query URL
    useEffect(() => {        
        // CLEAR URL QUERY 
        history.push("/home");
        console.log(hashParsed);
        
        if(hashParsed.expires_in){
            dispatch(setStateValues({ ...hashParsed }));
            console.log(parseInt(hashParsed.expires_in, 10));
            
            // SET REFRESH TIMEOUT
            setTimeout(() => {
                dispatch(updateRefreshID());
            }, parseInt(hashParsed.expires_in, 10));
        }
        
    }, []);



    return (
        <div className="home">
            <p>Hello Home!</p>
        </div>
    );
}

export default Home;