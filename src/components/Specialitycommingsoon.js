import React from 'react'

const Specialitycommingsoon = () => {
    return (
        <div id="wrapper">


        <div uk-height-viewport="offset-top: true; offset-bottom: true" class="uk-flex uk-flex-middle bg-gradient-grey uk-text-center  px-4">
            <div class="container-small m-auto ">

                <div class="uk-light mb-lg-8">
                    <h1>We're coming <strong>soon</strong></h1>
                    <p class="mb-0"> We apologize for the inconvenience but Masterkit is currently <br class="uk-visible@s" />
                        undergoing
                        planned maintenance.</p>
                </div>

                <div class="uk-grid-small uk-child-width-auto@s uk-child-width-1-4 uk-margin countdown" uk-grid uk-countdown="date: 2020-10-07T08:32:06+00:00">
                    <div>
                        <div class="box">
                            <div class="uk-countdown-number uk-countdown-days"></div>
                            <div class="countdown-text">
                                <p> DAYS</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="box">
                            <div class="uk-countdown-number uk-countdown-hours"></div>
                            <div class="countdown-text">
                                <p> HOURS</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="box">
                            <div class="uk-countdown-number uk-countdown-minutes"></div>
                            <div class="countdown-text">
                                <p> MINUTES</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="box">
                            <div class="uk-countdown-number uk-countdown-seconds"></div>
                            <div class="countdown-text">
                                <p> SECONDS</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form class="uk-grid-small uk-width-4-5@m m-auto mt-lg-6  mt-4 countdown-form" uk-grid method="POST" action="http://localhost:5500/commingsoon">
                    <div class="uk-width-expand  pl-0">
                        <input type="text" name="emailid" class="uk-input uk-form-small" style={{border:"0"}} placeholder="Your email address" /></div>
                    <div class="uk-width-1-3@s uk-width-auto pl-1">
                        <input type="submit" value="Subscribe" class="button circle block" /></div>
                </form>
                
                   
         
            </div>
        </div>


    </div>
    )
}

export default Specialitycommingsoon
