import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const Logout = (userName, setToken) => {
    
    let navigate = useNavigate();   

    /*
        Logging out a user can be happen automatically or happen after notifiying
        the user that they have been logged out.

        This example shows the latter.

    */
    useEffect(() => {
        if (userName){
            setToken(false);
            const timer = setTimeout(() => {
               return navigate("/");
            }, 4000);
            return () => clearTimeout(timer);
        } else {
            return navigate("/");
        }
     },[]);

    return (
        <>
        <h1>{userName} is now logged out</h1>
        </>
    );
}

export default Logout;