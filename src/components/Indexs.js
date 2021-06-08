import React from 'react'

const Indexs = () => {
    return (
        <div>
        <style type="text/css">{`
        body {
            background-color: violet;
        }
        
        input[type=text] {
            width: 100%;
            /* Full width */
            padding: 12px;
            /* Some padding */
            border: 1px solid #ccc;
            /* Gray border */
            border-radius: 4px;
            /* Rounded borders */
            box-sizing: border-box;
            /* Make sure that padding and width stays in place */
            margin-top: 6px;
            /* Add a top margin */
            margin-bottom: 16px;
            /* Bottom margin */
            resize: vertical/* Allow the user to vertically resize the textarea (not horizontally) */
        }
        
        .container {
            position: relative;
            top: 50px;
            border-radius: 5px;
            background-color: #ffb6c1;
            padding: 20px;
        }
        `}
    </style>
    <div class="container">
        <form action="http://localhost:5500/remainder" method="POST">

            <label for="Name">Name</label>
            <input type="text" id="fname" name="Name" placeholder="Your name.." />

            <label for="Email">Email</label>
            <input type="text" id="Email" name="Email" placeholder="Your email.." />

            <label for="Phone">Phone-No</label>
            <input type="text" id="Phone-No" name="Phone" placeholder="Your contact details.." />

            <button>Submit</button>

        </form>

    </div> 
        </div>
    )
}

export default Indexs
