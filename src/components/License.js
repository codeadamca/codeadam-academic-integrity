import React,{Component} from "react";

class License extends Component {

    fetchLicense(site) {
        switch(site) {
          case 'arduino':
            return (
              <p>
                Code from the <a href="https://www.arduino.cc/">Arduino</a> website is free to use under
                the <a href="https://creativecommons.org/">Creative Commons</a>.
              </p>
            );
          case 'mdn':
            return (
              <p>
                Code from the <a href="https://www.mozilla.org/">Mozilla Developer Network</a> website
                is licensed under the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution</a>.
                More information on the terms of use is available on 
                the <a href="https://www.mozilla.org/en-US/foundation/licensing/">Mozilla Developer Network</a> website.
              </p>
            );
          case 'php':
            return (
              <p>
                Code from the <a href="https://www.php.net/">PHP</a> website is free to use under
                the <a href="https://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution License</a>.
              </p>
            );
          case 'w3schools':
            return (
              <p>
                Code from W3Schools is free to use and manipulate. 
                It has been released under 
                the <a href="https://www.copyright.gov/fair-use/more-info.html">Fair Use License</a>.
                More information on the terms of use is available on 
                the <a href="https://www.w3schools.com/about/about_copyright.asp">W3Schools</a> website.
              </p>
            );
          case 'stackoverflow':
            return (
              <p>
                Subscriber content from Stack Overflow is free to use and manipulate. 
                Attribution must be included in your source code and you must share any improvements made to the original code.
                Subscriber content follows the <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike (CC-BY-SA) License</a>.
                More information on the terms of use is available on 
                the <a href="https://stackoverflow.com/legal/terms-of-service/public">Stack Overflow</a> website.
              </p>
            );
          case 'pybricks':
            return (
              <p>
                Code from Pybricks is free to use and manipulate. 
                It has been released under 
                the <a href="https://opensource.org/licenses/MIT">MIT License</a>.
                More information on the terms of use is available on 
                the <a href="http://pybricks.com/about/#pybricks-is-open-source">Pybricks</a> website.
              </p>
            );
          default:
            return (
              <p>License not provided...</p>
            );
        }
      }

  render() {
    return (
      <div className="License w3-text-grey ca-font-small-fixed">
        {this.fetchLicense(this.props.site)}
      </div>
    );
  }
}

export default License;