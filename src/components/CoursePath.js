import React,{useEffect} from 'react';
import {NavLink} from "react-router-dom";

const CoursePath = () => {

useEffect(() => {
    function fetchPData(){
        fetch("http://localhost:5500/popularcourse")
        .then(response=>{
            if(!response.ok){
                throw Error("Error");
            }
            return response.json();
        })
        .then(data=>{
            console.log(data);
            const html=data.map(user=>{
                return `<div>
                <a href=${user.link}>
                    <div class="course-path-card">
                    <img src=${user.pic} alt="">
                        <div class="course-path-card-contents">
                            <h3> ${user.title} </h3>
                            <p> ${user.courseFooter}
                            </p>
                            <div class="course-progressbar mt-3">
                                <div class="course-progressbar-filler" style={{width:'25%'}}></div>
                            </div>
                        </div>
                        <div class="course-path-card-footer">
                            <h5> <i class="icon-feather-film mr-1"></i> ${user.lectures} Lectures </h5>
                            <div>
                                <h5>
                                    <i class="icon-feather-clock mr-1"></i>
                                    ${user.duration} Hours </h5>

                            </div>
                        </div>
                    </div>
                </a>
            </div>`;
            }).join("");
            console.log(html);
            document.querySelector("#pco").insertAdjacentHTML("afterbegin",html);
        })
        .catch(error=>{
            console.log("error");
        });
    }
    fetchPData();
}, [])

    return (
        <div id="wrapper">
            <div class="page-content">

<div class="page-content-inner">

    <h2 class="mb-3"> Topic </h2>

    <div class="section-header">
        <div class="section-header-left">
            <h4> Choose a topic</h4>
        </div>
        <div class="section-header-right">
            <NavLink to ="#" activeClassName="see-all"> See all</NavLink>
        </div>
    </div>

    <div class="uk-child-width-1-3@s uk-child-width-1-4@m" uk-grid>
        <div>
            <NavLink to= "/course-path-level" activeClassName ="skill-card">
                <i class="icon-brand-angular skill-card-icon" style={{color:'#dd0031'}}></i>
                <div>
                    <h2 class="skill-card-title"> Angular Courses</h2>
                    <p class="skill-card-subtitle"> 15 courses <span class="skill-card-bullet"></span> 3
                        bundles
                    </p>
                </div>
            </NavLink>
        </div>
        <div>
            <NavLink to= "/course-path-level" activeClassName ="skill-card">
                <i class="icon-brand-js-square skill-card-icon" style={{color:'#f7df1e'}}></i>
                <div>
                    <h2 class="skill-card-title"> Angular Courses</h2>
                    <p class="skill-card-subtitle"> 2 courses <span class="skill-card-bullet"></span> 13
                        bundles
                    </p>
                </div>
            </NavLink>
        </div>
        <div>
            <NavLink to= "/course-path-level" activeClassName ="skill-card">
                <i class="icon-brand-html5 skill-card-icon" style={{color:'#f0653f'}}></i>
                <div>
                    <h2 class="skill-card-title"> Angular Courses</h2>
                    <p class="skill-card-subtitle"> 3 courses <span class="skill-card-bullet"></span> 4
                        bundles
                    </p>
                </div>
            </NavLink>
        </div>
        <div>
            <NavLink to= "/course-path-level" activeClassName ="skill-card">
                <i class="icon-brand-node-js skill-card-icon" style={{color:'#64d25d'}}></i>
                <div>
                    <h2 class="skill-card-title"> NodeJS Courses</h2>
                    <p class="skill-card-subtitle"> 6 courses <span class="skill-card-bullet"></span> 4
                        bundles
                    </p>
                </div>
            </NavLink>
        </div>
        <div>
            <NavLink to= "/course-path-level" activeClassName ="skill-card">
                <i class="icon-brand-css3-alt skill-card-icon" style={{color:'#0018ca'}}></i>
                <div>
                    <h2 class="skill-card-title"> CSS3 Courses</h2>
                    <p class="skill-card-subtitle"> 5 courses <span class="skill-card-bullet"></span> 3
                        bundles
                    </p>
                </div>
            </NavLink>
        </div>
        <div>
            <NavLink to= "/course-path-level" activeClassName ="skill-card">
                <i class="icon-brand-react skill-card-icon" style={{color:'#74defb'}}></i>
                <div>
                    <h2 class="skill-card-title"> react Courses</h2>
                    <p class="skill-card-subtitle"> 12 courses <span class="skill-card-bullet"></span> 2
                        bundles
                    </p>
                </div>
            </NavLink>
        </div>
        <div>
            <NavLink to= "/course-path-level" activeClassName ="skill-card">
                <i class="icon-brand-python skill-card-icon" style={{color:'#154f5f'}}></i>
                <div>
                    <h2 class="skill-card-title"> Python Courses</h2>
                    <p class="skill-card-subtitle"> 12 courses <span class="skill-card-bullet"></span> 4
                        bundles
                    </p>
                </div>
            </NavLink>
        </div>
        <div>
            <NavLink to= "/course-path-level" activeClassName ="skill-card">
                <i class="icon-brand-vuejs skill-card-icon" style={{color:'#0bd36f'}}></i>
                <div>
                    <h2 class="skill-card-title"> Vuejs Courses</h2>
                    <p class="skill-card-subtitle"> 5 courses <span class="skill-card-bullet"></span> 3
                        bundles
                    </p>
                </div>
            </NavLink>
        </div>
        <div>
            <NavLink to= "/course-path-level" activeClassName ="skill-card">
                <i class="icon-brand-angular skill-card-icon" style={{color:'#dd0031'}}></i>
                <div>
                    <h2 class="skill-card-title"> Java Courses</h2>
                    <p class="skill-card-subtitle"> 5 courses <span class="skill-card-bullet"></span> 3
                        bundles
                    </p>
                </div>
            </NavLink>
        </div>
        <div>
            <NavLink to= "/course-path-level" activeClassName ="skill-card">
                <i class="icon-brand-js-square skill-card-icon" style={{color:'#f7df1e'}}></i>
                <div>
                    <h2 class="skill-card-title"> Angular Courses</h2>
                    <p class="skill-card-subtitle"> 5 courses <span class="skill-card-bullet"></span> 3
                        bundles
                    </p>
                </div>
            </NavLink>
        </div>
        <div>
            <NavLink to= "/course-path-level" activeClassName ="skill-card">
                <i class="icon-brand-html5 skill-card-icon" style={{color:'#f0653f'}}></i>
                <div>
                    <h2 class="skill-card-title"> Angular Courses</h2>
                    <p class="skill-card-subtitle"> 5 courses <span class="skill-card-bullet"></span> 3
                        bundles
                    </p>
                </div>
            </NavLink>
        </div>
        <div>
            <NavLink to= "/course-path-level" activeClassName ="skill-card">
                <i class="icon-brand-node-js skill-card-icon" style={{color:'#64d25d'}}></i>
                <div>
                    <h2 class="skill-card-title"> NodeJS Courses</h2>
                    <p class="skill-card-subtitle"> 5 courses <span class="skill-card-bullet"></span> 3
                        bundles
                    </p>
                </div>
            </NavLink>
        </div>
    </div>

    <h4 class="mt-lg-7 mt-4">Popular Topics</h4>
    <div id="pco" class="uk-child-width-1-2@s uk-child-width-1-4@m" uk-grid>
        {/* <!-- <div>
            <a href=${user.link}>
                <div class="course-path-card">
                <img src=${user.pic} alt="">
                    <div class="course-path-card-contents">
                        <h3> ${user.title} </h3>
                        <p> ${user.couserFooter}
                        </p>
                        <div class="course-progressbar mt-3">
                            <div class="course-progressbar-filler" style="width:25%"></div>
                        </div>
                    </div>
                    <div class="course-path-card-footer">
                        <h5> <i class="icon-feather-film mr-1"></i> ${user.lectures} Lectures </h5>
                        <div>
                            <h5>
                                <i class="icon-feather-clock mr-1"></i>
                                ${user.duration} Hours </h5>

                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div>
            <a href="course-path-level.html">
                <div class="course-path-card">
                    <img src="assets/images/course/p-2.png" alt="">
                    <div class="course-path-card-contents">
                        <h3> CSS3 Basics </h3>
                        <p> Lorem ipsum adipiscing elit, sed do eiusmod tempor..
                        </p>
                        <div class="course-progressbar mt-3">
                            <div class="course-progressbar-filler" style="width:25%"></div>
                        </div>
                    </div>
                    <div class="course-path-card-footer">
                        <h5> <i class="icon-feather-film mr-1"></i> 24 Lectures </h5>
                        <div>
                            <h5>
                                <i class="icon-feather-clock mr-1"></i>
                                55 Hours </h5>

                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div>
            <a href="course-path-level.html">
                <div class="course-path-card">
                    <img src="assets/images/course/p-3.png" alt="">
                    <div class="course-path-card-contents">
                        <h3> HTML Introduction </h3>
                        <p>HTML is the building blocks of the web. It gives pages ..
                        </p>
                        <div class="course-progressbar mt-3">
                            <div class="course-progressbar-filler" style="width:25%"></div>
                        </div>
                    </div>
                    <div class="course-path-card-footer">
                        <h5> <i class="icon-feather-film mr-1"></i> 24 Lectures </h5>
                        <div>
                            <h5>
                                <i class="icon-feather-clock mr-1"></i>
                                55 Hours </h5>

                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div>
            <a href="course-path-level.html">
                <div class="course-path-card">
                    <img src="assets/images/course/p-1.png" alt="">
                    <div class="course-path-card-contents">
                        <h3> JavaScript </h3>
                        <p> JavaScript is how you build interactivity on the web ...
                        </p>
                        <div class="course-progressbar mt-3">
                            <div class="course-progressbar-filler" style="width:25%"></div>
                        </div>
                    </div>
                    <div class="course-path-card-footer">
                        <h5> <i class="icon-feather-film mr-1"></i> 24 Lectures </h5>
                        <div>
                            <h5>
                                <i class="icon-feather-clock mr-1"></i>
                                55 Hours </h5>

                        </div>
                    </div>
                </div>
            </a>
        </div> --> */}
    </div>

</div>


</div>
        </div>
    )
}

export default CoursePath
