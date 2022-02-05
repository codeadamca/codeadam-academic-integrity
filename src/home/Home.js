import React,{Component} from "react";

import BigButton from './../components/BigButton';
import Meme from './../components/Meme';

import About from "./About";
import Syllabus from "./Syllabus";
import HomeHeader from './HomeHeader';

import copyPaste from './../images/memes/copy-paste.jpg';

class Home extends Component {
  render() {
    return (
      <div className="Home">

        <HomeHeader></HomeHeader>
        <About></About>
        <Meme image={copyPaste} title="Copy and Paste" date="2019" colour="light-grey"></Meme>
        <Syllabus></Syllabus>
        <BigButton text="Chapter 1: Course Introduction" url="/course-introduction" icon="fas fa-chevron-right"></BigButton>

      </div>
    );
  }
}

export default Home;
