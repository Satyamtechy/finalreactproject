import React from 'react'

const Campus = () => {
    return (
        <div>
            <div class="container">
        <div class="row">
            <div class="col-md-3">

            </div>
            <div class="col-md-6 main">
                <form  action="http://localhost:5500/sign_up" method="POST">
                <br /><br />
                    <h1>CAMPUS AMBASSADOR REGISTRATION FORM</h1>
                    Name<br />
                    <input type="text" class="box" id="name" name="name" placeholder="Enter your name" required />
                    
                    Email<br />
                    <input type="text" class="box" id="email" name="email" placeholder="Enter your email" required />
                    
                    Phone<br />
                    <input type="text" class="box" id="phno" name="phno" placeholder="Enter your phone number" required />
                    
                    College Name<br />
                    <input type="text" class="box" id="college" name="college" placeholder="Enter your college name" required />
                    <br />
                    <input class="btn btn-dark" type="submit" value="Submit" id="submit" />
                </form>
            </div>
            <div class="col-md-3">
            </div>
        </div>
    </div>

        </div>
    )
}

export default Campus
