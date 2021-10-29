import React,{Component} from "react";

class About extends Component {
  render() {
    return (
      <div className="About w3-padding-32">

        <article className="w3-text-dark-gray ca-container-600">

          <h2 className="w3-text-red w3-center">About this Course</h2>

          <hr className="ca-hr" />

          <h3>
            Writing code for academic purposes is similar to all academic writing in that 
            students are required to follow similar guidelines. 
          </h3>

          <p>
            However, identifying what is and what isn't academic misconduct when writing code,
            assisting fellow students, searching for code samples online, or utalizing 
            online code samples can be difficult. 
            This is because academic guidlines guildelines related to to writing code will vary 
            in each course and occaisioinally in each assignment. 
            Additionally, the expectations of a programmer during academia are dramatically 
            different than once a student enters the industry.
          </p>

          <p>
             This course will outline those guidlines and require students to complete a 
             series of quizzes to ensure the guidelines are understood.             
          </p>

        </article>

      </div>
    );
  }
}

export default About;