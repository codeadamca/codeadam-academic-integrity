import React from "react";
import {BrowserRouter, Switch} from 'react-router-dom';
import {Page} from './extensions/Page';

import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './home/Home';
import Introduction from './introduction/Introduction';
import CitingCode from './citingCode/CitingCode';

/*
import Documentation from './documentation/Documentation';
import Examples from './examples/Examples';
import Libraries from './libraries/Libraries';
import Templates from './templates/Templates';
import CaseStudies from './caseStudies/CaseStudies';
import Conclusion from './conclusion/Conclusion';
*/

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <div className="App">
        
        <Nav></Nav>

        <main className="w3-padding-medium">

          <Switch>

            <Page exact path="/" component={Home} title=""></Page>

            <Page path="/course-introduction" component={Introduction} title="Course Introduction"></Page>
            <Page path="/citing-code" component={CitingCode} title="Citing Code"></Page>
            {/*}
            <Page path="/code-documentation" component={Documentation} title="Copying Code from Documentation"></Page>
            <Page path="/code-examples" component={Examples} title="Copying Code from Examples"></Page>
            <Page path="/libraries-frameworks-packages" component={Libraries} title="Libraries, Frameworks, and Packages"></Page>
            <Page path="/assignment-templates" component={Templates} title="Assignment Templates"></Page>
            <Page path="/case-studies" component={CaseStudies} title="Academic Misconduct Case Studies"></Page>
            <Page path="/conclusion" component={Conclusion} title="Conclusion"></Page>
            */}
            
          </Switch>

        </main>

        <Footer></Footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
