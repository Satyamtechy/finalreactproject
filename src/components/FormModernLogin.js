import React from 'react';
import {NavLink} from "react-router-dom";

const FormModernLogin = () => {
    return (
        <div>
           <div uk-height-viewport class="uk-flex uk-flex-middle">
        <div class="uk-width-2-3@m uk-width-1-2@s m-auto rounded">
            <div class="uk-child-width-1-2@m uk-grid-collapse bg-gradient-grey" uk-grid>

                
                <div class="uk-margin-auto-vertical uk-text-center uk-animation-scale-up p-3 uk-light">
                    <i class=" uil-graduation-hat icon-large"></i>
                    <h3 class="mb-4"> Technocolabs.ai</h3>
                    <p>The Place You can learn Every Thing. </p>
                </div>

                
                <div class="uk-card-default p-5 rounded">
                    <div class="mb-4 uk-text-center">
                        <h3 class="mb-0"> Welcome back</h3>
                        <p class="my-2">Login to manage your account.</p>
                    </div>
                    <form>

                        <div class="uk-form-group">
                            <label class="uk-form-label"> Email</label>

                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-mail"></i>
                                </span>
                                <input class="uk-input" type="email" placeholder="name@example.com" /></div>

                        </div>

                        <div class="uk-form-group">
                            <label class="uk-form-label"> Password</label>

                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-lock"></i>
                                </span>
                                <input class="uk-input" type="password" placeholder="********" /></div>

                        </div>

                        <div class="uk-form-group">
                            <label class="uk-form-label"> Confirm password</label>

                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-lock"></i>
                                </span>
                                <input class="uk-input" type="password" placeholder="********" /></div>

                        </div>

                        <div class="mt-4 uk-flex-middle uk-grid-small" uk-grid>
                            <div class="uk-width-expand@s">
                                <p> Dont have account <NavLink to ="/page-register">Sign up</NavLink></p>
                            </div>
                            <div class="uk-width-auto@s">
                                <button type="submit" class="btn btn-default">Get Started</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    </div> 
        </div>
    )
}

export default FormModernLogin
