import React from 'react' ;
import { NavLink } from 'react-router-dom';
const Pagepricing = () => {

return (


    <div class="page-content-inner">

    <div class="pricing pricing-container">

        <div class="uk-light text-center">

            <h1> Simple Transparent Pricing</h1>
            <h5> Start learning to day to became expart web Developments and user interface desinger
            </h5>

        </div>

        <div class="pricing-card">
            <div class="text-center">

                <h4 class="plan-name"> Basic Plan </h4>
                <h1 class="price "> <span>$</span> 99 </h1>
                <span class="price-type"> / per month</span>
                <NavLink to="#" activeClassName="btn btn-soft-grey small">GET STARTED </NavLink>

            </div>
            <div class="pt-sm-0">

                <ul class="list-2 ml-3 pl-4">
                    <li>Course learning checks</li>
                    <li> Certification practice exams</li>
                    <li>Access entire course library</li>
                    <li> Exercise files and practicing</li>
                    <li>Offline viewing and downloading </li>
                </ul>

            </div>
        </div>

        <h6> To start your learning to day you will get free 10 Course first register </h6>

    </div>

    <div class="section">
        <div class="uk-container">
            <div class="mb-8 uk-text-center">
                <h2 class="mb-0">Meet Our Team</h2>
                <hr class="uk-divider-small" />
                <p>We are part of a global design Community. We are here to make you succeed.</p>
            </div>


            <div class="uk-child-width-1-4@m uk-child-width-1-3@s uk-child-width-1-2 uk-text-center"
                uk-grid>
                <div>
                    <img src="../assets/images/avatars/avatar-2.jpg" alt="" class="uk-border-circle" />
                    <h4 class="mt-3 mb-2"> Adrian Mohani </h4>
                    <h6 class="mt-0"> UX/UI </h6>
                </div>
                <div>
                    <img src="../assets/images/avatars/avatar-3.jpg" alt="" class="uk-border-circle" />
                    <h5 class="mt-3 mb-2"> Stella Johnson</h5>
                    <h6 class="mt-0"> Marketer </h6>
                </div>
                <div>
                    <img src="../assets/images/avatars/avatar-1.jpg" alt="" class="uk-border-circle" />
                    <h4 class="mt-3 mb-2"> Alex Dolgove </h4>
                    <h6 class="mt-0"> Desinger </h6>
                </div>
                <div>
                    <img src="../assets/images/avatars/avatar-4.jpg" alt="" class="uk-border-circle" />
                    <h5 class="mt-3 mb-2"> Jonathan Madano </h5>
                    <h6 class="mt-0"> Developer </h6>
                </div>
            </div>
        </div>
    </div>

    <div class="section">
        <h3 class="text-center mb-7"> Questions and Answers </h3>
        <div class="uk-child-width-1-2@s" uk-grid="masonry: true">
            <div>
                <div class="uk-card-default p-4 rounded">
                    <h4> How does the 14-day free trial work? </h4>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                        aliquip ex ea commodo consequat. </p>
                </div>
            </div>
            <div>
                <div class="uk-card-default p-4 rounded">
                    <h4> What kind of skills do I need to use</h4>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore suscipit lobortis nisl ut
                        aliquip ex ea commodo consequat. </p>
                </div>
            </div>
            <div>
                <div class="uk-card-default p-4 rounded">
                    <h4> Will I need any special software/hardware/books </h4>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore suscipit lobortis nisl ut
                        aliquip ex ea commodo consequat. </p>
                </div>
            </div>
            <div>
                <div class="uk-card-default p-4 rounded">
                    <h4> How often do you release new content?</h4>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                        aliquip ex ea commodo consequat. </p>
                </div>
            </div>

        </div>
    </div>

</div>



        );
}



export default Pagepricing;