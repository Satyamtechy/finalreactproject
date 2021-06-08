import React,{useEffect} from 'react' ;
import { NavLink } from 'react-router-dom';
const Takecourse = () => {
    useEffect(() =>{
        function make_button_active(tab) {
            //Get item siblings
            var siblings = tab.siblings();

            /* Remove active class on all buttons
            siblings.each(function(){
                $(this).removeClass('active');
            }) */

            //Add the clicked button class
            tab.addClass('watched');
        }

        //Attach events to highlight-watched
        (document).ready(function () {

            if (localStorage) {
                var ind = localStorage['tab']
                make_button_active(('.highlight-watched li').eq(ind));
            }

            (".highlight-watched li").click(function () {
                if (localStorage) {
                    localStorage['tab'] = (this).index();
                }
                make_button_active((this));
            });

        });
    },[])
return (
    <div id="wrapper">

    <div class="course-layouts">

        <div class="course-content bg-dark">

            <div class="course-header">
                
                <NavLink to="#" activeClassName="btn-back" uk-toggle="target: .course-layouts; cls: course-sidebar-collapse">
                    <i class="icon-feather-chevron-left"></i>
                </NavLink>

                <h4 class="text-white"> Build Responsive Websites </h4>

                <div>
                    <NavLink to="#">
                        <i class="icon-feather-help-circle btns"></i> </NavLink>
                    <div uk-drop="pos: bottom-right;mode : click">
                        <div class="uk-card-default p-4">
                            <h4> Elementum tellus id mauris faucibuss soluta nobis </h4>
                            <p class="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nam liber tempor cum
                                soluta nobis eleifend option congue nihil imperdiet</p>
                        </div>
                    </div>

                    <NavLink to="#">
                        <i class="icon-feather-more-vertical btns"></i>
                    </NavLink>
                    <div class="dropdown-option-nav " uk-dropdown="pos: bottom-right ;mode : click">
                        <ul>

                            <li><NavLink to="#">
                                    <i class="icon-feather-bookmark"></i>
                                    Add To Bookmarks</NavLink></li>
                            <li><NavLink to="#">
                                    <i class="icon-feather-share-2"></i>
                                    Share With Friend </NavLink></li>

                            <li>
                                <NavLink to="#" id="night-mode" activeClassName="btn-night-mode">
                                    <i class="icon-line-awesome-lightbulb-o"></i> Night mode
                                    <label class="btn-night-mode-switch">
                                        <div class="uk-switch-button"></div>
                                    </label>
                                </NavLink>
                            </li>
                        </ul>
                    </div>


                </div>

            </div>

            <div class="course-content-inner">

                <ul id="video-slider" class="uk-switcher">


                    <li>
                        
                        <div class="video-responsive">
                            <iframe src="https://www.youtube.com/embed/9gTw2EDkaDQ" frameborder="0"
                                uk-video="automute: true" allowfullscreen uk-responsive></iframe>
                        </div>

                    </li>
                    <li>
                        <div class="video-responsive">
                            <iframe src="https://www.youtube.com/embed/YcApt9RgiT0" frameborder="0"
                                allowfullscreen></iframe>
                        </div>

                    </li>
                    <li>
                        <div class="video-responsive">
                            <iframe src="https://www.youtube.com/embed/CGSdK7FI9MY" frameborder="0"
                                allowfullscreen uk-responsive></iframe>
                        </div>
                    </li>
                    <li>
                        <div class="video-responsive">
                            <iframe src="https://www.youtube.com/embed/4I1WgJz_lmA" frameborder="0"
                                allowfullscreen uk-responsive></iframe>
                        </div>
                    </li>
                    <li>
                        <div class="video-responsive">
                            <iframe src="https://www.youtube.com/embed/dDn9uw7N9Xg" frameborder="0"
                                allowfullscreen uk-responsive></iframe>
                        </div>
                    </li>
                    <li>
                        <div class="video-responsive">
                            <iframe src="https://www.youtube.com/embed/CPcS4HtrUEU" frameborder="0"
                                allowfullscreen uk-responsive></iframe>
                        </div>
                    </li>

                </ul>

            </div>

        </div>


        <div class="course-sidebar">
            <div class="course-sidebar-title">
                <h3> Table of Contents </h3>
            </div>
            <div class="course-sidebar-container" data-simplebar>

                <ul class="course-video-list-section" uk-accordion>

                    <li>
                        <NavLink to ="#" activeClassName = "uk-accordion-title"> Getting Started with HTML5 </NavLink>
                        <div class="uk-accordion-content">
                           
                            <ul class="course-video-list highlight-watched">
                                <li class="watched"> <NavLink to="#"> What Is HTML? <span> 2 min </span> </NavLink> </li>
                                <li class="watched"> <NavLink to="#"> Introduction to HTML5 <span> 3 min </span>
                                    </NavLink>
                                </li>
                                <li class="watched"> <NavLink to="#"> Getting the Browser <span> 5 min </span> </NavLink>
                                </li>
                                <li class="watched"> <NavLink to="#"> Setting Up the Editor <span> 2 min </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="uk-open">
                        <NavLink to ="#" activeClassName = "uk-accordion-title"> Your First webpage </NavLink>
                        <div class="uk-accordion-content">
                          
                            <ul class="course-video-list highlight-watched"
                                uk-switcher=" connect: #video-slider  ; animation: uk-animation-slide-right-small, uk-animation-slide-left-medium">
                                <li class="watched"> <NavLink to="#"> Creating First Page <span> 23 min </span> </NavLink>
                                </li>
                                <li> <NavLink to="#"> Headings in HTML <span> 23 min </span> </NavLink> </li>
                                <li> <NavLink to="#"> The paragraph tag <span> 23 min </span> </NavLink> </li>
                                <li> <NavLink to="#"> Emphasis and Strong Tag <span> 23 min </span> </NavLink> </li>
                                <li> <NavLink to="#"> Text Formatting <span> 23 min </span> </NavLink> </li>
                                <li> <NavLink to="#"> Working with Images <span> 23 min </span> </NavLink> </li>
                            </ul>

                        </div>
                    </li>
                    <li>
                        <NavLink to ="#" activeClassName = "uk-accordion-title"> Some Special Tags </NavLink>
                        <div class="uk-accordion-content">
                         
                            <ul class="course-video-list">
                                <li class=" "> <NavLink to="#"> Inserting Images <span> 23 min </span> </NavLink> </li>
                                <li class=" "> <NavLink to="#"> Constructing Lists <span> 23 min </span> </NavLink> </li>
                                <li class=" "> <NavLink to="#"> Horizontal Rule Tag <span> 23 min </span> </NavLink> </li>
                                <li class=" "> <NavLink to="#"> Validation <span> 23 min </span> </NavLink> </li>
                                <li class=" "> <NavLink to="#"> Comments Tag <span> 23 min </span> </NavLink> </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <NavLink to ="#" activeClassName = "uk-accordion-title"> HTML Advanced level </NavLink>
                        <div class="uk-accordion-content">

                            <ul class="course-video-list">
                                <li class=" "> <NavLink to="#"> The Basics of Forms<span> 23 min </span> </NavLink> </li>
                                <li class=" "> <NavLink to="#"> Link Targets <span> 23 min </span> </NavLink> </li>
                                <li class=" "> <NavLink to="#"> HTML Iframes <span> 23 min </span> </NavLink> </li>
                                <li class=" "> <NavLink to="#"> The End <span> 23 min </span> </NavLink> </li>
                            </ul>

                        </div>
                    </li>

                </ul>

            </div>

        </div>

    </div>



</div>


        );
}
export default Takecourse;