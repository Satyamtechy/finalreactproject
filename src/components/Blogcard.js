import React from 'react' ;
import {NavLink} from "react-router-dom";
const Blogcard = () => {

return (
   
    

    <div class="page-content">

<div class="page-content-inner">

    <h2> Blogs </h2>

    <div class="section-header">
        <div class="section-header-left">
            <h4> Recent Posts </h4>
        </div>
        <div class="section-header-right">
            <div class="display-as">
                <NavLink to = "#" activeClassName="active"><i class="icon-feather-grid"></i></NavLink>
                <NavLink to="/blog1"><i class="icon-feather-list"></i></NavLink>
                <NavLink to="/blog2"><i class="icon-feather-square"></i></NavLink>
            </div>

        </div>
    </div>

    <div class="uk-child-width-1-2@ uk-child-width-1-3@m" uk-grid>
        <div>

            
            <NavLink to="/blog-single" activeClassName="blog-post blog-post-card">
              
                <div class="blog-post-thumbnail">
                    <div class="blog-post-thumbnail-inner">
                        <img src="assets/images/blog/img-1.jpg" alt="" />
                    </div>
                </div>
               
                <div class="blog-post-content">
                    <h3>10 amazing web demos and experiments  </h3>
                    <p>Nam liber tempor soluta nobis flow doming id
                        quod assum...</p>
                </div>
                <div class="blog-post-footer">
                    <div class="blog-post-content-info">
                        <span class="blog-post-info-tag btn btn-soft-primary"> Programming </span>
                        <span class="blog-post-info-date">June 20th</span>
                    </div>
                </div>
            </NavLink>

        </div>
        <div>

           
                <NavLink to="/blog-single" activeClassName="blog-post blog-post-card">
             
                <div class="blog-post-thumbnail">
                    <div class="blog-post-thumbnail-inner">
                        <img src="assets/images/blog/img-2.jpg" alt="" />
                    </div>
                </div>
         
                <div class="blog-post-content">
                    <h3>10 Awesome Web Dev Tools and Resources  </h3>
                    <p>Nam liber tempor soluta nobis flow doming id
                        quod assum...</p>
                </div>
                <div class="blog-post-footer">
                    <div class="blog-post-content-info">
                        <span class="blog-post-info-tag btn btn-soft-success"> Software </span>
                        <span class="blog-post-info-date">May 12th</span>
                    </div>
                </div>
            </NavLink>

        </div>
        <div>

     
                <NavLink to="/blog-single" activeClassName="blog-post blog-post-card">
              
                <div class="blog-post-thumbnail">
                    <div class="blog-post-thumbnail-inner">
                        <img src="assets/images/blog/img-3.jpg" alt="" />
                    </div>
                </div>
      
                <div class="blog-post-content">
                    <h3>10 Interesting JavaScript and CSS  Libraries </h3>
                    <p>Nam liber tempor soluta nobis flow doming id
                        quod assum...</p>
                </div>
                <div class="blog-post-footer">
                    <div class="blog-post-content-info">
                        <span class="blog-post-info-tag btn btn-soft-warning"> Tips </span>
                        <span class="blog-post-info-date">June 30th</span>
                    </div>
                </div>
            </NavLink>

        </div>
        <div>

  
                <NavLink to="/blog-single" activeClassName="blog-post blog-post-card">
            
                <div class="blog-post-thumbnail">
                    <div class="blog-post-thumbnail-inner">
                        <img src="assets/images/blog/img-4.jpg" alt="" />
                    </div>
                </div>
           
                <div class="blog-post-content">
                    <h3>10 Interesting JavaScript and CSS libraries  </h3>
                    <p>Nam liber tempor soluta nobis flow doming id
                        quod assum...</p>
                </div>
                <div class="blog-post-footer">
                    <div class="blog-post-content-info">
                        <span class="blog-post-info-tag btn btn-soft-warning"> Programming </span>
                        <span class="blog-post-info-date">June 30th</span>
                    </div>
                </div>
            </NavLink>

        </div>
        <div>


                <NavLink to="/blog-single" activeClassName="blog-post blog-post-card">
         
                <div class="blog-post-thumbnail">
                    <div class="blog-post-thumbnail-inner">
                        <img src="assets/images/blog/img-2.jpg" alt="" />
                    </div>
                </div>
           
                <div class="blog-post-content">
                    <h3>10 Awesome Web Dev Tools and Resources </h3>
                    <p>Nam liber tempor soluta nobis flow doming id
                        quod assum...</p>
                </div>
                <div class="blog-post-footer">
                    <div class="blog-post-content-info">
                        <span class="blog-post-info-tag btn btn-soft-danger"> Tips </span>
                        <span class="blog-post-info-date">June 30th</span>
                    </div>
                </div>
            </NavLink>

        </div>
        <div>

                <NavLink to="/blog-single" activeClassName="blog-post blog-post-card">
            
                <div class="blog-post-thumbnail">
                    <div class="blog-post-thumbnail-inner">
                        <img src="assets/images/blog/img-3.jpg" alt="" />
                    </div>
                </div>
            
                <div class="blog-post-content">
                    <h3>10 Interesting JavaScript and CSS Libraries in 2019</h3>
                    <p>Nam liber tempor soluta nobis flow doming id
                        quod assum...</p>
                </div>
                <div class="blog-post-footer">
                    <div class="blog-post-content-info">
                        <span class="blog-post-info-tag btn btn-soft-success"> Software </span>
                        <span class="blog-post-info-date">June 30th</span>
                    </div>
                </div>
            </NavLink>

        </div>
        <NavLink to="http://localhost:5500/Blog">Add Blog</NavLink>
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

        );
}



export default Blogcard;