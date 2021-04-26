import { useState, useEffect } from 'react'
import Article from '../component/Article'
import ArticleSelect from '../component/ArticleSelect'



const ArticleContainer = () => {
const [articles, setArticles] = useState([]);
const [selectedArticle, setSelectedArticle] = useState([]);

    useEffect(() => {
      getArticles();
    }, [])

    const getArticles = function(){
        fetch ('https://content.guardianapis.com/search?q=brexit&format=json&api-key=test')
        .then(res =>res.json())
        .then(articles => setArticles(articles.response.results))
    }
    
    const onArticleClick = function(article){
        setSelectedArticle(article)
    }        

    return(
        <div className = 'container'>
            <h1>Your articles</h1>
            <ArticleSelect articles = {articles} onArticleClick = {onArticleClick} />
            {selectedArticle ? <Article selectedArticle={selectedArticle}/> : null}
        </div>
    )
}

export default ArticleContainer