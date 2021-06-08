import React from 'react' ;
import { NavLink } from 'react-router-dom';
const Pagesimpleregister = () => {

return (
    <div class="page-content">

    <div class="page-content-inner">


        <div class="uk-width-1-3@m m-auto my-5">
            <div class="mb-4">
                <h2 class="mb-0">Create new a <span class="uk-text-bold">Account</span></h2>
                <p class="my-0">Fill blank to create new account.</p>
            </div>
            <form class="uk-child-width-1-1 uk-grid-small" uk-grid>

                <div>
                    <div class="uk-form-group">
                        <label class="uk-form-label"> Name</label>

                        <div class="uk-position-relative w-100">
                            <span class="uk-form-icon">
                                <i class="icon-feather-user"></i>
                            </span>
                            <input class="uk-input" type="text" placeholder="Full name" />
                        </div>

                    </div>
                </div>
                <div>
                    <div class="uk-form-group">
                        <label class="uk-form-label"> Email</label>

                        <div class="uk-position-relative w-100">
                            <span class="uk-form-icon">
                                <i class="icon-feather-mail"></i>
                            </span>
                            <input class="uk-input" type="email" placeholder="name@example.com" />
                        </div>

                    </div>
                </div>

                <div class="uk-width-1-2@s">
                    <div class="uk-form-group">
                        <label class="uk-form-label"> Password</label>

                        <div class="uk-position-relative w-100">
                            <span class="uk-form-icon">
                                <i class="icon-feather-lock"></i>
                            </span>
                            <input class="uk-input" type="password" placeholder="********" />
                        </div>

                    </div>
                </div>
                <div class="uk-width-1-2@s">
                    <div class="uk-form-group">
                        <label class="uk-form-label"> Confirm password</label>

                        <div class="uk-position-relative w-100">
                            <span class="uk-form-icon">
                                <i class="icon-feather-lock"></i>
                            </span>
                            <input class="uk-input" type="password" placeholder="********" />
                        </div>

                    </div>
                </div>

                <div>
                    <div class="mt-4 uk-flex-middle uk-grid-small" uk-grid>
                        <div class="uk-width-expand@s">
                            <p> Dont have account <NavLink to="#">Sign up</NavLink></p>
                        </div>
                        <div class="uk-width-auto@s">
                            <input type="submit" class="btn btn-default" value="Get Started" />
                        </div>
                    </div>
                </div>

            </form>
        </div>


    </div>

</div>

        );
}



export default Pagesimpleregister;