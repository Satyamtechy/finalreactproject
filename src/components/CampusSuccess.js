import React from 'react';
import {NavLink} from "react-router-dom";

const CampusSuccess = () => {
    return (
        <div>
        <style>{`
            button a{
                color: aliceblue;
            }
            button a:hover{
                color: gainsboro;
            }
        `}
        </style>
        <br />
    <br />
    <br />
    <br /><br /><br /><br /><br /><br /><br />
    <div class="container">
        <div class="row">
            <div class="col-md-2">
            </div>
            <div class="col main">

                <h1>Your form has been submitted successfully.</h1>
            </div>
        </div>
    </div>
    <br />
    <div class="col-md-5">
    </div>
    <button class="btn-dark"> <NavLink to="/indexs">Return to home page </NavLink></button>
            
        </div>
    )
}

export default CampusSuccess
