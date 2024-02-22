import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";

import android from "../images/android-studio.png";
import bootstrap4 from "../images/bootstrap4.png";
import git from "../images/git.png";
import flutter from "../images/flutter.png";
import css3 from "../images/css3.png";
import firebase from "../images/firebase.png";
import github from "../images/github.png";
import html5 from "../images/html5.png";
import java from "../images/java.png";
import jquery from "../images/jquery.png";
import js from "../images/js.png";
import linux from "../images/linux.png";
import nodejs from "../images/nodejs.png";
import npm from "../images/npm.png";
import postman from "../images/postman.png";
import gatsby from "../images/gatsby.png";
import react from "../images/react.png";
import sass from "../images/sass.png";
import expressjs from "../images/expressjs.png";
import netlify from "../images/netlify.png";
import vscode from "../images/vscode.png";
import figma from "../images/figma.png";
import mysql from "../images/mysql.png";
import mongodb from "../images/mongodb.png";

import "../styles/skills.scss";
import Fade from "react-reveal/Fade";

class Skills extends Component {
  render() {
    return (
      <div id="skill-top">
        <Fade bottom>
          <h3 className="heading"> My Skill-Set </h3>
          <h4 className="about-me-bold1">
            {" "}
            Some technologies I have experience working with :
          </h4>
        </Fade>

        <div id="no-mob" className="logo-container">
          <Fade bottom>
            <Column flexGrow={1}>
              <Row wrap vertical="center">
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={html5} alt="html5"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={css3} alt="css"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={sass} alt="sass"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={js} alt="js"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={react} alt="react"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={bootstrap4} alt="bootstrap"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={jquery} alt="jquery"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={github} alt="github"></img>
                </Column>
              </Row>
            </Column>
          </Fade>

          <Fade bottom>
            <Column flexGrow={1}>
              <Row wrap vertical="center">
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={java} alt="java"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={gatsby} alt="gatsby"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={git} alt="git"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={flutter} alt="flutter"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={nodejs} alt="node"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={mysql} alt="mysql"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={npm} alt="npm"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={expressjs} alt="express"></img>
                </Column>
              </Row>
            </Column>
          </Fade>

          <Fade bottom>
            <Column flexGrow={1}>
              <Row wrap vertical="center">
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={postman} alt="postman"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo1" src={mongodb} alt="mongodb"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={android} alt="android"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={firebase} alt="firebase"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={linux} alt="linux"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    src={vscode}
                    alt="visual studio code"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={figma} alt="figma"></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img className="logo" src={netlify} alt="netlify"></img>
                </Column>
              </Row>
            </Column>
          </Fade>
        </div>
      </div>
    );
  }
}
export default Skills;
