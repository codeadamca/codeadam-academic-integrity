import React,{Component} from "react";

import {Link} from 'react-router-dom';

import Header from './../components/Header';
import BigButton from './../components/BigButton';
import NextSteps from './../components/NextSteps';
import Quote from './../components/Quote';
import Ted from './../components/Ted';
import YouTube from './../components/YouTube';
import Meme from './../components/Meme';
import Twitter from './../components/Twitter';
import ImageUrl from './../components/ImageUrl';
import License from './../components/License';

import codeDoesntWork from './../images/memes/code-doesnt-work.jpg';

import w3schoolsHtmlImages from './../images/screenshots/w3schools-html-images.png';
import w3schoolsSnippetHtmlImages from './../images/screenshots/w3schools-snippet-html-images.png';
import mdnJavaScriptFunction from './../images/screenshots/mdn-javascript-functions.png';
import mdnSnippetJavaScriptFunction from './../images/screenshots/mdn-snippet-javascript-functions.png';
import phpFunctions from './../images/screenshots/php-functions.png';
import phpSnippetFunctions from './../images/screenshots/php-snippet-functions.png';
import phpSnippetMail from './../images/screenshots/php-snippet-mail.png';

import mdnSnippetJavaScriptForms from './../images/screenshots/mdn-snippet-javascript-forms.jpg';
import mdnJavaScriptForms from './../images/screenshots/mdn-javascript-forms.png';
import arduinoSnippetKeyboard from './../images/screenshots/arduino-snippet-keyboard.png';
import arduinoKeyboard from './../images/screenshots/arduino-keyboard.png';


class Examples extends Component {
  render() {
    return (
      <div className="Examples">

        <Header title="Chapter 4: Copying Code from Examples"></Header>

        <div className="w3-padding-32">

          <div className="ca-container-600">

            <h2 className="w3-text-red w3-center">How to Identify Coding Examples?</h2>

            <p>
              Examples used while coding is the equivalent of copying content from a paper or book while 
              writing an essay.
              Examples provide working code snippets that complete an objective.
              For example, coding examples may include code that: 
            </p>

            <ul className="w3-left-align">
              <li>Use JavaScript to add a slideshow on a webpage</li>
              <li>Submits form content to an email address using PHP</li>
              <li>Use Python to add password protection to an application</li>
              <li>Causes a LEGO&trade; EV3 robot to follow a line</li>
            </ul>

            <p>
              Copying code from examples will require permission (either from the author or the website 
              license), a citation, and within the assignment academic integrity guidelines. 
            </p>

            <p>
              Code examples are easier to identify as they are ready to use and will work directly after
              pasting them into a project.
            </p>

          </div>

        </div>

        <Meme image={codeDoesntWork} title="Code Deosn't Work" date="2019" colour="light-grey"></Meme>

        <div className="w3-padding-32">

          <div className="ca-container-600">

            <h2 className="w3-text-red w3-center">Coding Examples</h2>

            <p>
              Below are a series of examples snippets. 
              The examples include a variety of different languages and sources. 
            </p>

            <hr className="ca-hr" />

            <h3 className="w3-center">Example 1: MDN and JavaScript</h3>

            <img src={mdnJavaScriptForms} className="w3-image" />

            <ImageUrl url="https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript"></ImageUrl>

            <p>
              Below is snippet of code from 
              the <a href="hhttps://developer.mozilla.org">Mozilla Developer Network</a> page displayed above. 
            </p>

            <img src={mdnSnippetJavaScriptForms} className="w3-image ca-code-image" />

            <ImageUrl url="https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript"></ImageUrl>

            <p>
              This code provides an example of how to send form data using 
              a <code>XMLHttpRequest</code>.
              This is a working example that just needs to be customized to suit a projects specific needs. 
              This example would be subject to copyright and would need to be cited (assumming the assignment the 
              student is working on permits the use of examples). 
            </p>

            <License site="mdn"></License>

            <hr className="ca-hr" />

            <h3 className="w3-center">Example 2: Arduino and a Keyboard</h3>

            <img src={arduinoKeyboard} className="w3-image" />
            
            <ImageUrl url="https://www.arduino.cc/en/Tutorial/BuiltInExamples/KeyboardAndMouseControl"></ImageUrl>

            <p>
              Below is an Arduino code snippet from 
              the <a href="https://www.arduino.cc/">Arduino</a> page displayed above. 
            </p>

            <img src={arduinoSnippetKeyboard} className="w3-image" />

            <ImageUrl url="https://www.arduino.cc/en/Tutorial/BuiltInExamples/KeyboardAndMouseControl"></ImageUrl>

            <p>
              This code provides a sample of how to incorporate keyboard input using buttons and an
              Arduino.
              This snippet and circuit are a working example and ready to be customized for a specific project.
            </p>

            <License site="arduino"></License>
            
          </div>
        
        </div>

        <NextSteps text="In the next chapter we will review the use of coding libraries, frameworks, packages, and programmer resources." previous="/documentation" next="/libraries-frameworks"></NextSteps>        

        <BigButton text="Chapter 5: Libraries and Frameworks" url="/libraries-frameworks" icon="fas fa-chevron-right"></BigButton>

      </div>
    );
  }
}

export default Examples;
