import React from 'react'
import ArticlesList from '../components/ArticlesList'
import articles from '../sample-data/articles'

function ArticleListPage() {
  return (
    <>
      <h1>This is the article list page</h1>
      <ArticlesList articles={articles} />
    </>
  )
}

export default ArticleListPage
