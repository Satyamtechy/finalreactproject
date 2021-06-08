import React,{useEffect,useState} from 'react';
import {NavLink} from "react-router-dom";
import ModalVideo from 'react-modal-video' 
import '../../node_modules/react-modal-video/scss/modal-video.scss';

const CourseIntro4 = () => {

    const [isOpen, setOpen] = useState(false)
    const [isOpen1, setOpen1] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)
    const [isOpen4, setOpen4] = useState(false)
    const [isOpen5, setOpen5] = useState(false)
    const [isOpen6, setOpen6] = useState(false)
    const [isOpen7, setOpen7] = useState(false)
    const [isOpen8, setOpen8] = useState(false)
    const [isOpen9, setOpen9] = useState(false)
    const [isOpen10, setOpen10] = useState(false)
    const [isOpen11, setOpen11] = useState(false)
    const [isOpen12, setOpen12] = useState(false)
    const [isOpen13, setOpen13] = useState(false)
    const [isOpen14, setOpen14] = useState(false)
    const [isOpen15, setOpen15] = useState(false)
    const [isOpen16, setOpen16] = useState(false)
    const [isOpen17, setOpen17] = useState(false)

    useEffect(() =>{
        function wishlist(){
            const data={
            id:"4",
            link:"course-intro4",
            title:"HTML",
            pic:"assets/images/course/3.png",
            courseFooter:"HTML",
            price:"100"
        }
        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        };
        fetch('http://localhost:5500/wish',options);
        }
    },[])


    return (
        <div>
            <div class="page-content">



<div class="course-details-wrapper topic-1 uk-light">
    <div class="container p-sm-0">

        <div uk-grid>
            <div class="uk-width-2-3@m">

                <div class="course-details">
                    <h1> Learn Angular From Scratch</h1>
                    <p> Master Angular with the most complete course! Projects
                        Excellent
                        course. we
                        explain the core concepts in angular that are usually glossed over in other
                        courses </p>

                    <div class="course-details-info mt-4">
                        <ul>
                            <li>
                                <div class="star-rating"><span class="avg"> 4.9 </span> <span
                                        class="star"></span><span class="star"></span><span
                                        class="star"></span><span class="star"></span><span class="star"></span>
                                </div>
                            </li>
                            <li> <i class="icon-feather-users"></i> 1200 Enerolled </li>
                        </ul>
                    </div>

                    <div class="course-details-info">

                        <ul>
                            <li> Created by <NavLink to ="#"> Jonathan Madano </NavLink> </li>
                            <li> Last updated 10/2019</li>
                        </ul>

                    </div>
                </div>
                <nav class="responsive-tab style-5">
                    <ul
                        uk-switcher="connect: #course-intro-tab ;animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">
                        <li><NavLink to ="#">Curriculum</NavLink></li>
                        <li><NavLink to ="#">Overview</NavLink></li>
                        <li><NavLink to ="#">FAQ</NavLink></li>
                        <li><NavLink to ="#">Announcement</NavLink></li>
                        <li><NavLink to ="#">Reviews</NavLink></li>
                    </ul>
                </nav>

            </div>
        </div>

    </div>
</div>

<div class="container">

    <div class="uk-grid-large mt-4" uk-grid>
        <div class="uk-width-2-3@m">
            <ul id="course-intro-tab" class="uk-switcher mt-4">

                <li>

                    <ul class="course-curriculum" uk-accordion="multiple: true">

                        <li class="uk-open">
                            <NavLink to ="#" activeClassName ="uk-accordion-title" > Angular Introduction </NavLink>
                            <div class="uk-accordion-content">

                            
                                <ul class="course-curriculum-list">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen1} videoId="L61p2uyiMSo" onClose={() => setOpen1(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen2} videoId="L61p2uyiMSo" onClose={() => setOpen2(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen3} videoId="L61p2uyiMSo" onClose={() => setOpen3(false)} />
                                
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen(true)} > What is Angular </button><span> 23 min </span></li>
                                    <li> <button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen1(true)} >What is a Web page</button> <span> 23 min </span> </li>
                                    <li> <button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen2(true)} >Your First Web Page </button><a href="#trailer-modal" uk-toggle> Preview</a><span> 23 min </span></li>
                                    <li> <button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen3(true)} >Brain Streak </button><span> 23 min </span> </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <NavLink to ="#" activeClassName ="uk-accordion-title" > Your First webpage   </NavLink>
                            <div class="uk-accordion-content">

                                <ul class="course-curriculum-list">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen4} videoId="L61p2uyiMSo" onClose={() => setOpen4(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen5} videoId="L61p2uyiMSo" onClose={() => setOpen5(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen6} videoId="L61p2uyiMSo" onClose={() => setOpen6(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen7} videoId="L61p2uyiMSo" onClose={() => setOpen7(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen8} videoId="L61p2uyiMSo" onClose={() => setOpen8(false)} />
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen4(true)} > Headings</button> <span> 23 min </span></li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen5(true)} > Paragraphs</button> <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen6(true)} > Emphasis and Strong Tag</button> <a href="#trailer-modal" uk-toggle>
                                            Preview
                                        </a> <span> 23 min
                                        </span>
                                    </li>
                                    <li> <button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen7(true)} >Brain Streak </button><span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen8(true)} > Live Preview Feature</button> <span> 23 min </span> </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <NavLink to ="#" activeClassName ="uk-accordion-title" > Some Special Tags  </NavLink>
                            <div class="uk-accordion-content">

                                <ul class="course-curriculum-list">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen9} videoId="L61p2uyiMSo" onClose={() => setOpen9(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen10} videoId="L61p2uyiMSo" onClose={() => setOpen10(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen11} videoId="L61p2uyiMSo" onClose={() => setOpen11(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen12} videoId="L61p2uyiMSo" onClose={() => setOpen12(false)} />
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen9(true)} > The paragraph tag</button> <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen10(true)} > The break tag</button> <a href="#trailer-modal" uk-toggle> Preview </a>
                                        <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen11(true)} > Headings in HTML</button> <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen12(true)} > Bold, Italics Underline</button> <span> 23 min </span>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <NavLink to ="#" activeClassName ="uk-accordion-title" > HTML Advanced level   </NavLink>
                            <div class="uk-accordion-content">

                <ul class="course-curriculum-list">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen13} videoId="L61p2uyiMSo" onClose={() => setOpen13(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen14} videoId="L61p2uyiMSo" onClose={() => setOpen14(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen15} videoId="L61p2uyiMSo" onClose={() => setOpen15(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen16} videoId="L61p2uyiMSo" onClose={() => setOpen16(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen17} videoId="L61p2uyiMSo" onClose={() => setOpen17(false)} />
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen13(true)} > Something to Ponder</button><span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen14(true)} > Tables</button> <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen15(true)} > HTML Entities</button> <a href="#trailer-modal" uk-toggle> Preview
                                        </a><span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen16(true)} > HTML Iframes</button> <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen17(true)} > Some important things</button> <span> 23 min </span> </li>
                                </ul>
                            </div>
                        </li>

                    </ul>

                </li>

                
                <li class="course-description-content">

                    <h4> Description </h4>
                    <p> This course starts from scratch, you neither need to know Angular 1 nor Angular 2!

                        Angular 11 simply is the latest version of Angular 2, you will learn this amazing framework from the ground up in this course!
                        
                        Join the most comprehensive, popular and bestselling Angular course on Udemy and benefit not just from a proven course concept but from a huge community as well! 
                        
                        From Setup to Deployment, this course covers it all! You'll learn all about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing an Angular App with Modules and Offline Compilation and much more - and in the end: You'll learn how to deploy an application!</p>
                    <p> But that's not all! This course will also show you how to use the Angular CLI and feature a complete project, which allows you to practice the things learned throughout the course!

                        And if you do get stuck, you benefit from an extremely fast and friendly support - both via direct messaging or discussion. You have my word! ;-)
                        
                        Angular is one of the most modern, performance-efficient and powerful frontend frameworks you can learn as of today. It allows you to build great web apps which offer awesome user experiences! Learn all the fundamentals you need to know to get started developing Angular applications right away.</p>


                    <h4> What you’ll learn </h4>
                        <div class="uk-child-width-1-2@s" uk-grid>
                            <div>
                                <ul class="list-2">
                                    <li>Develop modern, complex, responsive and scalable web applications with Angular 11 </li>
                                    <li>Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer</li>
                                    <li>Build a portfolio website</li>
                                    <li>Responsive Designs</li>
                                </ul>
                            </div>
                            <div>
                                <ul class="list-2">
                                    <li>Fully understand the architecture behind an Angular application and how to use it</li>
                                    <li>Create single-page applications with one of the most modern JavaScript frameworks out there</li>
                                    <li>Start building beautiful websites</li>
                                </ul>
                            </div>
                        </div>


                        <h4> Requirements </h4>
                        <ul class="list-1">
                            <li>NO Angular 1 or Angular 2 knowledge is required!</li>
                            <li>Basic HTML and CSS knowledge helps, but isn't a must-have</li>
                            <li>Prior TypeScript knowledge also helps but isn't necessary to benefit from this course</li>
                        </ul>

                        <h4> Here is exactly what we cover in this course: </h4>
                        <p> This course will teach you all the fundamentals about modules, directives, components, databinding, routing, HTTP access and much more! We will take a lot of deep dives and each section is backed up with a real project. All examples showcase the features Angular offers and how to apply them correctly.</p>

                        <p> Specifically you will learn:

                            Which architecture Angular uses
                            
                            How to use TypeScript to write Angular applications
                            
                            All about directives and components, including the creation of custom directives/ components
                            
                            How databinding works
                            
                            All about routing and handling navigation
                            
                            What Pipes are and how to use them
                            
                            How to access the Web (e.g. RESTful servers)
                            
                            What dependency injection is and how to use it
                            
                            How to use Modules in Angular
                            
                            How to optimize your (bigger) Angular Application
                            
                            An introduction to NgRx and complex state management
                            
                            We will build a major project in this course so that you can practice all concepts
                            
                            and so much more!</p>

                        <p> Pay once, benefit a lifetime!

                            Don’t lose any time, gain an edge and start developing now!</p>


                </li>

                
                <li>

                    <h4 class="my-4"> Course Faq</h4>

                    <ul class="course-faq" uk-accordion>

                        <li class="uk-open">
                            <NavLink to ="#" activeClassName ="uk-accordion-title" > Html Introduction </NavLink>
                            <div class="uk-accordion-content">
                                <p> The primary goal of this quick start guide is to introduce you to
                                    Unreal
                                    Engine 4`s (UE4) development environment. By the end of this guide,
                                    you`ll
                                    know how to set up and develop C++ Projects in UE4. This guide shows
                                    you
                                    how
                                    to create a new Unreal Engine project, add a new C++ class to it,
                                    compile
                                    the project, and add an instance of a new class to your level. By
                                    the
                                    time
                                    you reach the end of this guide, you`ll be able to see your
                                    programmed
                                    Actor
                                    floating above a table in the level. </p>
                            </div>
                        </li>

                        <li>
                            <NavLink to ="#" activeClassName ="uk-accordion-title" > Your First webpage</NavLink>
                            <div class="uk-accordion-content">
                                <p> The primary goal of this quick start guide is to introduce you to
                                    Unreal
                                    Engine 4`s (UE4) development environment. By the end of this guide,
                                    you`ll
                                    know how to set up and develop C++ Projects in UE4. This guide shows
                                    you
                                    how
                                    to create a new Unreal Engine project, add a new C++ class to it,
                                    compile
                                    the project, and add an instance of a new class to your level. By
                                    the
                                    time
                                    you reach the end of this guide, you`ll be able to see your
                                    programmed
                                    Actor
                                    floating above a table in the level. </p>
                            </div>
                        </li>

                        <li>
                            <NavLink to ="#" activeClassName ="uk-accordion-title" > Some Special Tags </NavLink>
                            <div class="uk-accordion-content">
                                <p> The primary goal of this quick start guide is to introduce you to
                                    Unreal
                                    Engine 4`s (UE4) development environment. By the end of this guide,
                                    you`ll
                                    know how to set up and develop C++ Projects in UE4. This guide shows
                                    you
                                    how
                                    to create a new Unreal Engine project, add a new C++ class to it,
                                    compile
                                    the project, and add an instance of a new class to your level. By
                                    the
                                    time
                                    you reach the end of this guide, you`ll be able to see your
                                    programmed
                                    Actor
                                    floating above a table in the level. </p>
                            </div>
                        </li>

                        <li>
                            <NavLink to ="#" activeClassName ="uk-accordion-title" > Html Introduction </NavLink>
                            <div class="uk-accordion-content">
                                <p> The primary goal of this quick start guide is to introduce you to
                                    Unreal
                                    Engine 4`s (UE4) development environment. By the end of this guide,
                                    you`ll
                                    know how to set up and develop C++ Projects in UE4. This guide shows
                                    you
                                    how
                                    to create a new Unreal Engine project, add a new C++ class to it,
                                    compile
                                    the project, and add an instance of a new class to your level. By
                                    the
                                    time
                                    you reach the end of this guide, you`ll be able to see your
                                    programmed
                                    Actor
                                    floating above a table in the level. </p>
                            </div>
                        </li>

                    </ul>

                </li>

                
                <li>
                    <h4> Announcement </h4>

                    <div class="user-details-card">
                        <div class="user-details-card-avatar">
                            <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                        </div>
                        <div class="user-details-card-name">
                            Maximilian Schwarzmüller <span> Instructor <span> 1 year ago </span> </span>
                        </div>
                    </div>



                    <article class="uk-article">

                        <p class="lead"> Nam liber tempor cum soluta nobis eleifend option
                            congue </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia
                            deserunt mollit anim id est laborum.</p>

                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh
                            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad
                            minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                            ut
                            aliquip ex ea commodo consequat. Nam liber tempor cum soluta nobis eleifend
                            option congue nihil imperdiet doming id quod mazim placerat facer possim
                            assum.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh
                            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad
                            minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                            ut
                            aliquip ex ea commodo consequat.</p>


                    </article>
                </li>

               
                <li>

                    <div class="review-summary">
                        <h4 class="review-summary-title"> Student feedback </h4>
                        <div class="review-summary-container">
                            <div class="review-summary-avg">
                                <div class="avg-number">
                                    4.8
                                </div>
                                <div class="review-star">
                                    <div class="star-rating"><span class="star"></span><span
                                            class="star"></span><span class="star"></span><span
                                            class="star"></span><span class="star half"></span></div>
                                </div>
                                <span>Course Rating</span>
                            </div>


                            <div class="review-summary-rating">
                                <div class="review-summary-rating-wrap">
                                    <div class="review-bars">
                                        <div class="full_bar">
                                            <div class="bar_filler" style={{width:"95%"}}></div>
                                        </div>
                                    </div>
                                    <div class="review-stars">
                                        <div class="star-rating"><span class="star"></span><span
                                                class="star"></span><span class="star"></span><span
                                                class="star"></span><span class="star"></span></div>
                                    </div>
                                    <div class="review-avgs">
                                        95 %
                                    </div>
                                </div>
                                <div class="review-summary-rating-wrap">
                                    <div class="review-bars">
                                        <div class="full_bar">
                                            <div class="bar_filler" style={{width:"80%"}}></div>
                                        </div>
                                    </div>
                                    <div class="review-stars">
                                        <div class="star-rating"><span class="star"></span><span
                                                class="star"></span><span class="star"></span><span
                                                class="star"></span><span class="star empty"></span>
                                        </div>
                                    </div>
                                    <div class="review-avgs">
                                        80 %
                                    </div>
                                </div>
                                <div class="review-summary-rating-wrap">
                                    <div class="review-bars">
                                        <div class="full_bar">
                                            <div class="bar_filler" style={{width:"60%"}}></div>
                                        </div>
                                    </div>
                                    <div class="review-stars">
                                        <div class="star-rating"><span class="star"></span><span
                                                class="star"></span><span class="star"></span><span
                                                class="star empty"></span><span class="star empty"></span>
                                        </div>
                                    </div>
                                    <div class="review-avgs">
                                        60 %
                                    </div>
                                </div>
                                <div class="review-summary-rating-wrap">
                                    <div class="review-bars">
                                        <div class="full_bar">
                                            <div class="bar_filler" style={{width:"45%"}}></div>
                                        </div>
                                    </div>
                                    <div class="review-stars">
                                        <div class="star-rating"><span class="star"></span><span
                                                class="star"></span><span class="star empty"></span><span
                                                class="star empty"></span><span class="star empty"></span>
                                        </div>
                                    </div>
                                    <div class="review-avgs">
                                        45 %
                                    </div>
                                </div>
                                <div class="review-summary-rating-wrap">
                                    <div class="review-bars">
                                        <div class="full_bar">
                                            <div class="bar_filler" style={{width:"25%"}}></div>
                                        </div>
                                    </div>
                                    <div class="review-stars">
                                        <div class="star-rating"><span class="star"></span><span
                                                class="star empty"></span><span class="star empty"></span><span
                                                class="star empty"></span><span class="star empty"></span>
                                        </div>
                                    </div>
                                    <div class="review-avgs">
                                        25 %
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>

                    <div class="comments">
                        <h4>Reviews <span class="comments-amount"> (4610) </span> </h4>

                        <ul>
                            <li>
                                <div class="comments-avatar"><img src="assets/images/avatars/avatar-2.jpg" alt="" />
                                </div>
                                <div class="comment-content">
                                    <div class="comment-by">Stella Johnson<span>Student</span>
                                        <div class="comment-stars">
                                            <div class="star-rating"><span class="star"></span><span
                                                    class="star"></span><span class="star"></span><span
                                                    class="star"></span><span class="star"></span></div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                        diam
                                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                        erat
                                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                        tation
                                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                        consequat.
                                    </p>
                                    <div class="comment-footer">
                                        <span> Was this review helpful? </span>
                                        <button> Yes </button>
                                        <button> No </button>
                                        <NavLink to ="#"> Report</NavLink>
                                    </div>
                                </div>

                            </li>

                            <li>
                                <div class="comments-avatar"><img src="assets/images/avatars/avatar-3.jpg" alt="" />
                                </div>
                                <div class="comment-content">
                                    <div class="comment-by"> Adrian Mohani <span>Instructor </span>
                                        <div class="comment-stars">
                                            <div class="star-rating"><span class="star"></span><span
                                                    class="star"></span><span class="star"></span><span
                                                    class="star"></span><span class="star half"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                        ullamcorper
                                        suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nam
                                        liber
                                        tempor cum soluta nobis eleifend
                                    </p>
                                    <div class="comment-footer">
                                        <span> Was this review helpful? </span>
                                        <button> Yes </button>
                                        <button> No </button>
                                        <NavLink to ="#"> Report</NavLink>
                                    </div>
                                </div>

                            </li>

                            <li>
                                <div class="comments-avatar"><img src="assets/images/avatars/avatar-3.jpg" alt="" />
                                </div>
                                <div class="comment-content">
                                    <div class="comment-by"> Adrian Mohani <span>Student</span>
                                        <div class="comment-stars">
                                            <div class="star-rating"><span class="star"></span><span
                                                    class="star"></span><span class="star"></span><span
                                                    class="star"></span><span class="star"></span></div>
                                        </div>
                                    </div>
                                    <p> Nam liber tempor cum soluta nobis eleifend option congue nihil
                                        imperdiet doming id quod mazim placerat facer possim assum.
                                        Lorem
                                        ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                        nonummy
                                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                        volutpat.
                                    </p>
                                    <div class="comment-footer">
                                        <span> Was this review helpful? </span>
                                        <button> Yes </button>
                                        <button> No </button>
                                        <NavLink to ="#"> Report</NavLink>
                                    </div>
                                </div>

                            </li>

                            <li>
                                <div class="comments-avatar"><img src="assets/images/avatars/avatar-2.jpg" alt="" />
                                </div>
                                <div class="comment-content">
                                    <div class="comment-by">Stella Johnson<span>Student</span>
                                        <div class="comment-stars">
                                            <div class="star-rating"><span class="star"></span><span
                                                    class="star"></span><span class="star"></span><span
                                                    class="star"></span><span class="star"></span></div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                        diam
                                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                        erat
                                        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                        tation
                                        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                        consequat.
                                    </p>
                                    <div class="comment-footer">
                                        <span> Was this review helpful? </span>
                                        <button> Yes </button>
                                        <button> No </button>
                                        <NavLink to ="#"> Report</NavLink>
                                    </div>
                                </div>

                            </li>

                        </ul>

                    </div>

                    <div class="comments">
                        <h3>Submit Review </h3>
                        <ul>
                            <li>
                                <div class="comments-avatar"><img src="assets/images/avatars/avatar-2.jpg" alt="" />
                                </div>
                                <div class="comment-content">
                                    <form class="uk-grid-small" uk-grid>
                                        <div class="uk-width-1-2@s">
                                            <label class="uk-form-label">Name</label>
                                            <input class="uk-input" type="text" placeholder="Name" />
                                        </div>
                                        <div class="uk-width-1-2@s">
                                            <label class="uk-form-label">Email</label>
                                            <input class="uk-input" type="text" placeholder="Email" />
                                        </div>
                                        <div class="uk-width-1-1@s">
                                            <label class="uk-form-label">Comment</label>
                                            <textarea class="uk-textarea"
                                                placeholder="Enter Your Comments her..."
                                                style={{height:"160px"}}></textarea>
                                        </div>
                                        <div class="uk-grid-margin">
                                            <input type="submit" value="submit" class="btn btn-default" />
                                        </div>
                                    </form>

                                </div>
                            </li>
                        </ul>
                    </div>

                </li>

            </ul>
        </div>

        <div class="uk-width-1-3@m">
            <div class="course-card-trailer" uk-sticky="top: 10 ;offset:105 ; media: @m ; bottom:true">

                <div class="course-thumbnail">
                    <img src="assets/images/course/1.png" alt="" />
                    <a class="play-button-trigger show" href="#trailer-modal" uk-toggle> </a>
                </div>

                <div id="trailer-modal" uk-modal>
                    <div class="uk-modal-dialog">
                        <button class="uk-modal-close-default mt-2  mr-1" type="button" uk-close></button>
                        <div class="uk-modal-header">
                            <h4> Trailer video </h4>
                        </div>
                        <div class="video-responsive">
                            <iframe src="https://www.youtube.com/embed/nOCXXHGMezU" class="uk-padding-remove"
                                uk-video="automute: true" frameborder="0" allowfullscreen
                                uk-responsive></iframe>
                        </div>

                        <div class="uk-modal-body">
                            <h3>Build Responsive Websites </h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident,
                                sunt
                                in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>

                <div class="p-3">

                    <p class="my-3 text-center">
                        <span class="uk-h1"> $12.99 </span>
                        <s class="uk-h4 text-muted"> $19.99 </s>
                        <s class="uk-h6 ml-1 text-muted"> $32.99 </s>
                    </p>

                    <p> ! Hour Left This price</p>

                    <div class="uk-child-width-1-2 uk-grid-small mb-4" uk-grid>
                        <div>
                            <NavLink to ="/course-resume"
                                activeClassName="uk-width-1-1 btn btn-default transition-3d-hover"> 
                                <i class="uil-play"></i> Start </NavLink>
                        </div>
                        <div >
                            <button class="uk-width-1-1 btn btn-default transition-3d-hover" onclick="wishlist()">WishList</button>
                        </div>
                        <div>
                            <a class="uk-width-1-1 btn btn-default transition-3d-hover" href="http://localhost:5500/payments?price=100&link=course-intro4.html&title=JavaScript& pic1=assets/images/course/2.png&courseFooter=javascript" >Buy</a>
                        </div>
                    </div>

                    <p class="uk-text-bold"> This Course Incluce </p>

                    <div class="uk-child-width-1-2 uk-grid-small" uk-grid>
                        <div>
                            <span><i class="uil-youtube-alt"></i> 28 hours video</span>
                        </div>
                        <div>
                            <span> <i class="uil-award"></i> Certificate </span>
                        </div>
                        <div>
                            <span> <i class="uil-file-alt"></i> 12 Article </span>
                        </div>
                        <div>
                            <span> <i class="uil-video"></i> Watch Offline </span>
                        </div>
                        <div>
                            <span> <i class="uil-award"></i> Certificate </span>
                        </div>
                        <div>
                            <span> <i class="uil-clock-five"></i> Lifetime access </span>
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

export default CourseIntro4
