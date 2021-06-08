import React,{useEffect} from 'react'
import './Job.css'

const Job = () => {

    useEffect(() =>{

        function move(e) {

            window.location.href="#apply";
      
            e.preventDefault();
            e.stopPropagation(); 
      
            }
    },[])
    useEffect(() =>{
        function apply() {
            var details={
                name:document.getElementById("name").value,
                lname:document.getElementById("Last Name").value,
                email:document.getElementById("Email").value,
                phone:document.getElementById("Phone").value,
                linkedin:document.getElementById("LinkedIn Profile").value,
                techno:document.getElementById("techno").value
            };
            const optionss={
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                }, 
                body:JSON.stringify(details)
            }
            fetch("http://localhost:5500/apply",optionss)
            
        }
    },[])


    return (
        <div>
            <div class="header">
        <div class="header_title">
            <span id="title">TechnoColabs</span>
            <span id="career">CAREERS</span>
        </div>
    </div>
    <div class="main_content">
        <div class="Career_title_button">
            <span id="job_title">Architect</span>
            <button onclick="move()" >Apply Now</button>
        </div>
        <div class="location_job">
            BANGALORE, KARNATAKA | REMOTE WITHIN INDIA
        </div>
        <div class="description_job">
            As an Architect, you will be expected to ideate, execute and deliver even large and complex projects end-to-end, with or without the involvement of other team members.
                Be the go-to person for the team for designing any part of the system, guidance and troubleshooting.
                Proactively participate in code reviews and lead the architecture and design discussions, across the engineering organization.
                Work with the product team in helping define the scope of solutions, and limitations to build around.
                Ensuring timely delivery of all product deliverables.
                Mentoring engineers and setting best practices for architecting, coding, code reviews, etc.
                Ensuring performance and scalability in all new product features being developed. 
        </div>
        <div class="eligibilty_job">
            Overall of 9+ years expertise in software engineering and architecture.
            Proven experience with building scalable, fault-tolerant and highly-available systems.
            Experience in building out large/key projects and products from scratch.
            Expertise in Database modelling, preferably relational DB, spotting DB bottlenecks and writing optimized DB queries.
            Expertise in all common AWS Cloud technologies, Knowledge of CI/CD tools and workflows.
            Knowledge of containerization and orchestration systems (k8s) is a highly-preferred.
        </div>
    </div>
    <div class="apply_form">
        <span>Apply for this Job</span>
        <div id="apply">
            <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="name" />
                  
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="Last Name" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email </label>
                    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" />
                    
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Phone </label>
                    <input type="text" class="form-control" id="Phone" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">LinkedIn Profile</label>
                    <input type="text" class="form-control" id="LinkedIn Profile" aria-describedby="emailHelp" />
                    
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">What excites you about TechnoColabs?</label>
                    <input type="text" class="form-control" id="techno" />
                  </div>
                <button onclick="apply()" id="buttn" type="submit" class="btn">Submit</button>
              </form>
        </div>
    </div>
        </div>
    )
}

export default Job
