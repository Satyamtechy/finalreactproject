import React,{useEffect,useState} from 'react';
import {NavLink} from "react-router-dom";
import ModalVideo from 'react-modal-video' 
import '../../node_modules/react-modal-video/scss/modal-video.scss';

const CourseIntro3 = () => {

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

    useEffect(() => {
        function wishlist(){
            const data={
            id:"3",
            link:"course-intro3",
            title:"Angular",
            pic:"assets/images/course/4.png",
            courseFooter:"Angular",
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
                    <h1> Learn Css From Scratch</h1>
                    <p> Master Css with the most complete course! Projects
                        Excellent
                        course. we
                        explain the core concepts in css that are usually glossed over in other
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
                            <NavLink to ="#" activeClassName ="uk-accordion-title"> Css Introduction </NavLink>
                            <div class="uk-accordion-content">

                                <ul class="course-curriculum-list">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen1} videoId="L61p2uyiMSo" onClose={() => setOpen1(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen2} videoId="L61p2uyiMSo" onClose={() => setOpen2(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen3} videoId="L61p2uyiMSo" onClose={() => setOpen3(false)} />
                                
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen(true)} > Introduction </button><span> 23 min </span></li>
                                    <li> <button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen1(true)} >What is a Css?</button> <span> 23 min </span> </li>
                                    <li> <button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen2(true)} >CSS History, Present & Future </button><a href="#trailer-modal" uk-toggle> Preview</a><span> 23 min </span></li>
                                    <li> <button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen3(true)} >Brain Streak </button><span> 23 min </span> </li>
                                </ul>

                            </div>
                        </li>

                        <li>
                            <NavLink to ="#" activeClassName ="uk-accordion-title"> Diving Into the Basics of CSS   </NavLink>
                            <div class="uk-accordion-content">

                        
                                <ul class="course-curriculum-list">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen4} videoId="L61p2uyiMSo" onClose={() => setOpen4(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen5} videoId="L61p2uyiMSo" onClose={() => setOpen5(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen6} videoId="L61p2uyiMSo" onClose={() => setOpen6(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen7} videoId="L61p2uyiMSo" onClose={() => setOpen7(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen8} videoId="L61p2uyiMSo" onClose={() => setOpen8(false)} />
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen4(true)} > Module Introduction </button><span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen5(true)} > Understanding the Course project Setup</button> <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen6(true)} > Adding CSS to our Project with Inline Styles</button> <a href="#trailer-modal" uk-toggle> Preview
                                        </a><span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen7(true)} >Brain Streak</button> <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen8(true)} > Live Preview Feature </button> <span> 23 min </span> </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <NavLink to ="#" activeClassName ="uk-accordion-title"> Diving Deeper into CSS  </NavLink>
                            <div class="uk-accordion-content">

                                <ul class="course-curriculum-list">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen9} videoId="L61p2uyiMSo" onClose={() => setOpen9(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen10} videoId="L61p2uyiMSo" onClose={() => setOpen10(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen11} videoId="L61p2uyiMSo" onClose={() => setOpen11(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen12} videoId="L61p2uyiMSo" onClose={() => setOpen12(false)} />
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen9(true)} > Module Introduction</button> <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen10(true)} > Introducing the CSS Box Model</button> <a href="#trailer-modal" uk-toggle> Preview </a>
                                        <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen11(true)} > Understanding the Box Model</button> <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen12(true)} > Understanding Margin Collapsing and Removing Default Margins</button> <span> 23 min </span>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <NavLink to ="#" activeClassName ="uk-accordion-title"> More on Selectors & CSS Features   </NavLink>
                            <div class="uk-accordion-content">

                                
                                <ul class="course-curriculum-list">
                                    <li> Module Introduction<span> 23 min </span> </li>
                                    <li> Using Multiple CSS Classes & Combined Selectors <span> 23 min </span> </li>
                                    <li> Classes or IDs? <a href="#trailer-modal" uk-toggle> Preview
                                        </a><span> 23 min </span> </li>
                                    <li> (Not) using !important <span> 23 min </span> </li>
                                </ul>
                                <ul class="course-curriculum-list">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen13} videoId="L61p2uyiMSo" onClose={() => setOpen13(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen14} videoId="L61p2uyiMSo" onClose={() => setOpen14(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen15} videoId="L61p2uyiMSo" onClose={() => setOpen15(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen16} videoId="L61p2uyiMSo" onClose={() => setOpen16(false)} />
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen13(true)} > Module Introduction</button> <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen14(true)} > Using Multiple CSS Classes & Combined Selectors</button> <a href="#trailer-modal" uk-toggle> Preview </a>
                                        <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen15(true)} > Classes or IDs?</button> <span> 23 min </span> </li>
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen16(true)} > (Not) using !important</button> <span> 23 min </span>
                                    </li>
                                </ul>

                            </div>
                        </li>

                    </ul>

                </li>

                
                <li class="course-description-content">

                    <h4> Description </h4>
                    <p>CSS - short for Cascading Style Sheets - is a "programming language" you use to turn your raw HTML pages into real beautiful websites.

                        This course covers it all - we start at the very basics (What is CSS? How does it work? How do you use it)? and gradually dive in deeper and deeper. And we do this by showing both practical examples as well as the theory behind it.
                        
                        Getting started with CSS might look easy but there actually is a lot of depth to CSS - hence this course provides different "Tracks" or "Entry points" to exactly meet your demands and reflect you current knowledge level:
                        
                        </p>
                    <p> The Basics Track: Start from scratch, learn CSS from the ground up. You start with lecture 1 and simply follow through to the end.

                        The Advanced Track: You already know the CSS basics, you know what selectors are and how it works but you want to dive in deeper and learn some advanced features and usages.
                        
                        The Expert Track: You got the advanced knowledge, too, but you want to dive into things like Flexbox, CSS Grid, CSS Variables or Sass. This track is for you.</p>


                    <h4> What you’ll learn </h4>
                        <div class="uk-child-width-1-2@s" uk-grid>
                            <div>
                                <ul class="list-2">
                                    <li>Build beautiful websites which don't just contain great content but also look good </li>
                                    <li>Understand the concepts and theory behind CSS and certain CSS features</li>
                                    <li>Build a portfolio website</li>
                                    <li>Responsive Designs</li>
                                </ul>
                            </div>
                            <div>
                                <ul class="list-2">
                                    <li>Use basic as well as advanced CSS features</li>
                                    <li>Code CSS</li>
                                    <li>Start building beautiful websites</li>
                                </ul>
                            </div>
                        </div>


                        <h4> Requirements </h4>
                        <ul class="list-1">
                            <li>You should know the very basics about HTML and web development in general</li>
                            <li>NO advanced HTML or web development knowledge is required though</li>
                            <li>NO CSS knowledge is required at all! You'll learn it all in this course!</li>
                        </ul>

                        <h4> Here is exactly what we cover in this course: </h4>
                        <p> Of course this course offers the theory and practical examples - we'll build an entire real course project throughout the course - but there also are multiple assignments, quizzes and challenges for you to practice individual concepts taught throughout the course.

                            Talking about the course project - we'll build the frontend (no backend) of a fictional web hosting company. We'll have a starting screen which has different sections, we got a responsive design with an animated side-drawer, we got modals and forms and in general we got a lot of CSS animations, font styles and more!</p>

                        <p> Here's what's inside the course in detail - this is all also applied to the mentioned course project:

                            The basics about selectors, combinators and how you set up styling rules in general
                            
                            Properties, values and decalarations
                            
                            How specifity and inheritance work and why it's called "Cascading" Style Sheets
                            
                            Important theoretical concepts like the "Box Model"
                            
                            How the default position of elements can be changed
                            
                            Styling backgrounds (e.g. gradients) and images
                            
                            Which units and dimensions you typically use in CSS (px, rem, % and more)
                            
                            How JavaScript and CSS interact
                            
                            Responsive design and what "Mobile First" means
                            
                            Styling forms and form inputs
                            
                            Working with text, fonts and text styles
                            
                            Flexbox! How it works and how to use it
                            
                            Using the CSS Grid and how it differs from Flexbox
                            
                            Transforming and animating HTML elements with the help of CSS
                            
                            Writing future-proof CSS with features like CSS variables or best-practice class names
                            
                            Using Sass and what it actually is all about</p>

                        <p> Is this course for you?

                            It's for you if ...
                            
                            you started with learning web development and you want to build more beautiful websites
                            
                            you already know CSS but want to dive deeper
                            
                            you're using CSS in a trial-and-error manner and want to change this (you should!)
                            
                            You might come back later if ...
                            
                            you're an absolute CSS pro and you know the CSS working group drafts by heart
                            
                            you're a backend-only developer (Node, PHP, NO HTML or frontend JavaScript)
                            
                            you're a total newcomer to web development and you don't know the basics about HTML
                            
                            If that sounds good to you, we'd be more than happy to welcome you in this course!</p>


                </li>

                
                <li>

                    <h4 class="my-4"> Course Faq</h4>

                    <ul class="course-faq" uk-accordion>

                        <li class="uk-open">
                            <NavLink to ="#" activeClassName ="uk-accordion-title"> Html Introduction </NavLink>
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
                            <NavLink to ="#" activeClassName ="uk-accordion-title"> Your First webpage</NavLink>
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
                            <NavLink to ="#" activeClassName ="uk-accordion-title"> Some Special Tags </NavLink>
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
                            <NavLink to ="#" activeClassName ="uk-accordion-title"> Html Introduction </NavLink>
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
                            Manuel Lorenz <span> Instructor <span> 1 year ago </span> </span>
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
                            <NavLink to  ="/course-resume"
                                activeClassName="uk-width-1-1 btn btn-default transition-3d-hover"> 
                                <i class="uil-play"></i> Start </NavLink>
                        </div>
                        <div >
                            <button class="uk-width-1-1 btn btn-default transition-3d-hover" onclick="wishlist()">WishList</button>
                        </div>
                        <div>
                            <a class="uk-width-1-1 btn btn-default transition-3d-hover" href="http://localhost:5500/payments?price=100&link=course-intro.html&title=JavaScript& pic1=assets/images/course/2.png&courseFooter=javascript" >Buy</a>
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

export default CourseIntro3
