import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImFacebook, ImTwitter } from "react-icons/im";
import GooglePlay from "../images/google-play.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__nav">
        <ul>
          <li>
            <Links to="#" className="footer__link">
              About Disney+ Hotstar
            </Links>
          </li>

          <li>
            <Links to="#" className="footer__link">
              Terms Of Use
            </Links>
          </li>

          <li>
            <Links to="#" className="footer__link">
              Privacy Policy
            </Links>
          </li>

          <li>
            <Links to="#" className="footer__link">
              FAQ
            </Links>
          </li>

          <li>
            <Links to="#" className="footer__link">
              Feedback
            </Links>
          </li>

          <li>
            <Links to="#" className="footer__link">
              Careers
            </Links>
          </li>
        </ul>

        <p className="footer__copyright">
          © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related
          channel and programming logos are service marks of, and all related
          programming visuals and elements are the property of, Home Box Office,
          Inc. All rights reserved.
        </p>
      </div>
      <div className="connect__with__us">
        <p className="footer___content__title">Connect with us</p>
        <a href="" className="footer__social__icons">
          <ImFacebook />
        </a>
        <a href="" className="footer__social__icons">
          <ImTwitter />
        </a>
      </div>
      <div className="footer__app">
        <p className="footer___content__title">Disney+ Hotstar App</p>
        <a
          href="https://play.google.com/store/apps/details?id=in.startv.hotstar"
          className="playstore"
          style={{ backgroundImage: `url(${GooglePlay})` }}
        >
          &nbsp;       
        </a>


        <a
          href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8"
          className="appstore"
          style={{ backgroundImage: `url(${GooglePlay})` }}
        >
          &nbsp;       
        </a>
      </div>
    </footer>
  );
};

const Links = styled(Link)`
  padding: 0 20px 0 0;
`;
