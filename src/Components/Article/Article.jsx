import React from 'react'
import './Article.css'
function Article({imgUrl, date, text}) {
    return (
        <div className="blog-container_article">
        <div className="blog-container_article-image">
            <img src={imgUrl} alt="blog_image" />
        </div>
        <div className="blog-container_article-content">
            <div>
            <p>{date}</p>
            <h3>{text}</h3>
        </div>
            <p>Read Full Article</p>
        </div>
        </div>
    )
}

export default Article