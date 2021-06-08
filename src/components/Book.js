import React from 'react';
import {NavLink} from "react-router-dom";

const Book = () => {
    return (
        <div>
            <div class="page-content">

<div class="page-content-inner">


    <h1> Books </h1>


    <div class="mt-lg-5" uk-grid>

        <div class="uk-width-3-4@m">

            <h4> Featured books </h4>

            <div class="uk-position-relative" tabindex="-1" uk-slider="autoplay: true">

                <ul
                    class="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-child-width-1-3@s uk-grid">
                    <li>
                        <NavLink to = "/book-description">
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
                        <NavLink to = "/book-description">
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
                        <NavLink to = "/book-description">
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
                        <NavLink to = "/book-description">
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
                        <NavLink to = "/book-description">
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


                <div class="uk-flex uk-flex-center mt-2">
                    <ul class="uk-slider-nav uk-dotnav"></ul>
                </div>

            </div>

        </div>

        <div class="uk-width-1-4@m">
            <h4> Popular books </h4>
            <div id="book-popular">
                <div class="book-popular-card">
                    <img src="assets/images/book/css3.jpg" alt="" class="cover-img" />
                    <div class="book-details">
                        <NavLink to = "#">
                            <h4>CSS3 Web Development</h4>
                        </NavLink>
                        <p>Richard Ali </p>
                    </div>
                    <NavLink to = "#"> <i class="icon-feather-bookmark icon-small"></i></NavLink>
                </div>
                <div class="book-popular-card">
                    <img src="assets/images/book/vue-2-basics-.jpg" alt="" class="cover-img" />
                    <div class="book-details">
                        <NavLink to = "#">
                            <h4>Vue.js Basics</h4>
                        </NavLink>
                        <p>John smith </p>
                    </div>
                    <NavLink to = "#"> <i class="icon-feather-bookmark icon-small"></i></NavLink>
                </div>
                <div class="book-popular-card">
                    <img src="assets/images/book/php.jpg" alt="" class="cover-img" />
                    <div class="book-details">
                        <NavLink to = "#">
                            <h4>PHP for Beginners</h4>
                        </NavLink>
                        <p>Richard Ali </p>
                    </div>
                    <NavLink to = "#"> <i class="icon-feather-bookmark icon-small"></i></NavLink>
                </div>
            </div>
        </div>

    </div>

    <h3> Category</h3>

    <nav class="responsive-tab style-1 ">
        <ul>
            <li class="uk-active"><NavLink to = "#">JavaScript</NavLink></li>
            <li><NavLink to = "#">CSS</NavLink></li>
            <li><NavLink to = "#">HTML</NavLink></li>
            <li><NavLink to = "#">Coding</NavLink></li>
        </ul>
    </nav>

    <div class="section-small">

        <div class="uk-child-width-1-5@m uk-child-width-1-3@s uk-child-width-1-2" uk-grid>
            <div>
                <NavLink to = "/book-description" activeClassName="uk-text-bold">
                    <img src="assets/images/book/html5.jpg" alt="." class="mb-2 w-100 shadow rounded" />
                    HTML5 Brick Breaker
                </NavLink>
            </div>
            <div>
                <NavLink to = "/book-description" activeClassName="uk-text-bold">
                    <img src="assets/images/book/css3.jpg" alt="." class="mb-2 w-100 shadow rounded" />
                    CSS3 Web Development
                </NavLink>
            </div>
            <div>
                <NavLink to = "/book-description" activeClassName="uk-text-bold">
                    <img src="assets/images/book/vue-2-basics-.jpg" alt="." class="mb-2 w-100 shadow rounded" />
                    Vue.js 2 Basics
                </NavLink>
            </div>
            <div>
                <NavLink to = "/book-description" activeClassName="uk-text-bold">
                    <img src="assets/images/book/php.jpg" class="mb-2 w-100 shadow rounded" />
                    PHP for Beginners
                </NavLink>
            </div>
            <div>
                <NavLink to = "/book-description" activeClassName="uk-text-bold">
                    <img src="assets/images/book/win8.jpg" alt="." class="mb-2 w-100 shadow rounded" />
                    WIN8 App Development
                </NavLink>
            </div>
            <div>
                <NavLink to = "/book-description" activeClassName="uk-text-bold">
                    <img src="assets/images/book/win8.jpg" alt="." class="mb-2 w-100 shadow rounded" />
                    WIN8 App Development
                </NavLink>
            </div>
            <div>
                <NavLink to = "/book-description" activeClassName="uk-text-bold">
                    <img src="assets/images/book/vue-2-basics-.jpg" alt="." class="mb-2 w-100 shadow rounded" />
                    Vue.js 2 Basics
                </NavLink>
            </div>
            <div>
                <NavLink to = "/book-description" activeClassName="uk-text-bold">
                    <img src="assets/images/book/php.jpg" alt="." class="mb-2 w-100 shadow rounded" />
                    PHP for Beginners
                </NavLink>
            </div>
            <div>
                <NavLink to = "/book-description" activeClassName="uk-text-bold">
                    <img src="assets/images/book/html5.jpg" alt="." class="mb-2 w-100 shadow rounded" />
                    HTML5 Brick Breaker
                </NavLink>
            </div>
            <div>
                <NavLink to = "/book-description" activeClassName="uk-text-bold">
                    <img src="assets/images/book/css3.jpg" alt="." class="mb-2 w-100 shadow rounded" />
                    CSS3 Web Development
                </NavLink>
            </div>
        </div>

    </div>



    <ul class="uk-pagination uk-flex-center uk-margin-medium">
        <li class="uk-active">
            <span>1</span>
        </li>
        <li>
            <NavLink to = "#">2</NavLink>
        </li>
        <li>
            <NavLink to = "#">3</NavLink>
        </li>
        <li>
            <NavLink to = "#">4</NavLink>
        </li>
        <li>
            <NavLink to = "#">5</NavLink>
        </li>
        <li>
            <NavLink to = "#"><i class="icon-feather-chevron-right uk-margin-small-top"></i></NavLink>
        </li>
        <li>
            <NavLink to = "#">12</NavLink>
        </li>
    </ul>


</div>
</div>
        </div>
    )
}

export default Book
