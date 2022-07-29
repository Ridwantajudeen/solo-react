// Tutorial.js file

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faFacebook, faGithub,faLinkedin,  faTwitter,} from "@fortawesome/free-brands-svg-icons";

const Tutorial = () => {

  return (
    <div className="text-center mt-5">
      
        
        
     
      <div className="mt-5">
        
        <FontAwesomeIcon icon={faFacebook} className="btn" />
        <FontAwesomeIcon icon={faGithub} className="btn" />
        <FontAwesomeIcon icon={faTwitter} className="btn " />
        
        <FontAwesomeIcon icon={faLinkedin} className="btn " />
        
      </div>
    </div>
  );
};
export default Tutorial;
