import React from 'react';
import {NavLink} from "react-router-dom";

const CoursePathLevel2 = () => {
    return (
        <div>
            <div class="page-content">

<div class="page-content-inner">


    <div class="mt-lg-4" uk-grid>
        <div class="uk-width-1-4@m">
            <img src="assets/images/course/p-3.png" alt="" class="rounded shadow" />
        </div>
        <div class="uk-width-expand">
            <p class="my-0 uk-text-small">Topic</p>
            <h3 class="mt-0"> CSS3 Basics </h3>
            <p> CSS is what makes the web beautiful. It describes how HTML should be displayed and how to
                layout elements. Take this class and get familiar with CSS!
                <NavLink to ="#">Read more</NavLink></p>
        </div>
        <div class="uk-width-1-4@m">
            <h5> Related tags </h5>
            <div uk-margin>
                <NavLink to ="#" class="mr-1">Web Developments</NavLink>
                <NavLink to ="#" class="mr-1">Angular</NavLink>
                <NavLink to ="#" class="mr-1">React</NavLink>
                <NavLink to ="#" class="mr-1">Swift</NavLink>
            </div>
        </div>

    </div>

    <div class="course-path-info my-4 my-lg-5">
        <h4 class="uk-text-bold"> What you will learn </h4>
        <ul>
            <li>Basics of programming </li>
            <li>Built-in types</li>
            <li>JavaScript operators</li>
            <li>Applying CSS Filters</li>
            <li>Flexible Box</li>
            <li>Floating and Clearing Elements</li>
            <li>Grid </li>
            <li>CSS Variables</li>
            <li>How Elements are Rendered</li>
            <li>CSS Grid Layout </li>
        </ul>
    </div>

    <ul class="course-path-level" uk-accordion>

        <li class="uk-open">
            <NavLink to ="#" activeClassName ="uk-accordion-title">Beginner Level </NavLink>
            <div class="uk-accordion-content">
                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                    quis nostrud exerci tation ullamcorper suscipit,</p>

                <div class="path-wrap">

                    <div class=" course-grid-slider" uk-slider="finite: true">

                        <ul
                            class="uk-slider-items uk-child-width-1-3@m uk-child-width-1-5@m uk-grid-match uk-grid">
                            <li>
                                <div class="course-card completed">
                                    <div class="course-card-thumbnail">
                                        <img src="assets/images/course/p-3.png" />
                                        <NavLink to = "/takecouse" activeClassName="play-button-trigger show"> </NavLink>
                                        <span class="duration">5:39</span>
                                    </div>
                                    <div class="course-card-body">
                                        <span class="completed-text"> Completed </span>
                                        <h4> Getting Started </h4>
                                        <p> Get setup so you are ready to begin styling .</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="course-card">
                                    <div class="course-card-thumbnail">
                                        <img src="assets/images/course/p-3.png" />
                                        <NavLink to = "/takecouse" activeClassName="play-button-trigger show"> </NavLink>
                                        <span class="duration">2:39</span>
                                    </div>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"25%"}}></div>
                                    </div>
                                    <div class="course-card-body">
                                        <h4> Applying CSS Styles </h4>
                                        <p> Learn different ways in which you can apply CSS</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="course-card">
                                    <div class="course-card-thumbnail">
                                        <img src="assets/images/course/p-3.png" />
                                        <NavLink to = "/takecouse" activeClassName="play-button-trigger show"> </NavLink>
                                        <span class="duration">1:39</span>
                                    </div>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"15%"}}></div>
                                    </div>
                                    <div class="course-card-body">
                                        <h4> Background colors </h4>
                                        <p> how to Add background colors and images </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="course-card">
                                    <div class="course-card-thumbnail">
                                        <img src="assets/images/course/p-3.png" />
                                        <NavLink to = "/takecouse" activeClassName="play-button-trigger show"> </NavLink>
                                        <span class="duration">2:19</span>
                                    </div>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"0%"}}></div>
                                    </div>
                                    <div class="course-card-body">
                                        <h4>Fonts and Text </h4>
                                        <p>Learn how to do so in this lesson on fonts and..</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="course-card">
                                    <div class="course-card-thumbnail">
                                        <img src="assets/images/course/p-3.png" />
                                        <NavLink to = "/takecouse" activeClassName="play-button-trigger show"> </NavLink>
                                        <span class="duration">3:39</span>
                                    </div>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"5%"}}></div>
                                    </div>
                                    <div class="course-card-body">
                                        <h4> Applying CSS Styles </h4>
                                        <p> Learn different ways in which you can apply CSS </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="course-card">
                                    <div class="course-card-thumbnail">
                                        <img src="assets/images/course/p-3.png" />
                                        <NavLink to = "/takecouse" activeClassName="play-button-trigger show"> </NavLink>
                                        <span class="duration">5:39</span>
                                    </div>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"25%"}}></div>
                                    </div>
                                    <div class="course-card-body">
                                        <h4> CSS variables </h4>
                                        <p> Giving you native and dynamic styles ..</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <NavLink to = "#" activeClassName="uk-position-center-left uk-position-small uk-hidden-hover slidenav-prev" uk-slider-item="previous"></NavLink>
                        <NavLink to = "#" activeClassName="uk-position-center-right uk-position-small uk-hidden-hover slidenav-next" uk-slider-item="next"></NavLink>

                    </div>

                </div>

            </div>
        </li>

        <li class="uk-open">
            <NavLink to ="#" activeClassName ="uk-accordion-title"> Intermediate Level </NavLink>
            <div class="uk-accordion-content">
                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam
                    quis nostrud exerci tation ullamcorper suscipit,</p>

                <div class="path-wrap">

                    <div class="course-grid-slider" uk-slider="finite: true">

                        <ul
                            class="uk-slider-items uk-child-width-1-3@s uk-child-width-1-5@m uk-grid-match uk-grid">
                            <li>
                                <div class="course-card">
                                    <div class="course-card-thumbnail">
                                        <img src="assets/images/course/p-3.png" />
                                        <NavLink to = "/takecouse" activeClassName="play-button-trigger show"> </NavLink>
                                        <span class="duration">5:39</span>
                                    </div>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"25%"}}></div>
                                    </div>
                                    <div class="course-card-body">
                                        <h4> CSS variables </h4>
                                        <p> Giving you native and dynamic styles not..</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="course-card">
                                    <div class="course-card-thumbnail">
                                        <img src="assets/images/course/p-3.png" />
                                        <NavLink to = "/takecouse" activeClassName="play-button-trigger show"> </NavLink>
                                        <span class="duration">2:39</span>
                                    </div>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"25%"}}></div>
                                    </div>
                                    <div class="course-card-body">
                                        <h4> Flexible Box </h4>
                                        <p>The Flexible Box layout and flexible layout for ..</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="course-card">
                                    <div class="course-card-thumbnail">
                                        <img src="assets/images/course/p-3.png" />
                                        <NavLink to = "/takecouse" activeClassName="play-button-trigger show"> </NavLink>
                                        <span class="duration">1:39</span>
                                    </div>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"15%"}}></div>
                                    </div>
                                    <div class="course-card-body">
                                        <h4>Grid CSS </h4>
                                        <p> Create a grid layout for your page to follow.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="course-card">
                                    <div class="course-card-thumbnail">
                                        <img src="assets/images/course/p-3.png" />
                                        <NavLink to = "/takecouse" activeClassName="play-button-trigger show"> </NavLink>
                                        <span class="duration">2:19</span>
                                    </div>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"0%"}}></div>
                                    </div>
                                    <div class="course-card-body">
                                        <h4>Position </h4>
                                        <p> Learn how to position elements on your..
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="course-card">
                                    <div class="course-card-thumbnail">
                                        <img src="assets/images/course/p-3.png" />
                                        <NavLink to = "/takecouse" activeClassName="play-button-trigger show"> </NavLink>
                                        <span class="duration">3:39</span>
                                    </div>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"5%"}}></div>
                                    </div>
                                    <div class="course-card-body">
                                        <h4> Flexible Box </h4>
                                        <p>The Flexible Box layout and flexible layout for ..</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="course-card">
                                    <div class="course-card-thumbnail">
                                        <img src="assets/images/course/p-3.png" />
                                        <NavLink to = "/takecouse" activeClassName="play-button-trigger show"> </NavLink>
                                        <span class="duration">5:39</span>
                                    </div>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"25%"}}></div>
                                    </div>
                                    <div class="course-card-body">
                                        <h4> CSS variables </h4>
                                        <p> Giving you native and dynamic styles not..</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <NavLink to = "#" activeClassName="uk-position-center-left uk-position-small uk-hidden-hover slidenav-prev" uk-slider-item="previous"></NavLink>
                        <NavLink to = "#" activeClassName="uk-position-center-right uk-position-small uk-hidden-hover slidenav-next" uk-slider-item="next"></NavLink>

                    </div>

                </div>

            </div>
        </li>

    </ul>


</div>
</div>

        </div>
    )
}

export default CoursePathLevel2
