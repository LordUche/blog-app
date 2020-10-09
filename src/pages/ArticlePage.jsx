import React from 'react'
import ArticlesList from '../components/ArticlesList'
import articles from '../sample-data/articles'
import NotFoundPage from './NotFoundPage'

function ArticlePage({ match }) {
  const { slug } = match.params
  const article = articles.find((article) => article.slug === slug)
  const otherArticles = articles.filter((article) => article.slug !== slug)

  if (!article) return <NotFoundPage />

  const { title, content } = article

  return (
    <>
      <h1>{title}</h1>
      {content.map((paragraph) => (
        <p key={slug}>{paragraph}</p>
      ))}
      <section className="other-articles">
        <h2>Other articles</h2>
        <ArticlesList articles={otherArticles} />
      </section>
    </>
  )
}

export default ArticlePage
