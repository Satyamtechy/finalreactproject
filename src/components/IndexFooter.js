import React from 'react';
import {NavLink} from "react-router-dom";

const IndexFooter = () => {
    return (
            <div class="footer">
            <div class="container">
                <div uk-grid>
                    <div class="uk-width-1-3@m">
                        <NavLink to="/home" activeclass="uk-logo">
                          
                            <i class="uil-graduation-hat"> </i>
                            Technocolabs.ai
                        </NavLink>
                        <p class="footer-description"> Launch your site in style with Courseplus, Create rich layouts A
                            unique and beautiful collection of UI elements that are all flexible and modular.</p>
                    </div>
                    <div class="uk-width-expand@s uk-width-1-2">
                        <div class="footer-links pl-lg-8">
                            <h5>Explore </h5>
                            <ul>
                                <li><NavLink to ="/course-card"> Courses </NavLink></li>
                                <li><NavLink to ="/course-path"> Track </NavLink></li>
                                <li><NavLink to ="/blog-card"> Blog </NavLink></li>
                                <li><NavLink to ="/Community"> Community </NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="uk-width-expand@s uk-width-1-2">
                        <div class="footer-links pl-lg-8">
                            <h5> Account </h5>
                            <ul>
                                <li><NavLink to ="/profile-1"> Profile </NavLink></li>
                                <li><NavLink to ="#"> Settings </NavLink></li>
                                <li><NavLink to ="#"> Projects </NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="uk-width-expand@s uk-width-1-2">
                        <div class="footer-links pl-lg-8">
                            <h5> Resources</h5>
                            <ul>
                                <li><NavLink to ="#"> Contact </NavLink></li>
                                <li><NavLink to ="/page-Privacy"> Privacy Policy </NavLink></li>
                                <li><NavLink to ="/page-term"> Terms of Use </NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="uk-grid-collapse" uk-grid>
                    <div class="uk-width-expand@s uk-first-column">
                        <p>© 2020 <strong>Technocolabas.ai</strong> All Rights Reserved. </p>
                    </div>
                    <div class="uk-width-auto@s">
                        <nav class="footer-nav-icon">
                            <ul>
                                <li><NavLink to ="#"><i class="icon-brand-facebook"></i></NavLink></li>
                                <li><NavLink to ="#"><i class="icon-brand-dribbble"></i></NavLink></li>
                                <li><NavLink to ="#"><i class="icon-brand-youtube"></i></NavLink></li>
                                <li><NavLink to ="#"><i class="icon-brand-twitter"></i></NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default IndexFooter
