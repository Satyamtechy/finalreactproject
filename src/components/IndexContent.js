import React from 'react';
import {NavLink} from "react-router-dom";

const IndexContent = () => {
    return (
             <div class="page-content">

<div class="home-hero" data-src="assets/images/home-hero.png" uk-img>
    <div class="uk-width-1-1">
        <div class="page-content-inner uk-position-z-index">
            <h1>Learn HTML , CSS , iphone <br /> Apps & More</h1>
            <h4 class="my-lg-4"> Learn how to build websites & apps <br /> write a code or start a business
            </h4>
            <NavLink to ="#"  activeclass="btn btn-default">Free trailer </NavLink>
            <br />
            <NavLink to ="/demo-registeration" activeclass="btn btn-default">Demo Registration</NavLink>
        </div>
    </div>
</div>



<div class="section">
    <div class="page-content-inner">

        <div class="section-small text-md-left text-center">
            <div class="uk-child-width-1-2@m uk-gird-large uk-flex-middle" uk-grid>
                <div>
                    <img src="assets/images/feature.png" alt="" />
                </div>
                <div>
                    <h2>Learn to code anytime <br /> and everywhere </h2>
                        <p> Get started with just your name and your email adress . It’s as simple <br /> as
                            that
                            -- no payments or credit card information required. </p>
                        <NavLink to ="#"  activeclass="btn btn-soft-light"> Get started </NavLink>
                </div>
            </div>
        </div>

    </div>
</div>

<div class="section-small delimiter-top">

    <div class="container-small">

        <div class="text-center mb-5">
            <h3> Check out our newest </h3>
            <h5> With our growing catalog of over 30 Nanodegree programs from beginner to advanced</h5>
        </div>
        <div class="course-grid-slider mt-lg-5" uk-slider="finite: true">
            <div class="uk-slider-container pb-3">
                <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid">
                    <li>
                        <NavLink to="/course-intro">
                            <div class="course-card">
                                <div class="course-card-thumbnail ">
                                    <img src="../assets/images/course/2.png" alt=""/>
                                    <span class="play-button-trigger"></span>
                                </div>
                                <div class="course-card-body">
                                    <div class="course-card-info">
                                        <div>
                                            <span class="catagroy">Angular</span>
                                        </div>
                                        <div>
                                            <i class="icon-feather-bookmark icon-small"></i>
                                        </div>
                                    </div>
                                    <h4>Learn Angular Fundamentals </h4>
                                    <p> Learn how to build and launch React web applications using .. </p>
                                    <div class="course-card-footer">
                                        <h5> <i class="icon-feather-film"></i> 12 Lectures </h5>
                                        <h5> <i class="icon-feather-clock"></i> 64 Hours </h5>
                                    </div>
                                </div>

                            </div>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/course-intro1">
                            <div class="course-card">
                                <div class="course-card-thumbnail ">
                                    <img src="assets/images/course/3.png" alt=""/>
                                    <span class="play-button-trigger"></span>
                                </div>
                                <div class="course-card-body">
                                    <div class="course-card-info">
                                        <div>
                                            <span class="catagroy">JavaScript</span>
                                        </div>
                                        <div>
                                            <i class="icon-feather-bookmark icon-small"></i>
                                        </div>
                                    </div>
                                    <h4>The Complete JavaScript </h4>
                                    <p> JavaScript is how you build interactivity on the web page... </p>
                                    <div class="course-card-footer">
                                        <h5> <i class="icon-feather-film"></i> 14 Lectures </h5>
                                        <h5> <i class="icon-feather-clock"></i> 55 Hours </h5>
                                    </div>
                                </div>

                            </div>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/course-intro2">
                            <div class="course-card">
                                <div class="course-card-thumbnail ">
                                    <img src="assets/images/course/1.png" />
                                    <span class="play-button-trigger"></span>
                                </div>
                                <div class="course-card-body">
                                    <div class="course-card-info">
                                        <div>
                                            <span class="catagroy">HTML</span>
                                        </div>
                                        <div>
                                            <i class="icon-feather-bookmark icon-small"></i>
                                        </div>
                                    </div>

                                    <h4>Ultimate Web Developer Course </h4>
                                    <p> HTML is the building blocks of the web. It gives pages structure ..
                                    </p>

                                    <div class="course-card-footer">
                                        <h5> <i class="icon-feather-film"></i> 33 Lectures </h5>
                                        <h5> <i class="icon-feather-clock"></i> 26 Hours </h5>
                                    </div>
                                </div>

                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/course-intro3">
                            <div class="course-card">
                                <div class="course-card-thumbnail ">
                                    <img src="assets/images/course/5.png" alt=""/>
                                    <span class="play-button-trigger"></span>
                                </div>
                                <div class="course-card-body">
                                    <div class="course-card-info">
                                        <div>
                                            <span class="catagroy">HTML</span>
                                        </div>
                                        <div>
                                            <i class="icon-feather-bookmark icon-small"></i>
                                        </div>
                                    </div>

                                    <h4>Ultimate Web Developer Course </h4>
                                    <p> HTML is the building blocks of the web. It gives pages structure ..
                                    </p>

                                    <div class="course-card-footer">
                                        <h5> <i class="icon-feather-film"></i> 34 Lectures </h5>
                                        <h5> <i class="icon-feather-clock"></i> 54 Hours </h5>
                                    </div>
                                </div>

                            </div>
                        </NavLink>
                    </li>
                </ul>


                <NavLink to = "#" activeclass="uk-position-center-left uk-position-small uk-hidden-hover slidenav-prev" uk-slider-item="previous"></NavLink>
                <NavLink to = "#" activeclass="uk-position-center-right uk-position-small uk-hidden-hover slidenav-next" uk-slider-item="next"></NavLink>

            </div>
        </div>

        <div class="text-center">
            <NavLink to ="#"  activeclass="btn btn-soft-light btn-small btn-circle"> View More Courses</NavLink>
        </div>
    </div>
</div>

<div class="section text-center">
    <div class="page-content-inner">

        <h2 class="mb-4"> We've got the technical stuff covered. </h2>
        <img src="assets/images/feature-2.png" alt="" class="my-lg-5" />

    </div>
</div>

<div style={{'text-align': 'center'}}>
    <h2>Register for our Campus Ambassador Program</h2>
    <button class="btn-dark">
         <NavLink to="/campus">Click here</NavLink></button>
</div>

<div class="section bg-white">
    <div class="container-small">
        <h2 class="text-center my-lg-6"> Try Courseplus free for 14 days </h2>
        <form class="uk-grid-small d-flex align-items-end" uk-grid>
            <div class="uk-width-1-3@s">
                <div class="uk-form-label">Email </div>
                <input class="uk-input" type="text" placeholder="Enter your email address" />
            </div>
            <div class="uk-width-1-3@s">
                <div class="uk-form-label">Password </div>
                <input class="uk-input" type="password" placeholder="******" />
            </div>
            <div class="uk-width-1-3@s">
                <button class="btn  btn-light btn-lg"> Start free trailer </button>
            </div>
            <div class="uk-width-1-1@s">
                <label>
                    <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" id="customCheck1" type="checkbox" />
                        <label class="custom-control-label" for="customCheck1"> 
                            <span class="checkmark uk-text-small"> I agree to the </span>
                    < NavLink to ="/pages-terms" target="_blank"
                        activeclass="uk-text-bold uk-text-small uk-link-reset">
                        Terms and Conditions </NavLink>

                        </label>
                    </div>

                    
                </label>
            </div>
        </form>
    </div>
</div>

</div>
    )
}

export default IndexContent
