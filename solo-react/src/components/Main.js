import React from "react"
import Middle from "./middle";

function Main(){
    return(
        <div  className="theMain">
            <h2 className="name">Ridwan Tajudeen</h2>
            <h5 className="frontEnd">Frontend Developer</h5>
           <a  href="https://github.com/Ridwantajudeen"> <h6 className="link"> visit my GitHub</h6> </a>
           <button className="email">✉ Email</button>
           < Middle />
            

    </div>
    )
}

export default Main;