import React, {useState} from 'react';
import ArticleContainer from '../container/ArticleContainer';


const ArticleSelect =({articles, onArticleClick}) => {
// const value = articles.response.results
    const handleChange =function(event){
        const chosenArticle = articles[event.target.value];
        onArticleClick(chosenArticle);
        
    }
    
    
    const articleOptions = articles.map((article, index) => {
      return <option value={index} key={index}>{article.webTitle}</option>
    })
    // const articleOptions = articles.map((article, index) => {
    //   return (
    //     <li onClick = {handleChange} key = {index}>
    //         <h4>{article.webTitle}</h4>
    //     </li>
    //   )
    // })
  


    return (
        <div>
            <h2>Article List</h2>
            <select defaultValue = "" onChange = {handleChange}>
                <option value="" selected>select an article</option>
                    {articleOptions}
            </select>
        </div>
    )
}

export default ArticleSelect;
