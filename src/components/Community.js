import React,{useEffect} from 'react';


const Community = () => {

    useEffect(() => {
        function fetchData(){
            fetch("http://localhost:5500/community")
            .then(response=>{
                if(!response.ok){
                    throw Error("Error");
                }
                return response.json();
            })
            .then(data=>{
                console.log(data);
                const html=data.map(user=>{
                    return `
                    <div class="internship_details">
                        <div class="summer_intern">
                            <NavLink to = "/intern" >Product Manager Intern (3 to 6 months)</NavLink>
                            <NavLink to = "/intern" >Bangalore, Karnataka | Remote within India</NavLink>
                        </div>
                        
                        <div class="job_intern">
                                <NavLink to = "/Job">Product Manager Job</NavLink>
                                <NavLink to = "/Job" >Bangalore, Karnataka | Remote within India</NavLink>
                        </div>
                    </div>
                    `;
                }).join("");
                console.log(html);
                document.querySelector("#show").insertAdjacentHTML("afterbegin",html);
            })
            .catch(error=>{
                console.log("error");
            });
        }
        fetchData();
    }, [])

    return (
        <div>
           <div class="community">
       <div class="community_header">
        <div class="community_header_color">
            <h1 id="career">Careers</h1>
            <span id="mission">OUR MISSION</span>
        </div>
        <h1 id="title_community">Accelerate the World's Innovation</h1>
        <span id="title_desc">
            At TechnoColabs, people are the core of our mission.
            We’re obsessed about the happiness and success of our customers, clients and – above all – our team. Everyday, we strive to empower and support our teammates to help them realize their full potential.
        </span>
       </div>
       <div class="main">
           <div class="main_title"><span class="job">Current Job Openings</span></div>
                <div class="Internship" >
                    <div class="internship_details">
                            <span class="Internship_title">Summer Internship</span>
                            <span class="Internship_title">Job Opportunity</span>
                    </div>
                </div>
            <div>
                <div class="Internship" id="show">
                    

                </div>
            </div>
       </div>
       <hr id="break" />
       <div class="career_footer">
              <img src="./images/logo-atlassian-a.png"  alt="." />
              <img src="./images/logo-bookingcom.png" alt="." />
              <img src="./images/logo-icon-dropbox.png"  alt="." />
              <img src="./images/logo-icon-goldman-sachs.png" alt="." />
              <img src="./images/logo-icon-linkedin.png" alt="." />
              <img src="./images/logo-icon-stripe.png"  alt="." />
              <img src="./images/logo-icon-vmware.png" alt="." />
       </div>
    </div> 
        </div>
    )
}

export default Community
