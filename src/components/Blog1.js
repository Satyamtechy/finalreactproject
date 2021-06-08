import React from 'react' ;
import {NavLink} from "react-router-dom";
const Blog1 = () => {

return (

    <div class="page-content">

    <div class="page-content-inner">

        <h2> Blogs </h2>

            <h4> Featured Posts </h4>

            <div class="uk-child-width-1-2@m uk-grid-match uk-grid-small" uk-grid>
                <div><NavLink to ="#" activeClassName = "uk-flex" >
                        <div data-src="assets/images/blog/img-8.jpg"
                            class="uk-card-default uk-background-cover rounded uk-flex uk-flex-bottom" uk-img>
                            <div class="uk-light p-3 my-3">
                                <h2>What is the difference between Coding and Programming?</h2>
                                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming
                                    id
                                    quod mazim placerat facer possim assum</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <div class="uk-child-width-1-2@m uk-grid-small uk-card-match" uk-grid>
                        <div> <NavLink to ="#">
                                <div class="uk-card-default rounded uk-overflow-hidden">
                                    <img src="assets/images/blog/img-1.jpg" alt="" />
                                    <div class="p-3">
                                        <h5 class="mb-0">10 amazing web demos and experiments </h5>
                                    </div>
                                </div>
                                </NavLink>
                        </div>
                        <div><NavLink to ="#">
                                <div class="uk-card-default rounded uk-overflow-hidden">
                                    <img src="assets/images/blog/img-2.jpg" alt="" class="uk-width-1-1" />
                                    <div class="p-3">
                                        <h5 class="mb-0">10 Awesome Web Dev Tools and Resources  </h5>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div><NavLink to ="#">
                                <div class="uk-card-default rounded uk-overflow-hidden">
                                    <img src="assets/images/blog/img-3.jpg" alt="" />
                                    <div class="p-3">
                                        <h5 class="mb-0">10 Interesting JavaScript and CSS Libraries </h5>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div><NavLink to ="#">
                                <div class="uk-card-default rounded uk-overflow-hidden">
                                    <img src="assets/images/blog/img-4.jpg" alt="" />
                                    <div class="p-3">
                                        <h5 class="mb-0">10 Interesting JavaScript and CSS libraries </h5>
                                    </div>
                                </div>
                                </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="mt-5 mb-0"> Category </h3>
            <div class="section-header mb-lg-3">
                <div class="section-header-left">

                    <nav class="responsive-tab style-2">
                        <ul>
                            <li class="uk-active"><NavLink to ="#">JavaScript</NavLink></li>
                            <li><NavLink to ="#">CSS</NavLink></li>
                            <li><NavLink to ="#">HTML</NavLink></li>
                            <li><NavLink to ="#">Freebie</NavLink></li>
                            <li><NavLink to ="#">Resources</NavLink></li>
                        </ul>
                    </nav>

                </div>
                <div class="section-header-right">

                    <div class="display-as">
                        <NavLink to ="/blog-card"><i class="icon-feather-grid"></i></NavLink>
                        <NavLink to ="/blog2"><i class="icon-feather-square"></i></NavLink>
                        <NavLink to ="/blog1" activeClassName="active"><i class="icon-feather-list"></i></NavLink>
                    </div>

                    <select class="selectpicker ml-3">
                        <option value=""> Newest </option>
                        <option value="1">Popular</option>
                        <option value="2">Free</option>
                        <option value="3">Premium</option>
                    </select>

                  

                </div>
            </div>

            <div class="uk-grid-large" uk-grid>
                <div class="uk-width-expand">

                  
                    
                    <NavLink to = '/blog-single' activeClassName = "blog-post">
                        <div class="blog-post-thumbnail">
                            <div class="blog-post-thumbnail-inner">
                                <span class="blog-item-tag">Tips</span>
                                <img src="assets/images/blog/img-1.jpg" alt="" />
                            </div>
                        </div>
                      
                        <div class="blog-post-content">
                            <span class="blog-post-date">22 July 2020</span>
                            <h3>10 amazing web demos and experiments For Developers</h3>
                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                                quod mazim placerat facer possim tempor cum soluta nobis</p>
                        </div>
                    </NavLink>

               
                    <NavLink to ="/blog-single" activeClassName="blog-post">
                     
                        <div class="blog-post-thumbnail">
                            <div class="blog-post-thumbnail-inner">
                                <span class="blog-item-tag">Tools</span>
                                <img src="assets/images/blog/img-2.jpg" alt="" />
                            </div>
                        </div>
                      
                        <div class="blog-post-content">
                            <span class="blog-post-date">12 MAy 2020</span>
                            <h3>10 Awesome Web Dev Tools and Resources For 2020</h3>
                            <p>Nam liber tempor cum soluta nobis nihil imperdiet doming id tempor cum soluta nobis
                                quod mazim placerat facer possim soluta nobis eleifend assum</p>
                        </div>
                    </NavLink>
                    <NavLink to ="/blog-single" activeClassName="blog-post">
                       
                        <div class="blog-post-thumbnail">
                            <div class="blog-post-thumbnail-inner">
                                <img src="assets/images/blog/img-3.jpg" alt="" />
                            </div>
                        </div>
                       
                        <div class="blog-post-content">
                            <div class="blog-post-content-info">
                                <span class="blog-post-info-tag btn btn-soft-danger"> Softwares </span>
                                <span class="blog-post-info-date">10 June</span>
                            </div>
                            <h3>10 Interesting JavaScript and CSS Libraries for November 2020 </h3>
                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                                quod mazim placerat facer possim assum tempor cum soluta nobis</p>
                        </div>
                    </NavLink>

                   
                    <NavLink to ="/blog-single" activeClassName="blog-post">
                     
                        <div class="blog-post-thumbnail">
                            <div class="blog-post-thumbnail-inner">
                                <img src="assets/images/blog/img-4.jpg" alt="" />
                            </div>
                        </div>
                       
                        <div class="blog-post-content">
                            <div class="blog-post-content-info">
                                <span class="blog-post-info-tag btn btn-soft-primary"> Programming </span>
                                <span class="blog-post-info-date">10 June</span>
                            </div>
                            <h3>10 Interesting JavaScript and CSS libraries for 2020 </h3>
                            <p>Nam liber tempor cum soluta nobis nihil imperdiet doming id tempor cum soluta nobis
                                quod mazim placerat facer possim soluta nobis eleifend assum</p>
                        </div>
                    </NavLink>

                    <ul class="uk-pagination my-5 uk-flex-center" uk-margin>
                        <li class="uk-active"><span>1</span></li>
                        <li><NavLink to ="#">2</NavLink></li>
                        <li><NavLink to ="#">3</NavLink></li>
                        <li class="uk-disabled"><span>...</span></li>
                        <li><NavLink to ="#"><span uk-pagination-next></span></NavLink></li>
                    </ul>

                </div>
                <div class="uk-width-1-3@s">

                    <div class="uk-card-default rounded uk-overflow-hidden">
                        <div class="p-4 text-center">

                            <h4 class="uk-text-bold"> Subsicribe </h4>
                            <p> Get the Latest Posts and Article for us On Your Email</p>

                            <form class="mt-3">
                                <input type="text" class="uk-input uk-form-small"
                                    placeholder="Enter your email address" />
                                <input type="submit" value="Subscirbe" class="btn btn-default btn-block mt-3" />
                            </form>

                        </div>
                    </div>

                    <div class="uk-card-default rounded mt-4">

                        <ul class="uk-child-width-expand uk-tab"
                            uk-switcher="animation: uk-animation-fade">
                            <li><NavLink to ="#">Newest</NavLink></li>
                            <li><NavLink to ="#">Popular</NavLink></li>
                        </ul>

                        <ul class="uk-switcher">
                          
                            <li>
                                <div class="py-3 px-4">

                                    <div class="uk-grid-small" uk-grid>
                                        <div class="uk-width-expand">
                                            <p> Overview of SQL Commands and PDO </p>
                                        </div>
                                        <div class="uk-width-1-3">
                                            <img src="../assets/images/blog/img-3.jpg" alt="" class="rounded-sm" />
                                        </div>
                                    </div>
                                    <div class="uk-grid-small" uk-grid>
                                        <div class="uk-width-expand">
                                            <p> Writing a Simple MVC App in Plain </p>
                                        </div>
                                        <div class="uk-width-1-3">
                                            <img src="../assets/images/blog/img-2.jpg" alt="" class="rounded-sm" />
                                        </div>
                                    </div>
                                    <div class="uk-grid-small" uk-grid>
                                        <div class="uk-width-expand">
                                            <p> How to Create and Use Bash Scripts </p>
                                        </div>
                                        <div class="uk-width-1-3">
                                            <img src="../assets/images/blog/img-3.jpg" alt="" class="rounded-sm" />
                                        </div>
                                    </div>

                                </div>
                            </li>

                            <li>
                                <div class="py-3 px-4">

                                    <div class="uk-grid-small" uk-grid>
                                        <div class="uk-width-expand">
                                            <p> Overview of SQL Commands and PDO </p>
                                        </div>
                                        <div class="uk-width-1-3">
                                            <img src="assets/images/blog/img-3.jpg" alt="" class="rounded-sm" />
                                        </div>
                                    </div>
                                    <div class="uk-grid-small" uk-grid>
                                        <div class="uk-width-expand">
                                            <p> Writing a Simple MVC App in Plain </p>
                                        </div>
                                        <div class="uk-width-1-3">
                                            <img src="assets/images/blog/img-2.jpg" alt="" class="rounded-sm" />
                                        </div>
                                    </div>
                                    <div class="uk-grid-small" uk-grid>
                                        <div class="uk-width-expand">
                                            <p> How to Create and Use Bash Scripts </p>
                                        </div>
                                        <div class="uk-width-1-3">
                                            <img src="assets/images/blog/img-3.jpg" alt="" class="rounded-sm" />
                                        </div>
                                    </div>

                                </div>
                            </li>
                        </ul>

                    </div>

                    <h4 class="mt-4"> Tags </h4>
                    <div uk-margin>
                        <NavLink to ="#" activeClassName="btn btn-small btn-light">#Webdesing</NavLink>
                        <NavLink to ="#" activeClassName="btn btn-small btn-light">#Business</NavLink>
                        <NavLink to ="#" activeClassName="btn btn-small btn-light">#Programming</NavLink>
                        <NavLink to ="#" activeClassName="btn btn-small btn-light">#Hacking</NavLink>
                    </div>


                </div>
            </div>


    </div>

</div>

        );
}



export default Blog1;