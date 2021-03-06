import React,{Component} from "react";

import Title from './../components/Title';
import ArticleList from './../components/ArticleList';

import articles from './articles.json';

class Professional extends Component {
  render() {
    return (
      <div className="Professional">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="Professional Development"></Title>
        <ArticleList articles={articles}></ArticleList>

      </div>
    );
  }
}

export default Professional;