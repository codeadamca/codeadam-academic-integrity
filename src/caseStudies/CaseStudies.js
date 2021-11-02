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



class CaseStudies extends Component {
  render() {
    return (
      <div className="CaseStudies">

        <Header title="Chapter 7: Academic Misconduct Case Studies"></Header>

        <div className="w3-padding-32">

          <div className="ca-container-600">

            <h2 className="w3-text-red w3-center">Title?</h2>

            <p>
              Paragraph...
            </p>

          </div>

        </div>

        <Meme image={codeDoesntWork} title="Code Doesn't Work" date="2019" colour="light-grey"></Meme>

        <div className="w3-padding-32">

          <div className="ca-container-600">

            <h2 className="w3-text-red w3-center">Another Title</h2>

            <p>
              More text...
            </p>

            <hr className="ca-hr" />

            <h3>Smaller Title</h3>

            <img src={w3schoolsHtmlImages} className="w3-image" />

            <a href="https://www.w3schools.com/html/html_images.aspp" className="w3-center ca-font-tiny-fixed">
              https://www.w3schools.com/html/html_images.asp
            </a>

            <p>
              More text...
            </p>
            
          </div>
        
        </div>

        <NextSteps text="In the next chapter we will conclude this course and provide instructions for nextsteps." previous="/libraries-frameworks" next="/conclusion"></NextSteps>        

        <BigButton text="Chapter 8: Conclusion" url="/conclusion" icon="fas fa-chevron-right"></BigButton>

      </div>
    );
  }
}

export default CaseStudies;
