import React,{Component} from "react";

import {Link} from 'react-router-dom';

import Header from './../components/Header';
import BigButton from './../components/BigButton';
import Quote from './../components/Quote';
import Ted from './../components/Ted';
import YouTube from './../components/YouTube';
import Meme from './../components/Meme';
import Twitter from './../components/Twitter';
import ImageUrl from './../components/ImageUrl';

import NextSteps from './../academic/NextSteps';
import License from './../academic/License';

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
