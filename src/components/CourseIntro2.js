import React,{useEffect,useState} from 'react';
import {NavLink} from "react-router-dom";
import ModalVideo from 'react-modal-video' 
import '../../node_modules/react-modal-video/scss/modal-video.scss';

const CourseIntro2 = () => {

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
            id:"2",
            link:"course-intro2",
            title:"Advance Javascript",
            pic:"assets/images/course/2.png",
            courseFooter:"javascript",
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
                    <h1> Learn Html From Scratch</h1>
                    <p> Master Html with the most complete course! Projects
                        Excellent
                        course. we
                        explain the core concepts in html that are usually glossed over in other
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
                            <NavLink to ="#" activeClassName ="uk-accordion-title"> Html Introduction </NavLink>
                            <div class="uk-accordion-content">

                            
                                <ul class="course-curriculum-list">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen1} videoId="L61p2uyiMSo" onClose={() => setOpen1(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen2} videoId="L61p2uyiMSo" onClose={() => setOpen2(false)} />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen3} videoId="L61p2uyiMSo" onClose={() => setOpen3(false)} />
                                
                                    <li><button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen(true)} > What is HTML </button><span> 23 min </span></li>
                                    <li> <button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen1(true)} >What is a Web page</button> <span> 23 min </span> </li>
                                    <li> <button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen2(true)} >Your First Web Page </button><a href="#trailer-modal" uk-toggle> Preview</a><span> 23 min </span></li>
                                    <li> <button style={{background:"transparent",border:"none",outline:"none"}} onClick={()=> setOpen3(true)} >Brain Streak </button><span> 23 min </span> </li>
                                </ul>

                            </div>
                        </li>

                        <li>
                            <NavLink to ="#" activeClassName ="uk-accordion-title"> Your First webpage   </NavLink>
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
                            <NavLink to ="#" activeClassName ="uk-accordion-title"> Some Special Tags  </NavLink>
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
                            <NavLink to ="#" activeClassName ="uk-accordion-title"> HTML Advanced level   </NavLink>
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
                    <p> *** The #1 bestselling JavaScript course on Udemy! ***

                        *** Completely re-built from scratch in October 2020 (65 hours video) ***
                        
                        "Really, really well made course. Super in-depth, with great challenges and projects that will solidify your Javascript understanding. I found the lectures were paced perfectly -- Jonas doesn't skip over anything that might be useful to a JS developer" — Carson Bartholomew</p>
                    <p> JavaScript is the most popular programming language in the world. It powers the entire modern web. It provides millions of high-paying jobs all over the world.

                        That's why you want to learn JavaScript too. And you came to the right place!
                        
                        </p>


                    <h4> What you’ll learn </h4>
                        <div class="uk-child-width-1-2@s" uk-grid>
                            <div>
                                <ul class="list-2">
                                    <li>Become an advanced, confident, and modern JavaScript developer from scratch </li>
                                    <li>Become job-ready by understanding how JavaScript really works behind the scenes</li>
                                    <li>JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.</li>
                                    <li>Modern OOP: Classes, constructors, prototypal inheritance, encapsulation, etc.</li>
                                </ul>
                            </div>
                            <div>
                                <ul class="list-2">
                                    <li>Asynchronous JavaScript: Event loop, promises, async/await, AJAX calls and APIs</li>
                                    <li>Modern tools for 2020 and beyond: NPM, Parcel, Babel and ES6 modules</li>
                                    <li>Get downloadable lectures and friendly support in the Q&A area</li>
                                </ul>
                            </div>
                        </div>


                        <h4> Requirements </h4>
                        <ul class="list-1">
                            <li>No coding experience is necessary to take this course! I take you from beginner to expert!</li>
                            <li>Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.</li>
                            <li>A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course.</li>
                        </ul>

                        <h4> Here is exactly what we cover in this course: </h4>
                        <p> My name is Jonas, I'm an experienced web developer and designer, and one of Udemy's top instructors. I have been teaching this bestselling course since 2016 to over 350,000 developers, always listening to feedback and understanding exactly how students actually learn.

                            Recently, I took all my teaching experience to build this new and greatly improved JavaScript course. It's now the best and most in-depth JavaScript course that you will find on Udemy (and maybe the entire internet).</p>

                        <p> I know how students learn JavaScript and what they need in order to master it. And with that knowledge, I designed the ideal course curriculum. It's a unique blend of real-world projects, deep explanations, theory lectures, and challenges, that will take you from zero to an expert and confident JavaScript developer in just a couple of weeks.

                        </p>

                        <p> So what exactly is covered in the course?

                            Build 5 beautiful real-world projects for your portfolio! In these projects, you will learn how to plan and architect your applications using flowcharts and common JavaScript patterns
                            
                            Master the JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, and more
                            
                            Learn modern JavaScript (ES6+) from the beginning: arrow functions, destructuring, spread operator, default arguments, optional chaining (ES2020), and more
                            
                            How JavaScript works behind the scenes: engines, the call stack, hoisting, scoping, the 'this' keyword, reference values, and more.
                            
                            Deep dive into functions: arrow functions, first-class and higher-order functions, bind, and closures.
                            
                            Deep dive into object-oriented programming: prototypal inheritance, constructor functions (ES5), classes (ES6), encapsulation, abstraction, inheritance, and polymorphism. [This is like a small standalone course]
                            
                            Deep dive into asynchronous JavaScript: the event loop, promises, async/await, and error handling. You will use these to access data from third-party APIs with AJAX calls. [This is like a small standalone course]
                            
                            Learn modern tools that are used by professional web developers: NPM, Parcel (module bundler), Babel, and ES6 modules
                            
                            Check out the course curriculum for an even more detailed overview of the content :)
                            
                            </p>


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
                            Jonas Schmedtmann <span> Instructor <span> 1 year ago </span> </span>
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
                            <NavLink to="/course-resume"
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

export default CourseIntro2
