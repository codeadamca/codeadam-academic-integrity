import React,{Component} from "react";

import About from "./About";
import Syllabus from "./Syllabus";
import HomeHeader from './HomeHeader';

import BigButton from './../components/BigButton';
import Meme from './../components/Meme';



import Calendly from './../components/Calendly';
import CodeAdam from './../components/CodeAdam';
import SocialList from './../components/SocialList';
import NavCards from './../components/NavCards';


import academia from './../images/academia.jpeg';
import facebook from './../images/facebook.jpeg';
import github from './../images/github.jpeg';
import instagram from './../images/instagram.jpeg';
import linkedin from './../images/linkedin.jpeg';
import stackoverflow from './../images/stackoverflow.png';
import twitter from './../images/twitter.jpeg';
import youtube from './../images/youtube.jpeg';

import articles from './articles.json';

import copyPaste from './../images/memes/copy-paste.jpg';

class Home extends Component {
  render() {
    return (
      <div className="Home">

        <HomeHeader></HomeHeader>
        <About></About>
        <Meme image={copyPaste} title="Copy and Paste" date="2019" colour="light-grey"></Meme>
        <Syllabus></Syllabus>
        <BigButton text="Begin Course" url="/course-introduction" icon="fas fa-chevron-right"></BigButton>

      </div>
    );
  }
}

export default Home;

const portfolio = [
  {icon: 'fas fa-laptop-code', href: '/teaching', name: 'Teaching'},
  {icon: 'fas fa-book', href: '/research-publishings', name: 'Research'},
  {icon: 'fas fa-chalkboard', href: '/speaking-engagements', name: 'Speaking'},
  {icon: 'fas fa-graduation-cap', href: '/professional-development', name: 'Professional'},
  {icon: 'fas fa-user', href: '/about', name: 'About Me'}
];

const classroom = [
  {icon: 'fas fa-code', href: '/learning', name: 'Learning'},
  {icon: 'fas fa-tools', href: '/tools', name: 'Tools'},
  {icon: 'fas fa-server', href: '/server-setup', name: 'Server Setup'},
  {icon: 'fas fa-robot', href: '/ev3', name: 'EV3 Resources'},
  {icon: 'fas fa-hammer', href: '/tinkering', name: 'Tinkering'}
];

const socials = [
  {image: academia, url: 'https://humber.academia.edu/AdamThomas'},
  {image: facebook, url: 'https://www.facebook.com/adambenjaminthomas'},
  {image: github, url: 'https://github.com/codeadamca'},
  {image: instagram, url: 'https://www.instagram.com/codeadamca/'},
  {image: linkedin, url: 'https://www.linkedin.com/in/adam-thomas-6b563012'},
  {image: stackoverflow, url: 'https://stackoverflow.com/users/9015675/adam'},
  {image: twitter, url: 'https://twitter.com/codeadamca'},
  {image: youtube, url: 'https://www.youtube.com/channel/UCvn-c8MnpjythwWKDi5qMvA'}
];
