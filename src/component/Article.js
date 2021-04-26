import React, {useState} from 'react'
import ArticleContainer from '../container/ArticleContainer'

const Article = ({selectedArticle}) => {

  return( 
      <div>
        <ul>
          <li>
            <h3>{selectedArticle.webTitle}</h3>
            <a href={selectedArticle.webUrl}>Find out More</a>
          </li>
        </ul>
      </div>
     
  ) 

}

export default Article
// Click={handleClick}