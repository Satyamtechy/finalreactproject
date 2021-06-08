import React,{useEffect} from 'react' ;
import {NavLink} from "react-router-dom";
const Dashboard = () => {
    useEffect(() =>{
        function fetchData(){
            fetch("http://localhost:5500/checks")
            .then(response=>{
                if(!response.ok){
                    throw Error("Error");
                }
                return response.json();
            })
            .then(data=>{
                console.log(data);
                const html=data.map(user=>{

                    return `<li>
                                            <a href=${user.link}>
                                                <span class="notification-image">
                                                    <img src=${user.pic1} alt=""></span>
                                                <span class="notification-text">
                                                    <span class="course-title">${user.title}
                                                    </span>
                                                    <span class="course-number">6/35 </span>
                                                    <span class="course-progressbar">
                                                        <span class="course-progressbar-filler" style={{width:"95%"}}></span>
                                                    </span>
                                                </span>

                                                <!-- option menu -->
                                                <span class="btn-option">
                                                    <i class="icon-feather-more-vertical"></i>
                                                </span>
                                                <div class="dropdown-option-nav" uk-dropdown="pos: bottom-right ;mode : hover">
                                                    <ul><li>
                                                            <span>
                                                                <i class="icon-material-outline-dashboard"></i>
                                                                Course Dashboard</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i class="icon-feather-video"></i>
                                                                Resume Course</span>
                                                        </li>
                                                        <li>
                                                            <span>
                                                                <i class="icon-feather-x"></i>
                                                                Remove Course</span>
                                                        </li>
                                                    </ul></div>
                                            </a>

                                        </li>
                                        `;
                }).join("");
                console.log(html);
                document.querySelector("#notify").insertAdjacentHTML("afterbegin",html);
            })
            .catch(error=>{
                console.log("error");
            });
        }
        fetchData();
    },[])
return (
   
    
    <div class="page-content">

<style>
    {`
        .flex-wrapper {
            display: flex;
            flex-flow: row nowrap;
        }

        .single-chart {
            width: 33%;
            justify-content: space-around;
        }

        .circular-chart {
            display: block;
            margin: 10px auto;
            max-width: 80%;
            max-height: 250px;
        }

        .circle-bg {
            fill: none;
            stroke: #eee;
            stroke-width: 3.8;
        }

        .circle {
            fill: none;
            stroke-width: 2.8;
            stroke-linecap: round;
            animation: progress 1s ease-out forwards;
        }

        @keyframes progress {
            0% {
                stroke-dasharray: 0 100;
            }
        }

        .circular-chart.orange .circle {
            stroke: #ff9f00;
        }

        .circular-chart.green .circle {
            stroke: #4CC790;
        }

        .circular-chart.blue .circle {
            stroke: #3c9ee5;
        }

        .percentage {
            fill: #666;
            font-family: sans-serif;
            font-size: 0.5em;
            text-anchor: middle;
        }
  `}  </style>


    <div class="home-hero" data-src="../assets/images/home-hero.png" uk-img >
        <div class="uk-width-1-1">
            <div class="page-content-inner uk-position-z-index">
                <h1>Learn HTML , CSS , JavaScript, PHP, NodeJS, Python <br /> Apps &amp; More</h1>
                <h4 class="my-lg-4"> Learn how to build websites &amp; apps <br />write a code or start your learning journey by Developer Experts. </h4>
                <NavLink to ="#" activeClassName="button grey">Free trailer </NavLink>
            </div>
        </div>
    </div>


         <div class="container">


      
        <div class="section-small">

            <div uk-slider="finite: true" class="course-grid-slider">

                <div class="grid-slider-header">
                    <div>
                        <h4 class="uk-text-truncate"> Progress Courses
                        </h4>
                    </div>
                    <div class="grid-slider-header-link">

                        <NavLink to ="/courses" activeClassName="button transparent uk-visible@m"> View all </NavLink>
                        <NavLink to ="#" activeClassName="slide-nav-prev" uk-slider-item="previous"></NavLink>
                        <NavLink to ="#" activeClassName="slide-nav-next" uk-slider-item="next"></NavLink>

                    </div>
                </div>

                <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-grid"><li>
                        <a href="course-lesson-1.html">
                            <div class="course-card-resume">
                                <div class="course-card-resume-thumbnail">
                                    <img src="images/course-2.png" /></div>
                                <div class="course-card-resume-body">
                                    <h5>Angular Fundamentals From Scratch To Experts</h5>
                                    <span class="number"> 3/20 </span>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"65%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li> <a href="course-lesson-1.html">
                            <div class="course-card-resume">
                                <div class="course-card-resume-thumbnail">
                                    <img src="images/course-1.png" /></div>
                                <div class="course-card-resume-body">
                                    <h5> Ultimate Web Designer And Developer Course </h5>
                                    <span class="number"> 3/20 </span>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"65%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li> <a href="course-lesson-1.html">
                            <div class="course-card-resume">
                                <div class="course-card-resume-thumbnail">
                                    <img src="images/course-7.png" /></div>
                                <div class="course-card-resume-body">
                                    <h5> Bootstrap Framework From Scratch To Experts </h5>
                                    <span class="number"> 3/20 </span>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"65%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="course-lesson-1.html">
                            <div class="course-card-resume">
                                <div class="course-card-resume-thumbnail">
                                    <img src="images/course-3.png" /></div>
                                <div class="course-card-resume-body">
                                    <h5> Ultimate Web Designer And Developer Course </h5>
                                    <span class="number"> 3/20 </span>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"65%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="course-lesson-1.html">
                            <div class="course-card-resume">
                                <div class="course-card-resume-thumbnail">
                                    <img src="images/course-4.png" /></div>
                                <div class="course-card-resume-body">
                                    <h5>Angular Fundamentals From Scratch To Experts</h5>
                                    <span class="number"> 3/20 </span>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"65%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li> <a href="course-lesson-1.html">
                            <div class="course-card-resume">
                                <div class="course-card-resume-thumbnail">
                                    <img src="images/course-1.png" /></div>
                                <div class="course-card-resume-body">
                                    <h5> Ultimate Web Designer And Developer Course </h5>
                                    <span class="number"> 3/20 </span>
                                    <div class="course-progressbar">
                                        <div class="course-progressbar-filler" style={{width:"65%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li> 
                </ul></div>

        </div>


        <div class="section-small pt-0">

            <div class="course-grid-slider" uk-slider="finite: true">

                <div class="grid-slider-header">
                    <div>
                        <h4 class="uk-text-truncate"> popular <NavLink to ="#" activeClassName="text-muted">Topics</NavLink> </h4>
                    </div>
                    <div class="grid-slider-header-link">

                        <NavLink to="/course-path" activeClassName="button transparent uk-visible@m"> View all </NavLink>
                        <NavLink to ="#" activeClassName="slide-nav-prev" uk-slider-item="previous"></NavLink>
                        <NavLink to ="#" activeClassName="slide-nav-next" uk-slider-item="next"></NavLink>

                    </div>
                </div>

                <ul class="uk-slider-items uk-child-width-1-4@m uk-child-width-1-3@s uk-grid"><li>
                        <NavLink to ="/course-path-level" activeClassName ="skill-card">
                            <i class="icon-brand-angular skill-card-icon" style={{color:"#dd0031"}}></i>
                            <div>
                                <h2 class="skill-card-title"> Angular Courses</h2>
                                <p class="skill-card-subtitle"> 5 courses <span class="skill-card-bullet"></span> 3
                                    bundles
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ="/course-path-level" activeClassName ="skill-card">
                            <i class="icon-brand-js-square skill-card-icon" style={{color:"#f7df1e"}}></i>
                            <div>
                                <h2 class="skill-card-title"> Angular Courses</h2>
                                <p class="skill-card-subtitle"> 5 courses <span class="skill-card-bullet"></span> 3
                                    bundles
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ="/course-path-level" activeClassName ="skill-card">
                            <i class="icon-brand-html5 skill-card-icon" style={{color:"#f0653f"}}></i>
                            <div>
                                <h2 class="skill-card-title"> Angular Courses</h2>
                                <p class="skill-card-subtitle"> 5 courses <span class="skill-card-bullet"></span> 3
                                    bundles
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ="/course-path-level" activeClassName ="skill-card">
                            <i class="icon-brand-node-js skill-card-icon" style={{color:"#64d25d"}}></i>
                            <div>
                                <h2 class="skill-card-title"> NodeJS Courses</h2>
                                <p class="skill-card-subtitle"> 5 courses <span class="skill-card-bullet"></span> 3
                                    bundles
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ="/course-path-level" activeClassName ="skill-card">
                            <i class="icon-brand-angular skill-card-icon" style={{color:"#dd0031"}}></i>
                            <div>
                                <h2 class="skill-card-title"> Angular Courses</h2>
                                <p class="skill-card-subtitle"> 5 courses <span class="skill-card-bullet"></span> 3
                                    bundles
                                </p>
                            </div>
                        </NavLink>
                    </li>
                </ul></div>

        </div>


        <div class="section-small pt-0">

            <div class="course-grid-slider" uk-slider="finite: true">

                <div class="grid-slider-header">
                    <div>
                        <h4 class="uk-text-truncate"> Browse Web Development
                            <NavLink to="/episode" activeClassName="text-muted">Episodes</NavLink> </h4>
                    </div>
                    <div class="grid-slider-header-link">

                        <NavLink to="/courses" activeClassName="button transparent uk-visible@m"> View all </NavLink>
                        <NavLink to ="#" activeClassName="slide-nav-prev" uk-slider-item="previous"></NavLink>
                        <NavLink to ="#" activeClassName="slide-nav-next" uk-slider-item="next"></NavLink>

                    </div>
                </div>

                <ul class="uk-slider-items uk-child-width-1-4@m uk-child-width-1-3@s uk-grid"><li>
                        <NavLink to="episode-details.html">
                            <div class="course-card episode-card animate-this">
                                <div class="course-card-thumbnail ">
                                    <span class="item-tag">HTML</span>
                                    <span class="duration">2:39</span>
                                    <img src="images/episodes-2.png" /><span class="play-button-trigger"></span>
                                </div>
                                <div class="course-card-body">
                                    <h4 class="mb-0"> Creating sticky in HTML </h4>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ="/episode-details">
                            <div class="course-card episode-card animate-this">
                                <div class="course-card-thumbnail ">
                                    <span class="item-tag">Tips</span>
                                    <span class="duration">5:39</span>
                                    <img src="images/episodes-3.png" /><span class="play-button-trigger"></span>
                                </div>
                                <div class="course-card-body">
                                    <h4 class="mb-0"> er Creating a Laravel Package </h4>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ="/episode-details">
                            <div class="course-card episode-card animate-this">
                                <div class="course-card-thumbnail ">
                                    <span class="item-tag">PHP</span>
                                    <span class="duration">5:39</span>
                                    <img src="images/episodes-1.png" /><span class="play-button-trigger"></span>
                                </div>
                                <div class="course-card-body">
                                    <h4 class="mb-0"> The PHP Singleton class </h4>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ="/episode-details">
                            <div class="course-card episode-card animate-this">
                                <div class="course-card-thumbnail ">
                                    <span class="item-tag">Design</span>
                                    <span class="duration">2:39</span>
                                    <img src="images/episodes-5.png" /><span class="play-button-trigger"></span>
                                </div>
                                <div class="course-card-body">
                                    <h4 class="mb-0"> Dev Design Quickie </h4>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ="/episode-details">
                            <div class="course-card episode-card animate-this">
                                <div class="course-card-thumbnail ">
                                    <span class="item-tag">HTML</span>
                                    <span class="duration">2:39</span>
                                    <img src="images/episodes-2.png" /><span class="play-button-trigger"></span>
                                </div>
                                <div class="course-card-body">
                                    <h4 class="mb-0"> Creating sticky in HTML </h4>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                </ul></div>

        </div>


        <div class="section-small pt-0">

            <div class="course-grid-slider" uk-slider="finite: true">

                <div class="grid-slider-header">
                    <div>
                        <h4 class="uk-text-truncate"> Browse Web Development
                            <NavLink to ="#" activeClassName="text-muted">Courses</NavLink> </h4>
                    </div>
                    <div class="grid-slider-header-link">

                        <NavLink to="courses.html" activeClassName="button transparent uk-visible@m"> View all </NavLink>
                        <NavLink to ="#" activeClassName="slide-nav-prev" uk-slider-item="previous"></NavLink>
                        <NavLink to ="#" activeClassName="slide-nav-next" uk-slider-item="next"></NavLink>

                    </div>
                </div>

                <ul class="uk-slider-items uk-child-width-1-4@m uk-child-width-1-3@s uk-grid"><li>
                        <NavLink to="/course-intro">
                            <div class="course-card">
                                <div class="course-card-thumbnail ">
                                    <img src="images/course-2.png" /><span class="play-button-trigger"></span>
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
                                    <p> Learn how to build and launch React web applications with .. </p>
                                    <div class="course-card-footer">
                                        <h5> <i class="icon-feather-film"></i> 12 Lectures </h5>
                                        <h5> <i class="icon-feather-clock"></i> 64 Hours </h5>
                                    </div>
                                </div>

                            </div>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to ="/course-intro">
                            <div class="course-card">
                                <div class="course-card-thumbnail ">
                                    <img src="images/course-3.png" /><span class="play-button-trigger"></span>
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
                                    <p> JavaScript is how you build interactivity on the web.. </p>
                                    <div class="course-card-footer">
                                        <h5> <i class="icon-feather-film"></i> 14 Lectures </h5>
                                        <h5> <i class="icon-feather-clock"></i> 55 Hours </h5>
                                    </div>
                                </div>

                            </div>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to ="/course-intro">
                            <div class="course-card">
                                <div class="course-card-thumbnail ">
                                    <img src="images/course-1.png" /><span class="play-button-trigger"></span>
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
                                    <p> HTML is the building blocks of the web. It gives pages structure .
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
                        <NavLink to ="/course-intro">
                            <div class="course-card">
                                <div class="course-card-thumbnail ">
                                    <img src="images/course-6.png" /><span class="play-button-trigger"></span>
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
                                    <h4>Learn Modern HTML &amp; CSS </h4>
                                    <p> HTML is the building blocks of the web. It gives pages structure.. </p>

                                    <div class="course-card-footer">
                                        <h5> <i class="icon-feather-film"></i> 16 Lectures </h5>
                                        <h5> <i class="icon-feather-clock"></i> 52 Hours </h5>
                                    </div>
                                </div>

                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ="/course-intro">
                            <div class="course-card">
                                <div class="course-card-thumbnail ">
                                    <img src="images/course-5.png" /><span class="play-button-trigger"></span>
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
                                    <p> HTML is the building blocks of the web. It gives pages structure.
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
                
                
                </div>

        </div>
</div>
</div>
);
}



export default Dashboard;