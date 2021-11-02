import React,{Component} from "react";

import {Link} from 'react-router-dom';

import IntegrityGuidelines from './IntegrityGuidelines';

import Header from './../components/Header';
import BigButton from './../components/BigButton';
import NextSteps from './../components/NextSteps';
import Quote from './../components/Quote';
import Ted from './../components/Ted';
import YouTube from './../components/YouTube';
import Meme from './../components/Meme';
import Topics from './../components/Topics';
import Twitter from './../components/Twitter';
import ImageUrl from './../components/ImageUrl';
import License from './../components/License';

import carCopying from './../images/memes/car-copying.jpg';

import w3schoolsHtmlImages from './../images/screenshots/w3schools-html-images.png';
import w3schoolsSnippetHtmlImages from './../images/screenshots/w3schools-snippet-html-images.png';
import mdnJavaScriptFunction from './../images/screenshots/mdn-javascript-functions.png';
import mdnSnippetJavaScriptFunction from './../images/screenshots/mdn-snippet-javascript-functions.png';
import phpFunctions from './../images/screenshots/php-functions.png';
import phpSnippetFunctions from './../images/screenshots/php-snippet-functions.png';
import phpSnippetMail from './../images/screenshots/php-snippet-mail.png';


import css from './../images/topics/css.png';
import html from './../images/topics/html.png';
import javascript from './../images/topics/javascript.png';

import mysql from './../images/topics/mysql.png';
import php from './../images/topics/php.png';

import arduino from './../images/topics/arduino.png';
import nodejs from './../images/topics/nodejs.png';
import socket from './../images/topics/socket.png';

class AssignmentTemplates extends Component {
  render() {
    return (
      <div className="AssignmentTemplates">

        <Header title="Chapter 6: Assignment Templates"></Header>

        <div className="w3-padding-32">

          <div className="ca-container-600">

            <h2 className="w3-text-red w3-center">Assignment Academic Integrity Guidelines</h2>

            <p>
              As an author, in academia or industry, copying content from an article or novel without  
              permission and/or a citation is always plagiarism.
            </p>

            <p>
              However, in the programming industry copying is often permitted, and sometimes even preferred. 
              Why program something from scratch when there is an existing solution that has been used, 
              tested, and patched. 
            </p>

            <p>
              While programming in academia, students will learn programming fundamentals by coding everything from 
              scratch, and as the program progresses, students will learn to integrate more and more prewritten code 
              into projects.
              For that reason every coding assignment will include a set of Assignment Academic Integrity Guidelines.
              These guildelines will outline what use of prewritten code is permitted for each assignment. 
            </p>

          </div>

        </div>

        <Meme image={carCopying} title="Part of Your Code Doesn't Work" date="2020" colour="light-grey"></Meme>

        <div className="w3-padding-32">

          <div className="ca-container-600">

            <h2 className="w3-text-red w3-center">Sample Academic Integrity Guidelines</h2>

            <p>
              Below are a few samples of Assignment Academic Integrity Guidelines:
            </p>

            <hr className="ca-hr" />

            <h3 className="w3-center">Example 1: Introduction Assignment</h3>

            <p>
              Below are the guidelines for an introduction to JavaScript assignment. 
              The assignment requires students to code an HTML/CSS contact form, add validation using 
              JavaScript, and submit the form contents to an email address using AJAX and an API.
            </p>

            <Topics topics={introduction}></Topics>

            <IntegrityGuidelines documentation={true} examples={false} libraries={false}></IntegrityGuidelines>

            <p>
              The above guidelines are for this introductory assignment permit students to copy code from 
              documentation only.
            </p>

            <hr className="ca-hr" />

            <h3 className="w3-center">Example 2: Intermediate Assignment</h3>

            <p>
              Below are the guidelines for an intermediate PHP assignment. 
              The assignment requires students to build a basic Content Management System (CMS). 
              The CMS admin must be password protected and provide the ability to manage admin accounts
              and blog articles. 
            </p>

            <Topics topics={intermediate}></Topics>

            <IntegrityGuidelines documentation={true} examples={true} libraries={false}></IntegrityGuidelines>

            <p>
              The above guidelines permit the copying of code from documentation and code examples. 
              Students could copy code examples that help upload images, encrypt passwords, validate form data,
              but not copy an existing CMS example.
              Students must still gain permission from the author or license, include a citation, and 
              demonstrate an understanding of the copied code if requested.
            </p>

            <hr className="ca-hr" />

            <h3 className="w3-center">Example 3: Advanced Assignment</h3>

            <p>
              Below are the guidelines for an advanced Arduino and Node.js assignment. 
              The assignment requires students to build a basic circuit using an Arduino and then connect
              the Arduino to a Node.js application using the serial port.
            </p>

            <Topics topics={advanced}></Topics>

            <IntegrityGuidelines documentation={true} examples={true} libraries={true} list="Socket.io, SerialPort"></IntegrityGuidelines>

            <p>
              The above guidelines permit the copying of code from documentation and examples and the use 
              of two libraries: <a href="https://socket.io/">Socket.io</a> and <a href="https://www.npmjs.com/package/serialport">SerialPort</a>.
            </p>
            
          </div>
        
        </div>

        <NextSteps text="In the next chapter we will review a series of academic misconduct case studies and their academic penalties." previous="/libraries-frameworks" next="/case-studies"></NextSteps>        

        <BigButton text="Chapter 7: Academic Misconduct Case Studies" url="/case-studies" icon="fas fa-chevron-right"></BigButton>

      </div>
    );
  }
}

export default AssignmentTemplates;


const introduction = [
  {image:css, url: 'https://www.w3.org/Style/CSS/'},
  {image:html, url: 'https://www.w3.org/html/'},
  {image:javascript, url: 'https://www.w3.org/standards/webdesign/script'}
];

const intermediate = [
  {image:mysql, url: 'https://www.mysql.com/'},
  {image:php, url: 'https://www.php.net/'}
];

const advanced = [
  {image:arduino, url: 'https://www.arduino.cc/'},
  {image:nodejs, url: 'https://nodejs.org/'},
  {image:socket, url: 'https://socket.io/'}
];

const advancedList = [
  {name:"SerialPost", url: 'https://www.npmjs.com/package/serialport'},
  {name:"Socket.io", url: 'https://socket.io/'}
];