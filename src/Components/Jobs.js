import React from "react";
import "./Jobs.css";

const jobList=[
    {header:"Student Internship - Remote Job",
    role:"Mechanical Engineer - Intern",
    description:"MTC is looking for a Mechanical Design Engineer who wants to gain industry experience. The candidate is expected to be a highly-motivated engineer with good communication skills. If you are self-driven and ambitious tech-savvy professional and have an eye for detail, then you are at the right place. ",
    apply:"https://mtabtechnology.zohorecruit.com/jobs/Internship-for-Students/495303000015385003/Mechanical-Engineer---Intern?source=CareerSite"
},
{header:"Student Internship - Remote Job",
role:"Software Engineers - Intern",
description:"MTC is looking for a Software Engineer Interns who wants to use their technical skills in the software engineering process. The candidate is expected to be a highly-motivated engineer with good exposure in designing and developing computer softwares. If you are self-driven, smart and ambitious tech-savvy professional and have an eye for detail, then you are at the right place. ",
apply:"https://mtabtechnology.zohorecruit.com/jobs/Internship-for-Students/495303000015385277/Software-Engineers---Intern?source=CareerSite"
},
{header:"Student Internship - Remote Job",
role:"Data Analyst (Intern) Returnship",
description:"MTC is looking for Analytical and Dynamic Data Analyst who wants to gain industry experience. The candidate is expected to come up with insightful data presentation to make informed decisions. If you’re familiar working with data and have an eye for detail, then you are at the right place.",
apply:"https://mtabtechnology.zohorecruit.com/jobs/Internship-for-Students/495303000015385335/Data-Analyst-Intern-Returnship?source=CareerSite"
},
{header:"Student Internship - Remote Job",
role:"Web Designer Intern",
description:"MTC is looking for a Web Developer Intern who wants to gain real time experience in designing and constructing websites. The candidate is expected to have a good knowledge in coding and technical aspects of sites. If you are self-driven and ambitious, then you are at the right place.",
apply:"https://mtabtechnology.zohorecruit.com/jobs/Internship-for-Students/495303000015385520/Web-Designer-Intern?source=CareerSite"
},
{header:"Student Internship - Remote Job",
role:"System Admin (Intern)",
description:"MTC is looking for a capable motivated System Admin Intern to take over various aspects of the configuration and maintainance of our computer system. Do you enjoy coming up with creative solution to a business point ? Are you constantly updating your knowledge on hardware and software trends ? If yes then you will fit for our organization place .",
apply:"https://mtabtechnology.zohorecruit.com/jobs/Internship-for-Students/495303000015385297/System-Admin-Intern-?source=CareerSite"
},
{header:"Student Internship - Remote Job",
role:"HR Executive-Intern",
description:"MTC is hiring a HR Executive to manage our Company's recruiting, learning and development and employee performance programs",
apply:"https://mtabtechnology.zohorecruit.com/jobs/Internship-for-Students/495303000015385700/HR-Executive-Intern?source=CareerSite"
},
{header:"Student Internship - Remote Job",
role:"Operations Executive Intern",
description:"MTC is looking for Operations Executive Intern who wants to gain industry experience in performing administrative tasks and supporting our Operations team. If you are ready to start your profession as an Operations Executive and get real-time experience in operation processes, then you are at the right place. ",
apply:"https://mtabtechnology.zohorecruit.com/jobs/Internship-for-Students/495303000015385355/Operations-Executive-Intern?source=CareerSite"
},
{header:"Student Internship - Remote Job",
role:"Content Writer - Documentation (Intern)",
description:"MTC is looking for Technical Writer Interns who wants to gain industry experience. The candidate is expected to come up with good quality documentation that contributes to our team. If you’re familiar with producing online content and have an eye for detail, then you are at the right place.",
apply:"https://mtabtechnology.zohorecruit.com/jobs/Internship-for-Students/495303000015385466/Content-Writer---Documentation-Intern-?source=CareerSite"
},
{header:"Student Internship - Remote Job",
role:"Event management - Intern",
description:"MTC is looking  for an excellent and talented Agile project engineer intern to initiate an outstanding part in our organizational growth. If you are good at collecting customer feedback, manpower planning and monitoring & controlling also want to be a professional in it, then you are at a right place.",
apply:"https://mtabtechnology.zohorecruit.com/jobs/Internship-for-Students/495303000015385257/Event-management---Intern?source=CareerSite"
},
{header:"Student Internship - Remote Job",
role:"Support Executive- Intern",
description:"MTC is looking for the Support Executive Interns who want to gain industry experience in supporting the overall processes and tasks in various company aspects. If you are ready to start your Professional career and get real-time experience, then you are at the right place.",
apply:"https://mtabtechnology.zohorecruit.com/jobs/Internship-for-Students/495303000015385432/Support-Executive--Intern?source=CareerSite"
},
{header:"Student Internship - Remote Job",
role:"Mechatronics/Automation Engineer- Intern",
description:"MMTC is looking for a Mechatronics Engineer who wants to gain industry experience. The candidate is expected to be a highly-motivated engineer with good communication skills. If you are self-driven, smart and ambitious tech-savvy professional and have an eye for detail, then you are at the right place.",
apply:"https://mtabtechnology.zohorecruit.com/jobs/Internship-for-Students/495303000015385061/Mechatronics-Automation-Engineer--Intern?source=CareerSite"
},
{header:"Student Internship - Remote Job",
role:"Business Development Executive Intern",
description:"MTC is looking for a Business Development Executive intern to handle & putting ideas into organizational growth. You will be working closely with team members to track all the business requirements. If you are a learning student and want to be a professional in it, then you are at the right place.",
apply:"https://mtabtechnology.zohorecruit.com/jobs/Internship-for-Students/495303000015385393/Business-Development-Executive-Intern?source=CareerSite"
},
];


const renderedList=jobList.map((items)=>{
    return (   
        <div className="ui raised card" key={items.role}>
    <div className="ui content">
    <div className="meta m2">{items.header}</div>
    <h2 className="ui header name">{items.role}</h2>
    <div className="description"> {items.description}</div> 
    </div>
    <div className="extra content">
    <span className="s1">To know more or Apply, Click</span>
    <button className="ui right floated button" onClick={()=>{window.open(`${items.apply}`, '_blank')}}>
    <img style={{width:"40px"}} src="https://mtabtechnology.com/wp-content/uploads/2020/06/mtabtechnology.png"/>
    </button>
    </div>
    </div>   
    )
  });


const Jobs=()=>{
    return(
        <div className="ui four  stackable cards"> 
            {renderedList}
        </div>
    )
};
export default Jobs;