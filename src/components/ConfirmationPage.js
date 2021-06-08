import React from 'react';
import {NavLink} from "react-router-dom";

const ConfirmationPage = () => {
    return (
        <div>
            <div style={{backgroundColor:"aqua;"}}>

<h1> Succesfully Registered !!! </h1>

<h2> You have been succesfully registerd for demo classes</h2>
<NavLink to="/indexs"> Go back to your home </NavLink>
</div>
        </div>
    )
}

export default ConfirmationPage
