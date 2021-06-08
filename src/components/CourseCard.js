import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom';

const CourseCard = () => {

    useEffect(() =>{

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
                                        <img src=${user.pic} />
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
                document.querySelector("#satyam").insertAdjacentHTML("afterbegin",html);
            })
            .catch(error=>{
                console.log("error");
            });
        }
        fetchData();

    })
   


    return (
        <div id="wrapper">
            <div class="page-content">

<div class="container">

    <div class="mt-lg-5" uk-grid>
        <div class="uk-width-1-4@m">

            <div class="sidebar-filter" uk-sticky="top:20 ;offset: 90; bottom: true ; media : @m">

                <button class="btn-sidebar-filter"
                    uk-toggle="target: .sidebar-filter; cls: sidebar-filter-visible">Filter </button>

                <div class="sidebar-filter-contents">


                    <h4> Filter By </h4>

                    <ul class="sidebar-filter-list" uk-accordion="multiple: true">

                        <li class="uk-open">
                            <NavLink to = "#" activeClassName="uk-accordion-title" > Skill Levels </NavLink>
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
                            <NavLink to = "#" activeClassName="uk-accordion-title" > Course type </NavLink>
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
                            <NavLink to = "#" activeClassName="uk-accordion-title" > Duration time </NavLink>
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

        <div class="uk-width-expand@m">

            <div class="section-header mb-lg-3">
                <div class="section-header-left">

                    <h4> Web Development </h4>

                </div>
                <div class="section-header-right">


                    <div class="display-as">
                        <NavLink to="/course-list" uk-tooltip="title: Course list; pos: top-right">
                            <i class="icon-feather-grid"></i></NavLink>
                        <NavLink to = "#" activeClassNave="active" uk-tooltip="title: Course Grid; pos: top-right">
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



            <div  id="satyam" class="uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid >

                

            </div>

            <ul class="uk-pagination my-5 uk-flex-center" uk-margin>
                <li class="uk-active"><span>1</span></li>
                <li><NavLink to = "#">2</NavLink></li>
                <li><NavLink to = "#">3</NavLink></li>
                <li class="uk-disabled"><span>...</span></li>
                <li><NavLink to = "#"><span uk-pagination-next></span></NavLink></li>
            </ul>

        </div>

    </div>

</div>

</div>
        </div>
    )
}

export default CourseCard
