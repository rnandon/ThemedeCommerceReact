import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="center">
          {/* Column1 */}
          <div className="col">
            <h1 className="list-unstyled">
              <li>USA</li>
              <li>DevCodeCamp</li>
            </h1>
          </div>
        </div>
        <hr />
        <div className="center">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SportStick | Ryan, Craig, Nate and Koy
            | 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;