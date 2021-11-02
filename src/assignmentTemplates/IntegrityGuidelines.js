import React,{Component} from "react";

class IntegrityGuidelines extends Component {
  render() {
    return (
      <div className="IntegrityGuidelines w3-padding-32">

        <div className="ca-container-600 w3-center">

          <table className="w3-table w3-striped w3-border w3-bordered">
            <tr>
              <td>
                {this.props.documentation ? <i class="far fa-check-square"></i> : <i class="far fa-square"></i>}
              </td>
              <td>
                Copying sample code from coding documentation such as sample variable definitions, for loops, 
                function definitions, etc...
              </td>
            </tr>
            <tr>
              <td>
                {this.props.examples ? <i class="far fa-check-square"></i> : <i class="far fa-square"></i>}
              </td>
              <td>
                Copying a functional block of code. Citations and understanding are required.
              </td>
            </tr>
            <tr>
              <td>
                {this.props.libraries ? <i class="far fa-check-square"></i> : <i class="far fa-square"></i>}
              </td>
              <td>
                Use of coding frameworks and/or libraries.
                {this.props.list ? <span><br />Permitted libraries/frameworks: {this.props.list}</span> : null}
              </td>
            </tr>
          </table>

        </div>

      </div>
    );
  }
}

export default IntegrityGuidelines;