import React from 'react' ;
import {NavLink} from "react-router-dom";
const Blogsingle = () => {

return (
    <div>
<div class="container p-0">  

    <div class="container-small blog-article-content-read">

        <h3> Nam tempor soluta nobis eleifend option assum. </h3>

        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
            ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
            tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nam liber tempor
            cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
            possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.</p>

        <h4>5 Myths That Prevent Job Seekers from Overcoming Failure
        </h4>


        <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus.
            Nulla
            eu
            mi magna. Etiam suscipit commodo gravida. Cras suscipit, quam vitae adipiscing
            faucibus,
            risus nibh laoreet odio, a porttitor metus eros ut enim. Morbi augue velit, tempus
            mattis
            dignissim nec, porta sed risus. Donec eget magna eu lorem tristique pellentesque
            eget eu
            dui. Fusce lacinia tempor malesuada. Ut lacus sapien, placerat a ornare nec,
            elementum
            sit
            amet felis. Maecenas pretium lorem hendrerit eros sagittis fermentum.</p>

        <h4>5 Myths That Prevent Job Seekers from Overcoming Failure
        </h4>

        <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus,
            eleifend
            euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet
            ornare
            non,
            suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales.
            Quisque
            tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient
            montes,
            nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit est. Suspendisse sit
            amet
            mauris in quam pretium faucibus et aliquam odio. </p>


        <div class="my-lg-7">

            <h4>Author </h4>
            <div class="uk-card-default rounded px-3 pb-md-3 uk-flex uk-flex-between@m uk-flex-middle"
                uk-toggle="cls: uk-flex uk-flex-between@m uk-flex-middle; mode: media; media: @m">
                <div class="user-details-card">
                    <div class="user-details-card-avatar">
                        <img src="assets/images/avatars/avatar-2.jpg" alt="" />
                    </div>
                    <div class="user-details-card-name">
                        Stella Johnson <span> Developer <span> 1 year ago </span> </span>
                    </div>
                </div>
                <div>
                    <strong class="mx-3 uk-visible@s"> Share on </strong>

                    <NavLink to = "#" activeClassName="btn btn-facebook  rounded-circle btn-icon-only transition-3d-hover">
                        <span class="btn-inner--icon">
                            <i class="icon-brand-facebook-f"></i>
                        </span>
                    </NavLink>

                    <NavLink to = "#" activeClassName="btn btn-twitter rounded-circle btn-icon-only transition-3d-hover">
                        <span class="btn-inner--icon">
                            <i class="icon-brand-twitter"></i>
                        </span>
                    </NavLink>

                    <NavLink to = "#" activeClassName="btn btn-google-plus rounded-circle btn-icon-only transition-3d-hover">
                        <span class="btn-inner--icon">
                            <i class="icon-brand-google-plus-g"></i>
                        </span>
                    </NavLink>

                </div>
            </div>

        </div>

        <div class="comments mt-4">
            <h4>Comments
                <span class="comments-amount">5210</span>
            </h4>

            <ul>
                <li>
                    <div class="comments-avatar"><img src="assets/images/avatars/avatar-1.jpg" alt="" />
                    </div>
                    <div class="comment-content">
                        <div class="comment-by">Jonathan Madano <span>Student</span>
                            <NavLink to = "#" activeClassName="reply"><i class="icon-line-awesome-undo"></i> Reply</NavLink>
                        </div>
                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                            minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                            aliquip ex ea commodo consequat. Nam liber tempor cum soluta nobis eleifend
                            option
                            congue </p>
                    </div>

                    <ul>
                        <li>
                            <div class="comments-avatar"><img src="assets/images/avatars/avatar-2.jpg" alt="" />
                            </div>
                            <div class="comment-content">
                                <div class="comment-by">Stella Johnson<span>Student</span>
                                    <NavLink to = "#" activeClassName="reply"><i class="icon-line-awesome-undo"></i>
                                        Reply</NavLink>
                                </div>
                                <p> Nam liber tempor cum soluta nobis eleifend option congue ut laoreet
                                    dolore
                                    magna aliquam erat volutpat nihil imperdiet doming id quod mazim
                                    placerat
                                    facer possim assum. Lorem ipsum dolor sit amet</p>
                            </div>
                        </li>
                        <li>
                            <div class="comments-avatar">
                                <img src="assets/images/avatars/avatar-3.jpg" alt="" /></div>
                            <div class="comment-content">

                                <div class="comment-by">Adrian Mohani <span>Student</span>
                                    <NavLink to = "#" activeClassName="reply"><i class="icon-line-awesome-undo"></i>
                                        Reply</NavLink>
                                </div>
                                <p>tempor cum soluta nobis eleifend option congue ut laoreet dolore magna
                                    aliquam erat volutpat.</p>
                            </div>

                        </li>
                    </ul>

                </li>

                <li>
                    <div class="comments-avatar"><img src="assets/images/avatars/avatar-4.jpg" alt="" />
                    </div>
                    <div class="comment-content">

                        <div class="comment-by">Alex Dolgove<span>Student</span>
                            <NavLink to = "#" activeClassName="reply"><i class="icon-line-awesome-undo"></i> Reply</NavLink>
                        </div>
                        <p>Nam liber tempor cum soluta nobis eleifend option congue ut laoreet dolore magna
                            aliquam erat volutpat nihil imperdiet doming id quod mazim placerat facer possim
                            assum. Lorem ipsum dolor sit amet</p>
                    </div>

                </li>

            </ul>

        </div>

        <div class="comments">
            <h4>Your Comment </h4>
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
                                <textarea class="uk-textarea" placeholder="Enter Your Comments her..."
                                    style={{height:'160px'}}></textarea>
                            </div>
                            <div class="uk-grid-margin">
                                <input type="submit" value="submit" class="button success" />
                            </div>
                        </form>

                    </div>
                </li>
            </ul>
        </div>


    </div>
    </div>
    </div>
        );
}



export default Blogsingle ;