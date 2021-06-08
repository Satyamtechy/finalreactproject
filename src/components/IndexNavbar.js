import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const IndexNavbar = () => {
    useEffect(() =>{
        (function (window, document, undefined) {
            'use strict';
            if (!('localStorage' in window)) return;
            var nightMode = localStorage.getItem('gmtNightMode');
            if (nightMode) {
                document.documentElement.class += ' night-mode';
            }
        })(window, document);
  
  
        (function (window, document, undefined) {
  
            'use strict';
  
            // Feature test
            if (!('localStorage' in window)) return;
  
            // Get our newly insert toggle
            var nightMode = document.querySelector('#night-mode');
            if (!nightMode) return;
  
            // When clicked, toggle night mode on or off
            nightMode.addEventListener('click', function (event) {
                event.preventDefault();
                document.documentElement.classList.toggle('night-mode');
                if (document.documentElement.classList.contains('night-mode')) {
                    localStorage.setItem('gmtNightMode', true);
                    return;
                }
                localStorage.removeItem('gmtNightMode');
            }, false);
  
        })(window, document);
    },[])
    
    return (  
       <>
        <header class="header header-horizontal header bg-grey uk-light">
        <style>
    {`
    button a{
            color: aliceblue;
        }
        button a:hover{
            color: gainsboro;
        }
    `}
    </style>

            <div class="container">
                <nav uk-navbar class="uk-navbar">  
                    <div class="uk-navbar-left">

                        <nav id="navigation">
                            <ul id="responsive">
                                <li><NavLink to="/dashboard" >Home</NavLink></li>
                                <li><NavLink to="#">Explore</NavLink>
                                    <ul class="dropdown-nav nav-large nav-courses">

                                        <li><NavLink to="/course-card">
                                                <i class="icon-brand-js-square" style={{color:'#f7df1e'}}></i> JavaScript
                                            </NavLink>
                                        </li>
                                        <li><NavLink to="/course-card">
                                                <i class="icon-brand-node-js" style={{color: 'green'}}></i> NodeJS </NavLink>
                                        </li>
                                        <li><NavLink to="/course-card">
                                                <i class="icon-brand-angular" style={{color:'#dd0031'}}></i> Angular </NavLink>
                                        </li>
                                        <li><NavLink to="/course-card">
                                                <i class="icon-brand-css3-alt" style={{color: 'blue'}}></i> CSS </NavLink></li>
                                        <li><NavLink to="/course-card">
                                                <i class="icon-brand-html5" style={{color:'#f0653f'}}></i> HTML5 </NavLink></li>
                                        <li><NavLink to="/course-card">
                                                <i class="icon-brand-react" style={{color:'#67fcef'}}></i> React </NavLink></li>
                                        <li><NavLink to="/course-card">
                                                <i class="icon-brand-vuejs" style={{color: 'green'}}></i> Vue JS </NavLink></li>
                                        <li><NavLink to="/course-card">
                                                <i class="icon-brand-python" style={{color: '#b1b172'}}></i> Python </NavLink>
                                        </li>

                                    </ul>
                                </li>
                                <li><NavLink to ="/course-path" activeclass="nav-active">Track</NavLink> </li>
                                <li><NavLink to ="/book">Book</NavLink> </li>
                                <li><NavLink to ="/blog-2">Blog</NavLink> </li>
                                <li><NavLink to ="#">Pages</NavLink>
                                    <ul class="dropdown-nav">
                                        <li><NavLink to ="/page-pricing">Pricing</NavLink> </li>
                                        <li><NavLink to ="/page-Privacy">Privacy</NavLink></li>
                                        <li><NavLink to ="/page-term">Terms</NavLink></li>
                                        <li><NavLink to ="/page-contact">Contact</NavLink></li>
                                        <li><NavLink to ="/#">Account</NavLink>
                                            <ul class="dropdown-nav">
                                                <li><NavLink to ="/page-login">login</NavLink></li>
                                                <li><NavLink to ="/page-register">register</NavLink></li>
                                                <li><NavLink to ="/page-simple-login">Simple login</NavLink></li>
                                                <li><NavLink to ="/page-simple-register">Simple register</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to ="#">Development</NavLink>
                                            <ul class="dropdown-nav">
                                                <li><NavLink to ="/page-elements">Elements</NavLink></li>
                                                <li><NavLink to ="/page-components">Components</NavLink></li>
                                                <li><NavLink to ="/page-icons">Icons</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                       
                    </div>


                   

                    <div class="uk-navbar-right">

                        <div class="header-widget">

                            <div class="searchbox uk-visible@s">

                                <input class="uk-search-input" type="search" placeholder="Search..." />
                                <button class="btn-searchbox"> </button>

                            </div>
                           
                            <div uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
                                class="dropdown-search">
                                <div class="erh BR9 MIw"
                                    style={{top: '-27px',position: 'absolute' , left: '24px',fill: 'currentColor',height: '24px',pointerEvents: 'none',color: '#f5f5f5'}}>
                                    <svg width="22" height="22">
                                        <path d="M0 24 L12 12 L24 24"></path>
                                    </svg></div>
                                
                                <ul class="dropdown-search-list">
                                    <li class="list-title">
                                        Recent Searches
                                    </li>
                                    <li>
                                        <NavLink to="/course-intro">
                                            Ultimate Web Designer And Developer Course</NavLink>
                                    </li>
                                    <li><NavLink to="/course-intro">
                                            The Complete Ruby on Rails Developer Course </NavLink>
                                    </li>
                                    <li><NavLink to="/course-intro">
                                            Bootstrap 4 From Scratch With 5 Real Projects </NavLink>
                                    </li>
                                    <li> <NavLink to="/course-intro">
                                            The Complete 2020 Web Development Bootcamp </NavLink>
                                    </li>
                                    <li class="menu-divider" />
                                    <li><NavLink to="/course-intro">
                                            Bootstrap 4 From Scratch With 5 Real Projects </NavLink>
                                    </li>
                                    <li> <NavLink to="/course-intro">
                                            The Complete 2020 Web Development Bootcamp </NavLink>
                                    </li>
                                </ul>

                            </div>



                           
                            <span class="icon-feather-x icon-small uk-hidden@s"
                                uk-toggle="target: .header-widget ; cls: is-active"> </span>


                            <NavLink to ="#" activeclass="header-widget-icon"
                                uk-tooltip="title: My Courses ; pos: bottom ;offset:21">
                                <i class="uil-youtube-alt"></i>
                            </NavLink>

                           
                            <div uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
                                class="dropdown-notifications my-courses-dropdown">

                               
                                <div class="dropdown-notifications-headline">
                                    <h4>Your Courses</h4>
                                    <NavLink to ="#">
                                        <i class="icon-feather-settings"
                                            uk-tooltip="title: Notifications settings ; pos: left"></i>
                                    </NavLink>
                                </div>

                               
                                <div class="dropdown-notifications-content" data-simplebar>

                                   
                                    <ul>
                                        <li class="notifications-not-read">
                                            <NavLink to="/course-intro">
                                                <span class="notification-image">
                                                    <img src="assets/images/course/1.png" alt="" /> </span>
                                                <span class="notification-text">
                                                    <span class="course-title">Ultimate Web Designer & Web Developer
                                                    </span>
                                                    <span class="course-number">6/35 </span>
                                                    <span class="course-progressbar">
                                                        <span class="course-progressbar-filler"
                                                            style={{width:'95%'}}></span>
                                                    </span>
                                                </span>

                                             
                                                <span class="btn-option">
                                                    <i class="icon-feather-more-vertical"></i>
                                                </span>
                                                <div class="dropdown-option-nav"
                                                    uk-dropdown="pos: bottom-right ;mode : hover">
                                                    <ul>
                                                        <li>
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
                                                    </ul>
                                                </div>
                                            </NavLink>

                                        </li>
                                        <li>
                                            <NavLink to="/course-intro">
                                                <span class="notification-image">
                                                    <img src="assets/images/course/3.png" alt="" /> </span>
                                                <span class="notification-text">
                                                    <span class="course-title">The Complete JavaScript Course Build Real
                                                        Projects !</span>
                                                    <span class="course-number">6/35 </span>
                                                    <span class="course-progressbar">
                                                        <span class="course-progressbar-filler"
                                                            style={{width:'95%'}}></span>
                                                    </span>
                                                </span>

                                             
                                                <span class="btn-option">
                                                    <i class="icon-feather-more-vertical"></i>
                                                </span>
                                                <div class="dropdown-option-nav"
                                                    uk-dropdown="pos: bottom-right ;mode : hover">
                                                    <ul>
                                                        <li>
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
                                                    </ul>
                                                </div>

                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/course-intro">
                                                <span class="notification-image">
                                                    <img src="assets/images/course/2.png" alt="" /> </span>
                                                <span class="notification-text">
                                                    <span class="course-title">Learn Angular Fundamentals From The
                                                        Beginning</span>
                                                    <span class="course-number">6/35 </span>
                                                    <span class="course-progressbar">
                                                        <span class="course-progressbar-filler"
                                                            style={{width:'95%'}}></span>
                                                    </span>
                                                </span>

                                                   <span class="btn-option">
                                                    <i class="icon-feather-more-vertical"></i>
                                                </span>
                                                <div class="dropdown-option-nav"
                                                    uk-dropdown="pos: bottom-right ;mode : hover">
                                                    <ul>
                                                        <li>
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
                                                    </ul>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/course-intro">
                                                <span class="notification-image">
                                                    <img src="assets/images/course/1.png" alt="" /> </span>
                                                <span class="notification-text">
                                                    <span class="course-title">Ultimate Web Designer & Web Developer
                                                    </span>
                                                    <span class="course-number">6/35 </span>
                                                    <span class="course-progressbar">
                                                        <span class="course-progressbar-filler"
                                                            style={{width:'95%'}}></span>
                                                    </span>
                                                </span>

                                               
                                                <span class="btn-option">
                                                    <i class="icon-feather-more-vertical"></i>
                                                </span>
                                                <div class="dropdown-option-nav"
                                                    uk-dropdown="pos: top-right ;mode : hover">
                                                    <ul>
                                                        <li>
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
                                                    </ul>
                                                </div>
                                            </NavLink>
                                        </li>
                                    </ul>

                                </div>
                                <div class="dropdown-notifications-footer">
                                    <NavLink to ="#"> sell all</NavLink>
                                </div>
                            </div>

                            

                            <NavLink to ="#" activeclass="header-widget-icon"
                                uk-tooltip="title: Notificiation ; pos: bottom ;offset:21">
                                <i class="uil-bell"></i>
                                <span>4</span>
                            </NavLink>

                        
                            <div uk-dropdown="pos: top-right;mode:click ; animation: uk-animation-slide-bottom-small"
                                class="dropdown-notifications">

                          
                                <div class="dropdown-notifications-headline">
                                    <h4>Notifications </h4>
                                    <NavLink to ="#">
                                        <i class="icon-feather-settings"
                                            uk-tooltip="title: Notifications settings ; pos: left"></i>
                                    </NavLink>
                                </div>

                              
                                <div class="dropdown-notifications-content" data-simplebar>

                              
                                    <ul>
                                        <li class="notifications-not-read">
                                            <NavLink to ="#">
                                                <span class="notification-icon btn btn-soft-danger disabled">
                                                    <i class="icon-feather-thumbs-up"></i></span>
                                                <span class="notification-text">
                                                    <strong>Adrian Mohani</strong> Like Your Comment On Course
                                                    <span class="text-primary">Javascript Introduction </span>
                                                    <br /> <span class="time-ago"> 9 hours ago </span>
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to ="#">
                                                <span class="notification-icon btn btn-soft-primary disabled">
                                                    <i class="icon-feather-message-circle"></i></span>
                                                <span class="notification-text">
                                                    <strong>Stella Johnson</strong> Replay Your Comments in
                                                    <span class="text-primary">Programming for Games</span>
                                                    <br /> <span class="time-ago"> 12 hours ago </span>
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to ="#">
                                                <span class="notification-icon btn btn-soft-success disabled">
                                                    <i class="icon-feather-star"></i></span>
                                                <span class="notification-text">
                                                    <strong>Alex Dolgove</strong> Added New Review In Course
                                                    <span class="text-primary">Full Stack PHP Developer</span>
                                                    <br /> <span class="time-ago"> 19 hours ago </span>
                                                </span>
                                            </NavLink>
                                        </li>
                                        <li class="notifications-not-read">
                                            <NavLink to ="#">
                                                <span class="notification-icon btn btn-soft-danger disabled">
                                                    <i class="icon-feather-share-2"></i></span>
                                                <span class="notification-text">
                                                    <strong>Jonathan Madano</strong> Shared Your Discussion On Course
                                                    <span class="text-primary">Css Flex Box </span>
                                                    <br /> <span class="time-ago"> Yesterday </span>
                                                </span>
                                            </NavLink>
                                        </li>
                                    </ul>

                                </div>


                            </div>


                            

                            <NavLink to ="#" activeclass="header-widget-icon" uk-tooltip="title: Message ; pos: bottom ;offset:21">
                                <i class="uil-envelope-alt"></i>
                                <span>1</span>
                            </NavLink>

                        
                            <div uk-dropdown=" pos: top-right;mode:click" class="dropdown-notifications">

                           
                                <div class="dropdown-notifications-headline">
                                    <h4>Messages</h4>
                                    <NavLink to ="#">
                                        <i class="icon-feather-settings"
                                            uk-tooltip="title: Message settings ; pos: left"></i>
                                    </NavLink>
                                </div>

                           
                                <div class="dropdown-notifications-content" data-simplebar>

                                
                                    <ul>
                                        <li class="notifications-not-read">
                                            <NavLink to ="#">
                                                <span class="notification-avatar">
                                                    <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                                                </span>
                                                <div class="notification-text notification-msg-text">
                                                    <strong>Jonathan Madano</strong>
                                                    <p>Okay.. Thanks for The Answer I will be waiting for your...
                                                    </p>
                                                    <span class="time-ago"> 2 hours ago </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to ="#">
                                                <span class="notification-avatar">
                                                    <img src="assets/images/avatars/avatar-3.jpg" alt="" />
                                                </span>
                                                <div class="notification-text notification-msg-text">
                                                    <strong>Stella Johnson</strong>
                                                    <p> Alex will explain you how to keep the HTML structure and all
                                                        that...</p>
                                                    <span class="time-ago"> 7 hours ago </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to ="#">
                                                <span class="notification-avatar">
                                                    <img src="assets/images/avatars/avatar-1.jpg" alt="" />
                                                </span>
                                                <div class="notification-text notification-msg-text">
                                                    <strong>Alex Dolgove</strong>
                                                    <p> Alia Joseph just joined Messenger! Be the first to send a
                                                        welcome message..</p>
                                                    <span class="time-ago"> 19 hours ago </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to ="#">
                                                <span class="notification-avatar">
                                                    <img src="assets/images/avatars/avatar-4.jpg" alt="" />
                                                </span>
                                                <div class="notification-text notification-msg-text">
                                                    <strong>Adrian Mohani</strong>
                                                    <p> Okay.. Thanks for The Answer I will be waiting for your...
                                                    </p>
                                                    <span class="time-ago"> Yesterday </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                    </ul>

                                </div>
                                <div class="dropdown-notifications-footer">
                                    <NavLink to ="#"> sell all <i class="icon-line-awesome-long-arrow-right"></i> </NavLink>
                                </div>
                            </div>


                            

                            <NavLink to ="#" activeclass="header-widget-icon profile-icon">
                                <img src="assets/images/avatars/avatar-2.jpg" alt="" class="header-profile-icon" />
                            </NavLink>

                            <div uk-dropdown="pos: top-right ;mode:click" class="dropdown-notifications small">

                          
                                <NavLink to ="/profile-1">

                                    <div class="dropdown-user-details">
                                        <div class="dropdown-user-avatar">
                                            <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                                        </div>
                                        <div class="dropdown-user-name">
                                            Richard Ali <span>Students</span>
                                        </div>
                                    </div>

                                </NavLink>

                               

                                <ul class="dropdown-user-menu">
                                    <li>
                                        <NavLink to ="#">
                                            <i class="icon-material-outline-dashboard"></i> Dashboard</NavLink>
                                    </li>
                                    <li><NavLink to ="#">
                                            <i class="icon-feather-bookmark"></i> Bookmark </NavLink>
                                    </li>
                                    <li><NavLink to ="profile-edit.html">
                                            <i class="icon-feather-settings"></i> Account Settings</NavLink>
                                    </li>
                                    <li><NavLink to ="#" style={{color:'#62d76b'}}>
                                            <i class="icon-feather-star"></i> Upgrade To Premium</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to ="#" id="night-mode" class="btn-night-mode">
                                            <i class="icon-feather-moon"></i> Night mode
                                            <span class="btn-night-mode-switch">
                                                <span class="uk-switch-button"></span>
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li class="menu-divider" />
                                    <li><NavLink to ="#">
                                            <i class="icon-feather-help-circle"></i> Help</NavLink>
                                    </li>
                                    <li><NavLink to ="/page-login">
                                            <i class="icon-feather-log-out"></i> Sing Out</NavLink>
                                    </li>
                                </ul>


                            </div>


                        </div>



                      
                        <NavLink to ="#" activeclass="uk-navbar-toggle uk-hidden@s"
                            uk-toggle="target: .nav-overlay; animation: uk-animation-fade">
                            <i class="uil-search icon-small"></i>
                        </NavLink>

                      
                        <NavLink to ="#" activeclass="uil-user icon-small uk-hidden@s"
                            uk-toggle="target: .header-widget ; cls: is-active">
                        </NavLink>

                    </div>
                   


                </nav>

            </div>
           

        </header>

       
        <div class="nav-overlay uk-navbar-left uk-position-relative uk-flex-1 bg-grey uk-light p-2" hidden
            style={{zIndex: '10000'}}>
            <div class="uk-navbar-item uk-width-expand" style={{minHeight:'60px'}}>
                <form class="uk-search uk-search-navbar uk-width-1-1">
                    <input class="uk-search-input" type="search" placeholder="Search..." autofocus />
                </form>
            </div>
            <NavLink to ="#" activeclass="uk-navbar-toggle" uk-close uk-toggle="target: .nav-overlay; animation: uk-animation-fade"></NavLink>
        </div>
</>
    )
}

export default IndexNavbar
