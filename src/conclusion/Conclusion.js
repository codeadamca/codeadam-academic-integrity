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

import unfinishedWork from './../images/memes/unfinished-work.png';

import w3schoolsHtmlImages from './../images/screenshots/w3schools-html-images.png';
import w3schoolsSnippetHtmlImages from './../images/screenshots/w3schools-snippet-html-images.png';
import mdnJavaScriptFunction from './../images/screenshots/mdn-javascript-functions.png';
import mdnSnippetJavaScriptFunction from './../images/screenshots/mdn-snippet-javascript-functions.png';
import phpFunctions from './../images/screenshots/php-functions.png';
import phpSnippetFunctions from './../images/screenshots/php-snippet-functions.png';
import phpSnippetMail from './../images/screenshots/php-snippet-mail.png';



class Conclusion extends Component {
  render() {
    return (
      <div className="Conclusion">

        <Header title="Chapter 8: Conclusion"></Header>

        <div className="w3-padding-32">

          <div className="ca-container-600">

            <h2 className="w3-text-red w3-center">Course Complete</h2>

            <h3>
              Congratulations! You have completed the academic integrity course!
            </h3>

            <p>
              Hopefully you are comfortable with reading and applying the Assignment Academic
              Integrity Guidelines! 
              If you are ever unsure, don't hesitate to reach out to your professors. 
            </p>

            <hr className="ca-hr" />

            <Quote text="Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains." name="Bill Gates" title="Co-Founder, Microsoft"></Quote>

            <hr className="ca-hr" />

            <p>
              Remember, the best way to learn code is to struggle through the assignments! 
              The instances where an <code>if</code> statement takes over an hour to get working properly or when 
              it takes a Stack Overflow question to fix an infinity <code>for</code> loop are the times you will 
              learn the most. 
            </p>

            <h3>
              As clich&eacute; as it sounds, cheating robs you of the best learning moments. 
            </h3>

            <p>
              Are you in this program to simply complete it? 
              Or are you in this program to actually learn how to code?
            </p>

          </div>

        </div>

        <Meme image={unfinishedWork} title="Unfinished Work" date="2019" url="https://www.monkeyuser.com/2018/unfinished-work/" colour="light-grey"></Meme>

        <div className="w3-padding-32">

          <div className="ca-container-600">

            <h2 className="w3-text-red w3-center">Course Evaluation</h2>

            <p>
              To complete this course, return to Blackboard and complete the Assignment Academic Integrity Guidelines
              quiz located in the Assignments folder. 
              You must receive a 100% mark on this quiz to receive a SAT (satisfactory) grade. 
              You have as many attempts as required to complete the quiz.
            </p>
            
          </div>
        
        </div>

        <NextSteps text="Congratulations! This course is complete. You can now return to Blackboard and complete the Academic Integrity Quiz." previous="/case-studies" next="/"></NextSteps>        

        <BigButton text="Course Home Page" url="/" icon="fas fa-chevron-right"></BigButton>

      </div>
    );
  }
}

export default Conclusion;
