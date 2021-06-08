import React,{useEffect} from 'react' ;
const Demoregistration = () => {
  
return (

   
    <div class="container">
         <style type="text/css">
        {`
    * {
        box-sizing: border-box;
    }
    
    body {
        background: #520591;
        color: #7e6f80;
        line-height: 1.6;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding: 1em;
    }
    
    .container {
        max-width: 1170px;
        margin-left: auto;
        margin-right: auto;
        padding: 1em;
    }
    
    ul {
        list-style: none;
        padding: 0;
    }
    
    .brand {
        text-align: center;
    }
    
    .brand span {
        color: #fff;
    }
    
    .wrapper {
        box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);
    }
    
    .wrapper>* {
        padding: 1em;
    }
    
    .company-info {
        background: #c9e6ff;
    }
    
    .company-info h3,
    .company-info ul {
        text-align: center;
        margin: 0 0 1rem 0;
    }
    
    .contact {
        background: #f9feff;
    }
    /* FORM STYLES */
    
    .contact form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    
    .contact form label {
        display: block;
    }
    
    .contact form p {
        margin: 0;
    }
    
    .contact form .full {
        grid-column: 1 / 3;
    }
    
    .contact form button,
    .contact form input,
    .contact form textarea {
        width: 100%;
        padding: 1em;
        border: 1px solid #c9e6ff;
    }
    
    .contact form button {
        background: #c9e6ff;
        border: 0;
        text-transform: uppercase;
    }
    
    .contact form button:hover,
    .contact form button:focus {
        background: #92bde7;
        color: #fff;
        outline: 0;
        transition: background-color 2s ease-out;
    }
    /* LARGE SCREENS */
    
    @media(min-width:700px) {
        .wrapper {
            display: grid;
            grid-template-columns: 1fr 2fr;
        }
        .wrapper>* {
            padding: 2em;
        }
        .company-info h3,
        .company-info ul,
        .brand {
            text-align: left;
        }
    } 
    `}
</style>
    <h1 class="brand"><span>Demo</span> Registeration page</h1>
    <div class="wrapper animated bounceInLeft">
        <div class="company-info">
            <h3>Demo Classes</h3>

        </div>
        <div class="contact">
            <h3> Give your info </h3>

            <form method="POST" action="http://localhost:5500/send">
                <p>
                    <label>Name</label>
                    <input type="text" name="name" />
                </p>
                <p>
                    <label>Email Address</label>
                    <input type="email" name="email" />
                </p>
                <p>
                    <label>Phone Number</label>
                    <input type="text" name="phone" />
                </p>



                <button type="submit">  Submit  </button>
            </form>
        </div>
    </div>
</div>
);
}



export default Demoregistration;