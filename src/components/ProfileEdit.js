import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileEdit = () => {
    return (
        <div>
            <div class="page-content">

<div class="page-content-inner">


<NavLink to="#" activeClassName="profile-icon-back" uk-tooltip=" pos: right ;title: Back to profile">
<i class="icon-feather-arrow-left"></i>
</NavLink>

<div class="container-small p-sm-0">

<div class="uk-grid-small" uk-grid>
    <div class="uk-width-1-3@m">

        <nav class="responsive-tab style-3">
            <ul
                uk-switcher="connect: #course-info-nav ;animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">
                <li><NavLink to="#"> <i class="icon-feather-edit-3"></i> Edit profile</NavLink></li>
                <li><NavLink to="#"><i class="icon-material-outline-settings"></i> Account settings</NavLink></li>
                <li><NavLink to="#"><i class="icon-feather-bell"></i> Notiviations</NavLink></li>
                <li><NavLink to="#"><i class="icon-feather-star"></i>Membership</NavLink></li>
                <li><NavLink to="#"><i class="icon-feather-lock"></i> Privacy</NavLink></li>
                <li><NavLink to="#"><i class="icon-feather-shield"></i>Security</NavLink></li>
            </ul>
        </nav>

    </div>
    <div class="uk-width-expand@m p-4 pt-0">

        <h2> Edit profile </h2>
        <h6>Peaple on takecourse will get you know with the info below</h6>

        <form class="uk-child-width-1-2@s uk-grid-small my-5" uk-grid>
            <div>
                <div class="uk-form-group">
                    <label class="uk-form-label"> First name </label>
                    <div class="uk-position-relative w-100">
                        <span class="uk-form-icon"> <i class="icon-feather-user"> </i></span>
                        <input type="text" class="uk-input" placeholder="your first name" />
                    </div>
                </div>
            </div>
            <div>
                <div class="uk-form-group">
                    <label class="uk-form-label"> Second name </label>
                    <div class="uk-position-relative w-100">
                        <span class="uk-form-icon"> <i class="icon-feather-user"> </i></span>
                        <input type="text" class="uk-input" placeholder="your second name" />
                    </div>
                </div>
            </div>
            <div class="w-100">
                <div class="uk-form-group">
                    <label class="uk-form-label"> Your Email </label>
                    <div class="uk-position-relative w-100">
                        <span class="uk-form-icon"> <i class="icon-feather-user"> </i></span>
                        <input type="text" class="uk-input" placeholder="enter your email address" />
                    </div>
                </div>
            </div>
            <div class="uk-width-1-1">
                <div class="uk-form-group">
                    <label class="uk-form-label"> Your Website </label>
                    <div class="uk-position-relative w-100">
                        <span class="uk-form-icon"> <i class="icon-feather-user"> </i></span>
                        <input type="text" class="uk-input" placeholder="enter your web address" />
                    </div>
                </div>
            </div>
            <div class="uk-width-1-1">
                <div class="uk-form-group">
                    <label class="uk-form-label"> Bio </label>
                    <textarea class="uk-textarea uk-height-small"
                        placeholder="How'd you hear about us?"></textarea>
                </div>
            </div>
        </form>

        <div class="uk-flex uk-flex-right">
            <NavLink to="#" activeClassName="btn btn-light small mr-4"> Cancel</NavLink>
            <NavLink to="#" activeClassName="btn btn-default small"> Sava chenges</NavLink>
        </div>
    </div>

</div>

</div>

</div>
</div>
        </div>
    )
}

export default ProfileEdit
