import React,{Component} from "react";

import Header from './../components/Header';
import BigButton from './../components/BigButton';
import Meme from './../components/Meme';
import ImageUrl from './../components/ImageUrl';

import NextSteps from './../academic/NextSteps';
import License from './../academic/License';

import differentTech from './../images/memes/different-tech.jpg';
import citeCenterDiv from './../images/code/cite-center-div.png';
import citeValidateEmail from './../images/code/cite-validate-email.jpg';
import citeEv3Robot from './../images/code/cite-ev3-robot.jpg';
import jrDeveloper from './../images/memes/jr-developer.jpeg';
import w3schoolsCenterDiv from './../images/screenshots/w3schools-center-div.png';
import stackoverflowValidateEmail from './../images/screenshots/stackoverflow-validate-email.png';
import pybricksEv3Robot from './../images/screenshots/pybricks-ev3-robot.png';


class CitingCode extends Component {
  render() {
    return (
      <div className="CitingCode">

        <Header title="Chapter 2: Citing Code"></Header>

        <div className="w3-padding-32">

          <div className="ca-container-600">

            <h2 className="w3-text-red w3-center">How to Cite Code</h2>

            <p>
              Not all code needs to be cited. 
              Which code needs to be cited and which code does not needs to be cited will be covered in 
              the next two chapters. 
            </p>

            <p>
              For now, let's say we have found some code online that
              we would like to use in an assignment. 
              Let's also assume that 
              a) the code snippet falls under the <a href="https://creativecommons.org/">Creative Commons</a>;
              and b) the assignment permits the use of code samples.
              So how do we cite a code snippet?
            </p>

            <p>
              In your source code, directly above the snippet of code that requires a citation, add a comment including:
            </p>

            <ul className="w3-left-align">
              <li>a description of the source code</li>
              <li>the author (name, company, and/or screen name)</li>
              <li>the date it was copied</li>
              <li>a URL to the page the code was copied from</li>
            </ul>

          </div>

        </div>

        <Meme image={differentTech} title="Not the First" date="2019" colour="light-grey"></Meme>

        <div className="w3-padding-32">

          <div className="ca-container-600">

            <h2 className="w3-text-red w3-center">Citation Examples</h2>

            <p>
              Below are a series of citation examples. 
              The examples include a variety of different languages as the syntax for commenting
              varies. 
            </p>

            <p>
              For future reference, the three examples below are considered coding examples, not 
              documentation.
              The differences between documentation and examples is crucial and will be outlined 
              in the next few chapters.
            </p>

            <hr className="ca-hr" />

            <h3 className="w3-center">Example 1: HTML and CSS</h3>

            <img src={w3schoolsCenterDiv} className="w3-image" alt="" />

            <ImageUrl url="https://www.w3schools.com/howto/howto_css_center-vertical.asp"></ImageUrl>

            <p>
              Below is an HTML and CSS code snippet copied 
              from <a href="https://www.w3schools.com/">W3Schools</a>. 
              This code centers a <code>div</code> element horizontally and vertically on a web page:
            </p>

            <img src={citeCenterDiv} className="w3-image ca-code-image" alt="" />

            <ImageUrl url="https://www.w3schools.com/howto/howto_css_center-vertical.asp"></ImageUrl>

            <p>
              Note that if the HTML and CSS were placed in two different files, they would 
              both need to be cited separately.
            </p>

            <License site="w3schools"></License>

            <hr className="ca-hr" />

            <h3 className="w3-center">Example 2: JavaScript</h3>

            <img src={stackoverflowValidateEmail} className="w3-image" alt="" />
            
            <ImageUrl url="https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript"></ImageUrl>

            <p>
              Below is a JavaScript code snippet copied 
              from <a href="https://stackoverflow.com/">StackOverflow</a>. 
              This code defines a function that validates an email address:
            </p>

            <img src={citeValidateEmail} className="w3-image ca-code-image" alt="" />

            <ImageUrl url="https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript"></ImageUrl>

            <License site="stackoverflow"></License>

            <hr className="ca-hr" />

            <h3 className="w3-center">Example 3: Python and LEGO&trade; EV3</h3>

            <img src={pybricksEv3Robot} className="w3-image" alt="" />

            <ImageUrl url="https://pybricks.com/ev3-micropython/examples/robot_educator_line.html"></ImageUrl>
            
            <p>
              Below is a Python code snippet copied from <a href="https://pybricks.com/ev3-micropython">Pybricks</a>. 
              This code causes a LEGO&trade; EV3 robot to follow a black line:
            </p>

            <img src={citeEv3Robot} className="w3-image ca-code-image" alt="" />

            <ImageUrl url="https://pybricks.com/ev3-micropython/examples/robot_educator_line.html"></ImageUrl>

            <License site="pybricks"></License>

          </div>

        </div>



        <Meme image={jrDeveloper} title="Jr. Developers" date="2019" colour="light-grey"></Meme>

        <div className="w3-padding-32">

          <div className="ca-container-600">

            <h2 className="w3-text-red w3-center">Licenses</h2>

            <p>
              Even if properly cited, you must still make sure the content creator permits copying.
              Most popular coding resources use one of the following licenses:
            </p>

            <ul>
              <li><a href="https://creativecommons.org/licenses/">Creative Commons</a></li>
              <li><a href="https://www.gnu.org/licenses/gpl-3.0.en.html">General Public License</a></li>
              <li><a href="https://www.copyright.gov/fair-use/more-info.html">Fair Use</a></li>
            </ul>

            <p>
              If you cannot locate a license, look for the website Terms and Conditions.
              For example review the terms of use from <a href="https://www.w3schools.com/about/about_copyright.asp">W3Schools</a>.
            </p>
            <p>
              Even after reading the Terms and Conditions, it may still be unclear as to whether or not a 
              developer can use code from W3Schools for their own projects?
              In this case reach out to the website and ask.
              After a few email exchanges with W3Schools, I had the following questions answered:
            </p>
            
            <ol>
              <li>
                Can programmers use snippets of code from W3Schools for their personal portfolio?
                <br />
                <strong>Yes, snippets of code is ok.</strong>
              </li>
              <li>
                Pan programmers use snippets of code from W3Schools for websites for clients?
                <br />
                <strong>Yes, snippets of code is ok.</strong>
              </li>
              <li>
                Can students use snippets of code from W3Schools in their projects?
                <br />
                Assuming it is permitted by their instructors. Yes, snippets of code is ok.
              </li>
            </ol>
            
          </div>
        
        </div>

        <NextSteps text="In the next chapter we will review the use of online coding documentation and how to incorporate code from these sources into student work." previous="/course-introduction" next="/documentation"></NextSteps>        

        <BigButton text="Chapter 3: Online Documentation" url="/documentation" icon="fas fa-chevron-right"></BigButton>

      </div>
    );
  }
}

export default CitingCode;
