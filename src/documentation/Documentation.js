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

import w3schoolsHtmlImages from './../images/screenshots/w3schools-html-images.png';
import w3schoolsSnippetHtmlImages from './../images/screenshots/w3schools-snippet-html-images.png';
import mdnJavaScriptFunction from './../images/screenshots/mdn-javascript-functions.png';
import mdnSnippetJavaScriptFunction from './../images/screenshots/mdn-snippet-javascript-functions.png';
import phpFunctions from './../images/screenshots/php-functions.png';
import phpSnippetFunctions from './../images/screenshots/php-snippet-functions.png';
import phpSnippetMail from './../images/screenshots/php-snippet-mail.png';



class Documentation extends Component {
  render() {
    return (
      <div className="CitingCode">

        <Header title="Chapter 3: Copying Code from Documentation"></Header>

        <div className="w3-padding-32">

          <div className="ca-container-600 w3-center">

            <h2 className="w3-text-red w3-center">How to Identidy Coding Documentation?</h2>

            <p>
              Documentation used while coding is the equivalent of a dictionary used while writing an essay.
              Documentation provides insight and/or examples of an individual command, not a larger concept. 
              For example, documentation may provide insight on how to define a variable, how to use an if 
              statement to make a decision, or how to use a for loop to repeat code. 
            </p>

            <p>
              Copying from documentation usually involves only copying a few lines of code at a time. 
              The copied code will not completing an objective, it will likely need to be modified or
              have coded added before it achieves an objective. 
            </p>

            <p>
              Copying code from documentation does not require any citation and is permitted on almost all
              assignments. 
            </p>

            <p>
              However, sometimes identifying which code snippets are considered documentation and which 
              snippets are considered examples can difficult.
              To make things harder, documentation often appears on the same website as examples, and 
              sometimes even on the same page. 
            </p>

          </div>

        </div>

        <Twitter id="1392459191353286656" colour="light-grey"></Twitter>

        <div className="w3-padding-32">

          <div className="ca-container-600 w3-center">

            <h2 className="w3-text-red w3-center">Coding Documentation</h2>

            <p>
              Below are a series of documentation examples. 
              The examples include a variety of different languages and sources. 
            </p>

            <hr className="ca-hr" />

            <h3>Example 1: W3Schools and HTML</h3>

            <img src={w3schoolsHtmlImages} className="w3-image" />

            <a href="https://www.w3schools.com/html/html_images.aspp" className="w3-center ca-font-tiny-fixed">
              https://www.w3schools.com/html/html_images.asp
            </a>

            <p>
              Below is snippet of code from 
              the <a href="https://www.w3schools.com/">W3Schools</a> page displayed above. 
            </p>

            <img src={w3schoolsSnippetHtmlImages} className="w3-image" />

            <p>
              This code provides documentation on how to use the <code>img</code> tag. 
              This snippet could not be copyright because it is very likely that two programmers would 
              come up with practically the same code.
              It is not an example of how to code 
              an <a href="https://www.w3schools.com/howto/howto_js_slideshow.asp">image slideshow</a>, 
              a <a href="https://www.w3schools.com/howto/howto_css_hero_image.asp">hero image banner</a>, or 
              an <a href="https://www.w3schools.com/howto/howto_js_image_zoom.asp">image zoom tool</a>. 
              These would all be considered example code snippets. 
              They could be subject to copyright and would need to be cited (assumming the assignment the 
              student is working on permits the use of examples). 
            </p>

            <hr className="ca-hr" />

            <h3>Example 2: MDN and JavaScript</h3>

            <img src={mdnJavaScriptFunction} className="w3-image" />
            
            <a href="https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript" className="w3-center ca-font-tiny-fixed">
              https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
            </a>

            <p>
              Below is a JavaScript code snippet from 
              the <a href="https://developer.mozilla.org/">Mozilla Developer Network</a> page displayed above. 
              This code provdies documentation on how to define a function:
            </p>

            <img src={mdnSnippetJavaScriptFunction} className="w3-image" />

            <p>
              This snippet could not be copyright because it is very likely that two programmers would 
              come up with practically the same code.
              It is also unlikely that this code could even be used in a project, as the code is simply an empty 
              shell of a function definition that sill needs to be given a proper name and additional code to 
              achieve a purpose. 
            </p>

            <hr className="ca-hr" />

            <h3>Example 3: PHP</h3>

            <img src={phpFunctions} className="w3-image" />

            <a href="https://www.php.net/manual/en/functions.user-defined.php" className="w3-center ca-font-tiny-fixed">
              https://www.php.net/manual/en/functions.user-defined.php
            </a>
            
            <p>
              Below is a PHP code snippet from <a href="https://www.php.net/manual/en/functions.user-defined.php">php.net</a>. 
              This code provides the syntax for user-defined functions:
            </p>

            <img src={phpSnippetFunctions} className="w3-image" />

            <a href="https://www.php.net/manual/en/functions.user-defined.php" className="w3-center ca-font-tiny-fixed">
              https://www.php.net/manual/en/functions.user-defined.php
            </a>

            <p>
              Like the JavaScript example, this code is still lacking any purpose. 
              It is an empty shell ready to be copied into a project and customized.
            </p>

            <p>
              However, on the same website, below the documentation, is a series of user contributed 
              code snippets:
            </p>            

            <img src={phpSnippetMail} className="w3-image" />

            <a href="https://www.php.net/manual/en/function.mail.php" className="w3-center ca-font-tiny-fixed">
            https://www.php.net/manual/en/function.mail.php
            </a>

            <p>
              The above code is a function that can be used to send a UTF-8 formatted email using PHP. 
              Assuming the assignment allows the use of code eamples, this code is subject to copyright
              and must include a citation. 
            </p>

            <p className="w3-text-grey ca-font-small-fixed">
              Code from the <a href="https://www.php.net/">PHP</a> website is free to use under
              the <a href="https://creativecommons.org/licenses/by/3.0/">Commons Attribution License</a>.
            </p>
            
          </div>
        
        </div>

        <NextSteps text="In the next chapter we will review the use of online coding examples and how to incorporate code from these sources into student work." previous="/citing-code" next="/examples"></NextSteps>        

        <BigButton text="Chapter 4: Online Examples" url="/examples" icon="fas fa-chevron-right"></BigButton>

      </div>
    );
  }
}

export default Documentation;
