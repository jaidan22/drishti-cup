import React from "react";
// import { Link } from "react-router-dom";
import "./footer.css";
// import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import Facebook from '../../icons/Facebook.svg';
import Facebook_active from '../../icons/Facebook_active.svg';
import Youtube from '../../icons/Youtube.svg';
import Youtube_active from '../../icons/Youtube_active.svg';
import Instagram from '../../icons/Instagram.svg';
import Instagram_active from '../../icons/Instagram_active.svg';
import LinkedIn from '../../icons/LinkedIn.svg';
import LinkedIn_active from '../../icons/LinkedIn_active.svg';
import Map from '../../images/Map.png';

class Hover extends React.Component {
  constructor() {
    super();

    this.state = {
      isHover: false
    };

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMouseEnterHandler() {
    this.setState({
      isHover: true
    });
  }

  onMouseLeaveHandler() {
    this.setState({
      isHover: false
    });
  }

}

const footer = new Hover();
const Footer = () => {
  return (
    <>
      <div className="footer" style={{ background: "#6906B7" }}>

        <div className="footer-content">

          <div className="footer-content-main">
            <div className="contact-us">
            <h7 className="contact-us-title">Conveners :</h7>
              <li className="contacts">&emsp;Aswin Jayaji</li>
              <li className="contacts">&emsp;Anjali George</li><br/>
              <h7 className="contact-us-title">Contact Us :</h7>
              <li className="contacts">&emsp;Nadeem&ensp; +91&nbsp; 9895418183</li>
            </div>
            <div className="map-wrapper">
              <a href="https://images.shiksha.com/mediadata/images/listingGoogle/listingLocationlive54272.jpg" target='_blank' rel="noreferrer" className="map-link">
                <img src={Map} alt="Map" className="map" />
              </a>
            </div>
          </div>

          <div className="footer-content-secondary">
            <h6 className="tag">Follow for more updates</h6>

            <div className="social-media">
              <li>
                <div className="icon" onMouseEnter={footer.onMouseEnterHandler} onMouseLeave={footer.onMouseLeaveHandler}>
                  <a href="https://www.facebook.com/drishticet/" target='_blank' rel="noreferrer">
                  <img src={Facebook} onMouseLeave={e=>(e.currentTarget.src=Facebook)} onMouseOver={e=>(e.currentTarget.src=Facebook_active)} alt="Facebook" className="social-icons" />
                  </a>
                </div>
              </li>
              <li>
                <div className="icon" onMouseEnter={footer.onMouseEnterHandler} onMouseLeave={footer.onMouseLeaveHandler}>
                  <a href="https://www.instagram.com/drishticet/" target='_blank' rel="noreferrer">
                  <img src={Instagram} onMouseLeave={e=>(e.currentTarget.src=Instagram)} onMouseOver={e=>(e.currentTarget.src=Instagram_active)} alt="Instagram" className="social-icons" />
                  </a>
                </div>
              </li>
              <li>
                <div className="icon" onMouseEnter={footer.onMouseEnterHandler} onMouseLeave={footer.onMouseLeaveHandler}>
                  <a href="https://www.linkedin.com/company/drishticet/" target='_blank' rel="noreferrer">
                  <img src={LinkedIn} onMouseLeave={e=>(e.currentTarget.src=LinkedIn)} onMouseOver={e=>(e.currentTarget.src=LinkedIn_active)} alt="LinkedIn" className="social-icons" />
                  </a>
                </div>
              </li>
              <li>
                <div className="icon" onMouseEnter={footer.onMouseEnterHandler} onMouseLeave={footer.onMouseLeaveHandler}>
                  <a href="https://www.youtube.com/drishticet" target='_blank' rel="noreferrer">
                  <img src={Youtube} onMouseLeave={e=>(e.currentTarget.src=Youtube)} onMouseOver={e=>(e.currentTarget.src=Youtube_active)} alt="Youtube" className="social-icons" />
                  </a>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Footer;
