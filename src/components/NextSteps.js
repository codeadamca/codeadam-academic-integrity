import React,{Component} from "react";

import {Link} from 'react-router-dom';

class NextSteps extends Component {
  render() {
    return (
      <div className="NextSteps w3-padding-32 w3-light-grey">

        <div className="ca-container-600 w3-center">

          <h2 className="w3-text-dark-grey w3-center">Next Steps</h2>

          <p>{this.props.text}</p>

          <p className="w3-center">
            <Link to={this.props.previous}>Previous Chapter</Link>
            &nbsp; | &nbsp;
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to={this.props.next}>Next Chapter</Link>
          </p>

        </div>

      </div>
    );
  }
}

export default NextSteps;