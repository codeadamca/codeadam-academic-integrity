import React,{Component} from "react";

import {Link} from 'react-router-dom';

import TermList from './TermList';

import Header from './../components/Header';
import BigButton from './../components/BigButton';
import Meme from './../components/Meme';
import Twitter from './../components/Twitter';

import copyPaste from './../images/memes/copy-paste.jpg';

class Introduction extends Component {
  render() {
    return (
      <div className="Introduction">

        <Header title="Chapter 1: Course Introduction"></Header>

        <div className="w3-padding-32">

          <div className="ca-container-600 w3-center">

            <h2 className="w3-text-red w3-center">What is Code Plagiarism?</h2>

            <p>
              There is a very grey line when determining what is and what isn't code plagiarism.
              This is because copying from some online sources is permitted while copying from other sources is not.
              Likewise, introductory assignments will prohibit copying, while more advanced assignments will encourage
              copying and sometimes even require it. 
              Don't worry, this will all be outlined in the next few chapters. 
            </p>

            <p>
              For this reason it is crucial that we first define coding plagiarism:
            </p>

            <p>
              <strong>Coding Plagiarism:</strong> 
              &nbsp;
              Copying or reproducing code that is not yours, without permission from the author, or
              against the assignment Academic Misconduct Policy.
              This includes copying code from online examples and fellow students, the use of libraries or frameworks, and 
              the use of code generators. 
            </p>

            <hr className="ca-hr" />

            <h2 className="w3-text-red w3-center">The Effects of Academic Misconduct</h2>

            <p>
              Copying code is considered cheating. 
              A single infraction will likely result in a zero grade on the assignment, a meeting with the program 
              co-ordinator and/or dean, and a notice will be placed on a student's academic record. 
              However, the effects of copying code go far beyond the academic consequences of cheating.
            </p>

            <p>
              Learning to code can be hard. 
              The most effective method of learning code is by actually coding; by spending lots of time trying, 
              failing, debugging, and finally succeeding. 
              The act of copying code will rob a student of the struggle required to learn code.
              If a student copies code during the crucial first few assignments students will have an even more
              difficult time with more advanced assignments and become dependant on using code that is not their own. 
            </p>
            
          </div>
        
        </div>

        <Twitter id="1327533237065969666" colour="light-grey"></Twitter>
        <TermList terms={terms}></TermList>  

        <div className="w3-padding-32 w3-light-grey">

          <div className="ca-container-600 w3-center">

            <h2 className="w3-text-dark-grey w3-center">Next Steps</h2>

            <p>
              In the next chapter we will review how to properly cite code that requires a citation.
            </p>

            <p className="w3-center">
              <Link to="/">Previous Chapter</Link>
              &nbsp; | &nbsp;
              <Link to="/citing-code">Next Chapter</Link>
            </p>

          </div>

        </div>

        <BigButton text="Chapter 2: Citing Code" url="/citing-code" icon="fas fa-chevron-right"></BigButton>

      </div>
    );
  }
}

export default Introduction;

const terms = [
  {name: 'Academic Misconduct Policy', definition: 'A per assigment policy that outlines the use of code retrieved from the internet. The policy specifically addresses the use of code documentation, coding examples, libraries, framworks, and packages.'}
];
