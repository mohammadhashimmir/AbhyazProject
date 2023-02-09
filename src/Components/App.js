import React from "react";
import Jobs from "./Jobs";
import "./App.css";
import Footer from "./Footer";

const internshipDetails=[
    {Heading:"Internship timing",
    Description:"From Monday to Saturday (1PM to 6PM) 2nd and 4th Saturday will be off (Holiday)."
},
{Heading:"Duration",
Description:"Minimum of 1 month for undergraduate/ 6 month for final year student & graduates / 3 month for returnship member."
},
{Heading:"Certificate",
Description:"After your completion of internship, you will be receiving the certificate within a week."
},
{Heading:"Stipend",
Description:"Outcome based payment, mentor will evaluate the task and for each qualified outcome you will be paid."
},
]
const renderedList=internshipDetails.map((items)=>{
    return(
            <div className="ui card"  key={items.Heading}>
            <div className="content">
            <div className="meta"><h2>{items.Heading}</h2></div>
            <div className="description"><p>{items.Description}</p></div>
            </div>
            </div>
    )
})
const App=()=>{
    return(

     <div>
         <h1 className="ui center aligned header">Abhyaz Internship Jobs</h1> 
         <h3 className="ui center aligned header">Current Openings</h3>
         <div className="ui divider d2"></div>
         <Jobs/>
         <div className="ui divider"></div>
         <h3 className="ui center aligned header">About Internship</h3>
         <div className="ui divider d2"></div>
         <div className="ui centered cards">
         {renderedList}  
         </div>
         <Footer/>
        </div>
    )
};

export default App;