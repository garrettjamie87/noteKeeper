import React from "react";

function Footer(){
      const today = new Date();
     return( <footer>
      <p> Jamie Garrett &#169; {today.getFullYear()}</p>
      </footer>
     )}

export default Footer;