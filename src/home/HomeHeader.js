import React,{Component} from "react";

import homeVideo from './../video/home-video.mp4';

class HomeHeader extends Component {
  render() {
    return (
      <div className="HomeHeader">

        <header className="ca-border-bottom-gray">

          <div className="ca-fullscreen w3-black">
            <video preload="auto" autoPlay loop muted className="ca-fullscreen-background">
                <source src={homeVideo} />
            </video>
            <div className="ca-fullscreen-content w3-cell-row">
                <div className="w3-cell w3-cell-middle w3-container w3-center">

                <h1 className="w3-text-white ca-font-medium ca-pt-sans"><span>Academic Integrity</span></h1>
                <h2 className="w3-text-red ca-font-large ca-pt-sans"><span>Coding and Plagiarism</span></h2>
                <p className="w3-text-white ca-font-small ca-pt-sans w3-center">
                  <span>
                    An online course focussing on
                  </span>
                </p>
                <p className="w3-text-white ca-font-small ca-pt-sans w3-center">
                  <span>
                    academic integrity in computer science.
                  </span>
                </p>
                </div>
            </div>
          </div>

        </header>

      </div>
    );
  }
}

export default HomeHeader;