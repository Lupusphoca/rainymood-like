import React from "react";
import TwitterLogo from "../img/twitter.png";
import InstagramLogo from "../img/instagram.png";
import FacebookLogo from "../img/facebook.png";

class SocialMedia extends React.Component {
  render() {
    return (
      /*target blank allow to open a new tab when button are clicked*/
      <div className="bloc">
        <a href="https://twitter.com/Loufhok" target="_blank">
          <img class="social-media-image" src={TwitterLogo} alt="Twitter"></img>
        </a>
        <a href="https://www.instagram.com/parnaudet/?hl=fr" target="_blank">
          <img class="social-media-image" src={InstagramLogo} alt="Instagram"></img>
        </a>
        <a href="https://www.linkedin.com/in/pierre-arnaudet/" target="_blank">
          <img class="social-media-image" src={FacebookLogo} alt="LinkedIn"></img>
        </a>
      </div>
    );
  }
}

export default SocialMedia;
