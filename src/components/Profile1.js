import React from 'react'
import { NavLink } from 'react-router-dom';

const Profile1 = () => {
    return (
        <div>
             <div class="page-content">

<div class="page-content-inner">

    <div uk-grid>
        <div class="uk-width-medium@m">

            <div class="profile-cards" uk-sticky="offset: 90; bottom: true; media: @m;top:2">

                <div class="user-profile-photo">
                    <img src="assets/images/avatars/home-profile.jpg" alt="" />
                </div>

                <h4> Jonathan Madano </h4>
                <p class="uk-text-small"> Pro member </p>

                <div class="social-icons">
                    <NavLink to="#"> <i class="icon-brand-facebook-f"></i> </NavLink>
                    <NavLink to="#"><i class="icon-brand-twitter"></i></NavLink>
                    <NavLink to="#"> <i class="icon-brand-linkedin"></i></NavLink>
                </div>

               

                <ul class="uk-list uk-list-divider text-center mb-0 mt-3 uk-text-small" style={{margin: "-15px;"}}> 
                    <li> 
                        <NavLink to="#" activeClassName="uk-link-reset"> Edit Your Account  </NavLink>
                    </li>                                 
                    <li> 
                        <NavLink to="#" activeClassName="uk-link-reset"> Notification </NavLink>
                    </li>                                 
                    <li> 
                        <NavLink to="#" activeClassName="uk-link-reset"> Membership upgrade </NavLink>
                    </li>                                 
                </ul>

                <div class="profile-cards-footer mt-3">
                    <NavLink to="#">  <i class="uil-envelope-alt"></i> Send message </NavLink>
                </div>

            </div>


        </div>
        <div class="uk-width-expand@m">

            <nav class="responsive-tab style-4">
                <ul>
                    <li class="uk-active"><NavLink to="#"> Courses </NavLink></li>
                    <li><NavLink to="#"> Bookmarks </NavLink></li>
                    <li><NavLink to="#"> Billing </NavLink></li>
                    <li><NavLink to="#"> Settings </NavLink></li>
                </ul>
            </nav>


                <div class="section-small">

                    <div class="section-header">
                        <div class="section-header-left">
                            <h4> Courses in progess</h4>
                        </div>
                        <div class="section-header-right">
                            <NavLink to="#" class="see-all"> See all</NavLink>
                        </div>
                    </div>


                    <div class="uk-child-width-1-3@s" uk-grid>

                            <div>
                                    <NavLink to ="/takecouse">
                                        <div class="course-card-resume">
                                            <div class="course-card-resume-thumbnail">
                                                <img src="assets/images/course/2.png" />
                                            </div>
                                            <div class="course-card-resume-body">
                                                <h5>Angular Fundamentals From Scratch To Experts</h5>
                                                <span class="number"> 3/20 </span>
                                                <div class="course-progressbar">
                                                    <div class="course-progressbar-filler" style={{width:"65%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                                <div> <NavLink to ="/takecouse">
                                        <div class="course-card-resume">
                                            <div class="course-card-resume-thumbnail">
                                                <img src="assets/images/course/1.png" />
                                            </div>
                                            <div class="course-card-resume-body">
                                                <h5> Ultimate Web Designer And Developer Course </h5>
                                                <span class="number"> 3/20 </span>
                                                <div class="course-progressbar">
                                                    <div class="course-progressbar-filler" style={{width:"65%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                                <div> <NavLink to ="/takecouse">
                                        <div class="course-card-resume">
                                            <div class="course-card-resume-thumbnail">
                                                <img src="assets/images/course/7.png" />
                                            </div>
                                            <div class="course-card-resume-body">
                                                <h5> Bootstrap Framework From Scratch To Experts </h5>
                                                <span class="number"> 3/20 </span>
                                                <div class="course-progressbar">
                                                    <div class="course-progressbar-filler" style={{width:"65%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to ="/takecouse">
                                        <div class="course-card-resume">
                                            <div class="course-card-resume-thumbnail">
                                                <img src="assets/images/course/3.png" />
                                            </div>
                                            <div class="course-card-resume-body">
                                                <h5> Ultimate Web Designer And Developer Course </h5>
                                                <span class="number"> 3/20 </span>
                                                <div class="course-progressbar">
                                                    <div class="course-progressbar-filler" style={{width:"65%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to ="/takecouse">
                                        <div class="course-card-resume">
                                            <div class="course-card-resume-thumbnail">
                                                <img src="assets/images/course/4.png" />
                                            </div>
                                            <div class="course-card-resume-body">
                                                <h5>Angular Fundamentals From Scratch To Experts</h5>
                                                <span class="number"> 3/20 </span>
                                                <div class="course-progressbar">
                                                    <div class="course-progressbar-filler" style={{width:"65%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                                <div> <NavLink to ="/takecouse">
                                        <div class="course-card-resume">
                                            <div class="course-card-resume-thumbnail">
                                                <img src="assets/images/course/1.png" />
                                            </div>
                                            <div class="course-card-resume-body">
                                                <h5> Ultimate Web Designer And Developer Course </h5>
                                                <span class="number"> 3/20 </span>
                                                <div class="course-progressbar">
                                                    <div class="course-progressbar-filler" style={{width:"65%"}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>

                    </div>

                </div>

                <div class="section-small">

                    <h4 class="uk-heading-line text-center  mb-5"><span> Your Saves Books </span></h4>

                    <div class="uk-position-relative" tabindex="-1" uk-slider="autoplay: true">

                        <ul
                            class="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-child-width-1-3@s uk-grid">
                            <li>
                                <NavLink to ="/book-description">
                                    <div class="book-card">
                                        <div class="book-cover">
                                            <img src="assets/images/book/vue-2-basics-.jpg" alt="" />
                                        </div>
                                        <div class="book-content">
                                            <h5>Vue.js Basics</h5>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to ="/book-description">
                                    <div class="book-card">
                                        <div class="book-cover">
                                            <img src="assets/images/book/php.jpg" alt="" />
                                        </div>
                                        <div class="book-content">
                                            <h5> PHP for Beginners </h5>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to ="/book-description">
                                    <div class="book-card">
                                        <div class="book-cover">
                                            <img src="assets/images/book/html5.jpg" alt="" />
                                        </div>
                                        <div class="book-content">
                                            <h5>HTML5 Brick Breaker</h5>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to ="/book-description">
                                    <div class="book-card">
                                        <div class="book-cover">
                                            <img src="assets/images/book/win8.jpg" alt="" />
                                        </div>
                                        <div class="book-content">
                                            <h5>WIN8 App Development</h5>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to ="/book-description">
                                    <div class="book-card">
                                        <div class="book-cover">
                                            <img src="assets/images/book/vue-2-basics-.jpg" alt="" />
                                        </div>
                                        <div class="book-content">
                                            <h5>Vue.js Basics</h5>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>

                        <NavLink to="#" activeClassName = "uk-position-center-left uk-position-small uk-hidden-hover slidenav-prev" uk-slider-item="previous"></NavLink>
                        <NavLink to="#" activeClassName = "uk-position-center-right uk-position-small uk-hidden-hover slidenav-next" uk-slider-item="next"></NavLink>

                        <div class="uk-flex uk-flex-center mt-2">
                            <ul class="uk-slider-nav uk-dotnav"></ul>
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

export default Profile1
