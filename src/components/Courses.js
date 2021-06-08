import React,{useEffect} from 'react';
import {NavLink} from "react-router-dom";

const Courses = () => {


    useEffect(() => {
       function fetchData(){
            fetch("http://localhost:5500/course")
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
                                <div class="course-card">
                                    <div class="course-card-thumbnail ">
                                        <img src="images/course-2.png">
                                        <span class="play-button-trigger"></span>
                                    </div>
                                    <div class="course-card-body">
                                        <div class="course-card-info">
                                            <div>
                                                <span class="catagroy">${user.title}</span>
                                            </div>
                                            <div>
                                                <i class="icon-feather-bookmark icon-small"></i>
                                            </div>
                                        </div>
                                        <h4>${user.courseFooter} </h4>
                                        <p> ${user.courseInfo}</p>
                                        <div class="course-card-footer">
                                            <h5> <i class="icon-feather-film"></i> ${user.lectures} Lectures </h5>
                                            <h5> <i class="icon-feather-clock"></i> ${user.duration} Hours </h5>
                                        </div>
                                    </div>

                                </div>
                            </a>

                        </div>`;
                }).join("");
                console.log(html);
                document.querySelector("#co").insertAdjacentHTML("afterbegin",html);
                document.querySelector("#cou").insertAdjacentHTML("afterbegin",html);
            })
            .catch(error=>{
                console.log("error");
            });
        }
        fetchData();
    }, [])




    return (



        <div id="wrapper">
            <div class="page-content">


                <div class="container">

    <h1>Courses</h1>

    <h4> Browse Web Development <NavLink to ="#" >Courses</NavLink> </h4>

    <nav class="responsive-tab style-2">
        <ul>
            <li class="uk-active"><NavLink to ="#" >Most popular</NavLink></li>
            <li><NavLink to ="/indexs">New</NavLink></li>
            <li><NavLink to ="#" >Intermediate </NavLink></li>
            <li><NavLink to ="#" >advanced</NavLink></li>
        </ul>
    </nav>

    <div class="section-small">
        <div id="co" class="uk-child-width-1-4@m uk-child-width-1-3@s course-card-grid" uk-grid>
            {/* <!-- <div>
                <a href="course-intro.html">
                    <div class="course-card">
                        <div class="course-card-thumbnail ">
                            <img src="images/course-2.png">
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
                            <p> Learn how to build launch React web applications using .. </p>
                            <div class="course-card-footer">
                                <h5> <i class="icon-feather-film"></i> 12 Lectures </h5>
                                <h5> <i class="icon-feather-clock"></i> 64 Hours </h5>
                            </div>
                        </div>

                    </div>
                </a>

            </div>
            <div>
                <a href="course-intro.html">
                    <div class="course-card">
                        <div class="course-card-thumbnail ">
                            <img src="images/course-3.png">
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
                            <p> JavaScript is how you build interactivity on the web.. </p>
                            <div class="course-card-footer">
                                <h5> <i class="icon-feather-film"></i> 14 Lectures </h5>
                                <h5> <i class="icon-feather-clock"></i> 55 Hours </h5>
                            </div>
                        </div>

                    </div>
                </a>

            </div>
            <div>
                <a href="course-intro.html">
                    <div class="course-card">
                        <div class="course-card-thumbnail ">
                            <img src="images/course-1.png">
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
                            <p> HTML is the building blocks of the web. It gives pages structure</p>

                            <div class="course-card-footer">
                                <h5> <i class="icon-feather-film"></i> 33 Lectures </h5>
                                <h5> <i class="icon-feather-clock"></i> 26 Hours </h5>
                            </div>
                        </div>

                    </div>
                </a>

            </div>
            <div>
                <a href="course-intro.html">
                    <div class="course-card">
                        <div class="course-card-thumbnail ">
                            <img src="images/course-5.png">
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
                            <p> HTML is the building blocks of the web. It gives pages structure</p>

                            <div class="course-card-footer">
                                <h5> <i class="icon-feather-film"></i> 34 Lectures </h5>
                                <h5> <i class="icon-feather-clock"></i> 54 Hours </h5>
                            </div>
                        </div>

                    </div>
                </a>
            </div>
        </div> --> */}
    </div>

    <div class="section-header pb-0 mt-5">
        <div class="section-header-left">
            <h4> Most popular <NavLink to ="/courses">Courses</NavLink> </h4>
        </div>
        <div class="section-header-right">

            <NavLink to ="#" activeClassName="btn-filter" uk-tooltip="title: Course Filter ; pos:  top-right"
                uk-toggle="target: #course-filter">
                <i class="icon-feather-filter"></i>
            </NavLink>
            <div class="display-as">
                <NavLink to="/courses-list" uk-tooltip="title: Course list; pos: top-right">
                    <i class="icon-feather-grid"></i></NavLink>
                <NavLink to ="#" activeClassName="active" uk-tooltip="title: Course Grid; pos: top-right">
                    <i class="icon-feather-list"></i></NavLink>
            </div>

            <select class="selectpicker ml-3">
                <option value=""> Newest </option>
                <option value="1">Popular</option>
                <option value="2">Free</option>
                <option value="3">Premium</option>
            </select>

        </div>
    </div>

    <div class="section-small">

        <div id="cou" class="uk-child-width-1-4@m uk-child-width-1-3@s course-card-grid uk-grid-match" uk-grid>

            {/* <!-- <div>
                <a href="course-intro.html">
                    <div class="course-card">
                        <div class="course-card-thumbnail ">
                            <img src="images/course-1.png">
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
                            <p> HTML is the building blocks of the web. It gives pages structure</p>

                            <div class="course-card-footer">
                                <h5> <i class="icon-feather-film"></i> 33 Lectures </h5>
                                <h5> <i class="icon-feather-clock"></i> 26 Hours </h5>
                            </div>
                        </div>

                    </div>
                </a>
            </div>
            <div>
                <a href="course-intro.html">
                    <div class="course-card">
                        <div class="course-card-thumbnail ">
                            <img src="images/course-3.png">
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
                            <h4>The Complete JavaScript From </h4>
                            <p> JavaScript is how you build interactivity on the web...
                                learn </p>
                            <div class="course-card-footer">
                                <h5> <i class="icon-feather-film"></i> 12 Lectures </h5>
                                <h5> <i class="icon-feather-clock"></i> 25 Hours </h5>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div>
                <a href="course-intro.html">
                    <div class="course-card">
                        <div class="course-card-thumbnail ">
                            <img src="images/course-2.png">
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
                                <h5> <i class="icon-feather-film"></i> 14 Lectures </h5>
                                <h5> <i class="icon-feather-clock"></i> 55 Hours </h5>
                            </div>
                        </div>

                    </div>
                </a>

            </div>
            <div>
                <a href="course-intro.html">
                    <div class="course-card">
                        <div class="course-card-thumbnail ">
                            <img src="images/course-6.png">
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
                            <h4>Learn Modern HTML & CSS </h4>
                            <p> HTML is the building blocks of the web. It gives pages structure</p>

                            <div class="course-card-footer">
                                <h5> <i class="icon-feather-film"></i> 16 Lectures </h5>
                                <h5> <i class="icon-feather-clock"></i> 52 Hours </h5>
                            </div>
                        </div>

                    </div>
                </a>
            </div>
            <div>
                <a href="course-intro.html">
                    <div class="course-card">
                        <div class="course-card-thumbnail ">
                            <img src="images/course-5.png">
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
                            <p> HTML is the building blocks of the web. It gives pages structure</p>

                            <div class="course-card-footer">
                                <h5> <i class="icon-feather-film"></i> 34 Lectures </h5>
                                <h5> <i class="icon-feather-clock"></i> 54 Hours </h5>
                            </div>
                        </div>

                    </div>
                </a>

            </div>
            <div>
                <a href="course-intro.html">
                    <div class="course-card">
                        <div class="course-card-thumbnail ">
                            <img src="images/course-4.png">
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
                </a>
            </div>
            <div>
                <a href="course-intro.html">
                    <div class="course-card">
                        <div class="course-card-thumbnail ">
                            <img src="images/course-7.png">
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
                            <h4>Bootstrap Introduction</h4>
                            <p> Learn how to build your website using latest Bootstrap Modern ..</p>
                            <div class="course-card-footer">
                                <h5> <i class="icon-feather-film"></i> 33 Lectures </h5>
                                <h5> <i class="icon-feather-clock"></i> 26 Hours </h5>
                            </div>
                        </div>

                    </div>
                </a>
            </div>
            <div>
                <a href="course-intro.html">
                    <div class="course-card">
                        <div class="course-card-thumbnail ">
                            <img src="images/course-1.png">
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
                            <p> HTML is the building blocks of the web. It gives pages structure</p>

                            <div class="course-card-footer">
                                <h5> <i class="icon-feather-film"></i> 33 Lectures </h5>
                                <h5> <i class="icon-feather-clock"></i> 26 Hours </h5>
                            </div>
                        </div>

                    </div>
                </a>
            </div>
        </div> --> */}

    </div>


    <ul class="uk-pagination my-5 uk-flex-center" uk-margin>
        <li><NavLink to ="#" ><span uk-pagination-previous></span></NavLink></li>
        <li class="uk-disabled"><span>...</span></li>
        <li><NavLink to ="#" >4</NavLink></li>
        <li class="uk-active"><span>7</span></li>
        <li><NavLink to ="#" >8</NavLink></li>
        <li><NavLink to ="#" >10</NavLink></li>
        <li class="uk-disabled"><span>...</span></li>
        <li><NavLink to ="#" ><span uk-pagination-next></span></NavLink></li>
    </ul>

    <div id="course-filter" uk-offcanvas="flip: true; overlay: true">
        <div class="uk-offcanvas-bar">

            <button class="uk-offcanvas-close" type="button" uk-close></button>

            <div class="sidebar-filter">

                <div class="sidebar-filter-contents">


                    <h4> Filter By </h4>

                    <ul class="sidebar-filter-list" uk-accordion="multiple: true">

                        <li class="uk-open">
                            <NavLink to ="#" activeClassName ="uk-accordion-title" > Skill Levels </NavLink>
                            <div class="uk-accordion-content">
                                <div class="uk-form-controls">
                                    <label>
                                        <input class="uk-radio" type="radio" name="radio1" />
                                        <span class="test"> Beginner <span> (25) </span> </span>
                                    </label>
                                    <label>
                                        <input class="uk-radio" type="radio" name="radio1" />
                                        <span class="test"> Entermidate<span> (32) </span></span>
                                    </label>
                                    <label>
                                        <input class="uk-radio" type="radio" name="radio1" />
                                        <span class="test"> Expert <span> (12) </span></span>
                                    </label>
                                </div>
                            </div>
                        </li>

                        <li class="uk-open">
                            <NavLink to ="#" activeClassName ="uk-accordion-title" > Course type </NavLink>
                            <div class="uk-accordion-content">
                                <div class="uk-form-controls">
                                    <label>
                                        <input class="uk-radio" type="radio" name="radio2" />
                                        <span class="test"> Free (42) </span>
                                    </label>
                                    <label>
                                        <input class="uk-radio" type="radio" name="radio2" />
                                        <span class="test"> Paid </span>
                                    </label>
                                </div>
                            </div>
                        </li>

                        <li class="uk-open">
                            <NavLink to ="#" activeClassName ="uk-accordion-title" > Duration time </NavLink>
                            <div class="uk-accordion-content">
                                <div class="uk-form-controls">
                                    <label>
                                        <input class="uk-radio" type="radio" name="radio3" />
                                        <span class="test"> +5 Hourse (23) </span>
                                    </label>
                                    <label>
                                        <input class="uk-radio" type="radio" name="radio3" />
                                        <span class="test"> +10 Hourse (12)</span>
                                    </label>
                                    <label>
                                        <input class="uk-radio" type="radio" name="radio3" />
                                        <span class="test"> +20 Hourse (5)</span>
                                    </label>
                                    <label>
                                        <input class="uk-radio" type="radio" name="radio3" />
                                        <span class="test"> +30 Hourse (2)</span>
                                    </label>
                                </div>
                            </div>
                        </li>


                    </ul>



                </div>

            </div>

        </div>
    </div>
</div>
</div>
</div>
</div>
        </div>
    )
}

export default Courses
