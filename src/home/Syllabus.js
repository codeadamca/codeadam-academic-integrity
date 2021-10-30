import React,{Component} from "react";

import Button from './../components/Button';

class Syllabus extends Component {
  render() {
    return (
      <div className="Syllabus w3-padding-32">

        <article className="w3-text-dark-gray ca-container-600">

          <h2 className="w3-text-red w3-center">Course Syllabus</h2>

          <ol>
            <li>
              <h3>Course Introduction</h3>
              <p>
                A brief course introduction including a definition of academic misconduct 
                related to writing code, the effects of academic misconduct on students, 
                and a glossary of terms important to understand to complete this course.
              </p>    
              <Button url="/course-introduction" text="View this Chapter" icon="fas fa-chevron-right"></Button>
            </li>
            <li>
              <h3>Citing Code</h3>
              <p>
                Guidelines and examples on how to cite code in student source code.
              </p>
              <Button url="/citing-code" text="View this Chapter" icon="fas fa-chevron-right"></Button>
            </li>
            <li>
              <h3>Copying Code from Online Documentation</h3>
              <p>
                Instructions on how to identify online documentation and examples of 
                incorporating code retrieved from documentation into student work.
              </p>
              <Button url="/code-documentation" text="View this Chapter" icon="fas fa-chevron-right"></Button>
            </li>
            <li>
              <h3>Copying Code from Examples</h3>
              <p>
                Instructions on how to identify what code is considered an example 
                and how to incorporating examples into student work.
              </p>
              <Button url="/code-examples" text="View this Chapter" icon="fas fa-chevron-right"></Button>
            </li>
            <li>
              <h3>Libraries and Frameworks</h3>
              <p>
                Guidelines on using existing code libraries, frameworks, and packages in
                student work. 
              </p>
              <Button url="/libraries-frameworks" text="View this Chapter" icon="fas fa-chevron-right"></Button>
            </li>

            <li>
              <h3>Assignment Templates</h3>
              <p>
                Examples and how to read assignment academic integrity guidelines.  
              </p>
              <Button url="/assignment-templates" text="View this Chapter" icon="fas fa-chevron-right"></Button>
            </li>
            <li>
              <h3>Academic Misconduct Case Studies</h3>
              <p>
                A selection of sample case studies related to academic misconduct.
              </p>
              <Button url="/case-studies" text="View this Chapter" icon="fas fa-chevron-right"></Button>
            </li>
            <li>
              <h2>Conclusion</h2>
              <p>
                Conclusion and instructions for next steps.
              </p>
              <Button url="/conclusion" text="View this Chapter" icon="fas fa-chevron-right"></Button>
            </li>
          </ol>

        </article>

      </div>
    );
  }
}

export default Syllabus;