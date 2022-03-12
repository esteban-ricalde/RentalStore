import React from "react";
import { Twitter } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="footer d-flex justify-content-around p-2">
      <div>
        <h6>Follow Us On</h6>
        <span className=" d-flex flex-column justify-content-between align-items-center">
          <Twitter />
          <Facebook />
          <Instagram />
        </span>
      </div>
      <div>
        <h6>Customer Assistance</h6>
        <div className="d-flex flex-column align-items-center">
          <p className="m-0">
            Tel: <a href="tel:123-456-7890">123-456-7890</a>
          </p>
        
        
          <p className="m-0">
            Email: <a href="fish_shane@hotmail.com">Paradise Rentals</a>
          </p>
        
        
          <p className="m-0">
            Fax: <a href="tel:123-456-7890">123-456-7890</a>
          </p>
        </div>
      </div>
      <div>
        <h6>Resources</h6>
      </div>
    </div>
  );
}

export default Footer;
