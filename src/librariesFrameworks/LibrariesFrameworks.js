import React,{Component} from "react";

import {Link} from 'react-router-dom';

import Header from './../components/Header';
import BigButton from './../components/BigButton';
import NextSteps from './../components/NextSteps';
import Quote from './../components/Quote';
import Ted from './../components/Ted';
import YouTube from './../components/YouTube';
import Meme from './../components/Meme';
import Topics from './../components/Topics';
import Twitter from './../components/Twitter';
import ImageUrl from './../components/ImageUrl';
import License from './../components/License';  

import libraryScratch from './../images/memes/library-scratch.jpg';

import d3 from './../images/topics/d3.png';
import firebase from './../images/topics/firebase.png';
import jquery from './../images/topics/jquery.png';
import laravel from './../images/topics/laravel.jpg';
import react from './../images/topics/react.png';
import socket from './../images/topics/socket.png';
import three from './../images/topics/three.jpeg';
import vue from './../images/topics/vue.jpg';
import wideImage from './../images/topics/wide-image.jpg';



class LibrariesFrameworks extends Component {
  render() {
    return (
      <div className="LibrariesFrameworks">

        <Header title="Chapter 5: Libraries and Frameworks"></Header>

        <div className="w3-padding-32">

          <div className="ca-container-600">

            <h2 className="w3-text-red w3-center">What are Libraries and Frameworks</h2>

            <p>
              Libraries and frameworks are prewriten code that make common tasks easier to complete.
            </p>

            <p>
              <strong>Library:</strong> a set of functions that you can call, often organized into classes,
              that are used alongside the application flow.
            </p>

            <Topics topics={libraries}></Topics>

            <p>
              <strong>Framework: </strong> provides a structure to build an application within, often
              the framework replaces the application flow.
            </p>

            <Topics topics={frameworks}></Topics>

          </div>

        </div>

        <Meme image={libraryScratch} title="Using Libraries" date="2018" colour="light-grey"></Meme>

        <div className="w3-padding-32">

          <div className="ca-container-600">

            <h2 className="w3-text-red w3-center">Can I Use Libraries and Frameworks?</h2>

            <p>
              The use of coding libraries and frameworks are prohibited unless the assignment academic 
              integrity guidelines (which we will reiew in the next chapter) permit it. 
              The guidelines must both permit the use of libraries or frameworks and name the specific
              library or framework. 
              If the specific library or framework is not mentioned in the assignment academic integrity 
              guidelines, you may also reach out to your professor and request permission.
            </p>

            <p>
              The use of libraries and frameworks do no require any type of citation. 
            </p>
            
          </div>
        
        </div>

        <NextSteps text="Each assignment will have different rules for what existing code can be incorporated into an assignemnt. In the next chapter we will review how to read assignment academic integrity guidelines." previous="/examples" next="/assignment-templates"></NextSteps>        

        <BigButton text="Chapter 6: Assignment Templates" url="/assignment-templates" icon="fas fa-chevron-right"></BigButton>

      </div>
    );
  }
}

export default LibrariesFrameworks;

const libraries = [
  {image:d3, url: 'https://d3js.org/'},
  {image:jquery, url: 'https://jquery.com/'},
  {image:socket, url: 'https://socket.io/'},
  {image:three, url: 'https://threejs.org/'},
  {image:wideImage, url: 'http://wideimage.sourceforge.net/'}
];
const frameworks = [
  {image:firebase, url: 'https://firebase.google.com/'},
  {image:react, url: 'https://reactjs.org/'},
  {image:vue, url: 'https://vuejs.org/'} ,
  {image:laravel, url: 'https://laravel.com/'}
];
