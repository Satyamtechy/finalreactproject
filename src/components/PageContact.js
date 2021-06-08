import React from 'react'

const PageContact = () => {
    return (
        <div>
            <div class="page-content">

<div class="page-content-inner">


    
    <h1 class="mb-0">Let's Talk?</h1>
    <p class="mt-2">We like to create things with fun, open minded people</p>



    <div class="uk-child-width-1-2@m uk-flex-middle" uk-grid>

        <div>


            <form uk-grid="" class="uk-grid" method="POST" action="http://localhost:5500/query" > 
                <div class="uk-width-1-2@s uk-first-column">
                    <label class="uk-form-label">Name</label>
                    <input class="uk-input" type="text" placeholder="Name" name="name" /> 
                </div>
                <div class="uk-width-1-2@s">
                    <label class="uk-form-label">Email</label>
                    <input class="uk-input" type="text" placeholder="Email" name="email" /> 
                </div>
                <div class="uk-width-1-1@s uk-grid-margin uk-first-column">
                    <label class="uk-form-label">Message</label>
                    <textarea class="uk-textarea" placeholder="Enter Your Message here..." name="message"
                        style={{height:"160px"}}></textarea> 
                </div>
                <div class="uk-grid-margin uk-first-column">
                    <input type="submit" value="Send" class="button success" />
                </div>
            </form>

        </div>
        <div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8568684280995!2d-122.46879874955597!3d37.76995417966093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085874252dbf581%3A0xc63d8069e9eed41a!2sAcademy%20Store!5e0!3m2!1sen!2sso!4v1567521705213!5m2!1sen!2sso"
                width="100%" height="450" frameborder="0" style={{border:"0;"}} allowfullscreen=""></iframe>

        </div>

    </div>


</div>
</div>
        </div>
    )
}

export default PageContact
