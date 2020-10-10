import React, { Suspense, useEffect, useState } from 'react'
import ArticlesList from '../components/ArticlesList'

function ArticleListPage() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch(`/api/articles`)
        const data = await res.json()
        setArticles(data.articles)
      } catch (error) {
        console.log(error)
      }
    }
    fetchArticles()
    return () => {}
  }, [])

  return (
    <>
      <h1>This is the article list page</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <ArticlesList articles={articles} />
      </Suspense>
    </>
  )
}

export default ArticleListPage
