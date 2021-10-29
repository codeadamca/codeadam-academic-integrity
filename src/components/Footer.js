import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="Footer w3-padding-16">

        <div className="ca-container-600 w3-center">

          <Link to="/" className="ca-pt-sans ca-font-none ca-font-big-fixed">
            &#8962;
          </Link>

        </div>
        
      </div>
    );
  }
}

export default Footer;