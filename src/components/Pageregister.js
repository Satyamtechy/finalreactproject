import React,{useEffect} from 'react' ;
import { NavLink } from 'react-router-dom';
const Pageregister = () => {
    useEffect(() =>{
        function register() {
            var details={
                name:document.getElementById("name").value,
                email:document.getElementById("email").value,
                password:document.getElementById("password").value,
                cpassword:document.getElementById("cpassword").value
            };
            const optionss={
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                }, 
                body:JSON.stringify(details)
            }
            fetch("http://localhost:5500/register",optionss)
        }
    },[])
return (

    <div uk-height-viewport="expand: true" class="uk-flex uk-flex-middle">
        <div class="uk-width-1-3@m uk-width-1-2@s m-auto">
            <div class="uk-card-default p-5 rounded">
                <div class="mb-4 uk-text-center">
                    <h3 class="mb-0"> Create new Account</h3>
                    <p class="my-2">Login to manage your account.</p>
                </div>
                <form class="uk-child-width-1-1 uk-grid-small" uk-grid>

                    <div>
                        <div class="uk-form-group">
                            <label class="uk-form-label"> Name</label>

                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-user"></i>
                                </span>
                                <input id="name"  class="uk-input" type="text" placeholder="Full name" />
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
                                <input id="email" class="uk-input" type="email" placeholder="name@example.com" />
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
                                <input id="password" type="password"  class="uk-input" placeholder="********" />
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
                                <input id="cpassword" type="password" class="uk-input"  placeholder="********" />
                            </div>

                        </div>
                    </div>

                    <div>
                        <div class="mt-4 uk-flex-middle uk-grid-small" uk-grid>
                            <div class="uk-width-expand@s">
                                <p> Dont have account <NavLink to="#">Sign up</NavLink></p>
                            </div>
                            <div class="uk-width-auto@s">
                                <input onclick="register()" type="button" class="btn btn-default" value="Get Started" />
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>

        );
}



export default Pageregister;