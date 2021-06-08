import React from 'react' ;
import { NavLink } from 'react-router-dom';
const Pageprivacy = () => {

return (
    <div class="page-content pt-sm-0">

    <div class="page-content-inner p-sm-0"> 


    <div uk-grid>
        <div class="uk-width-1-4@m uk-flex-last@m">

            <nav class="responsive-tab style-3"
                uk-sticky="top:100 ; offset:120; media:@m ;bottom:true; animation: uk-animation-slide-top">
                       <ul>
                    <li class="uk-active"><NavLink to="#"> Privacy </NavLink></li>
                    <li><NavLink to="#"> Careers</NavLink></li>
                    <li><NavLink to="/page-terms"> Terms &amp; Conditions</NavLink></li>
                    <li><NavLink to="/page-Privacy"> Privacy</NavLink></li>
                    <li><NavLink to="#"> Cookies</NavLink></li>
                    <li><NavLink to="#"> Code of Conduct</NavLink></li>
                </ul>
            </nav>

        </div>

        <div class="uk-width-expand@m m-4 mt-0">
            <div class="my-4">
                <h2 class="uk-text-bold">Privacy</h2>
                <hr class="m-0" />
            </div>
            <article class="uk-article">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h4 class="mt-4">Etiam blandit lacus</h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.</p>
                <h4 class="mt-4"> Maecenas sit amet</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                    id
                    est laborum.</p>
                <h4 class="mt-4"> Excepteur sint occaecat cupidatat </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                    id
                    est laborum.</p>
            </article>

        </div>


    </div>

</div>

</div>

        );
}



export default Pageprivacy;