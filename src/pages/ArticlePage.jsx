import React, { Suspense, useEffect, useState } from 'react'
import AddCommentForm from '../components/AddCommentForm'
import CommentList from '../components/CommentList'
import Upvote from '../components/Upvote'
import NotFoundPage from './NotFoundPage'

function ArticlePage({ match }) {
  const { slug } = match.params
  const [article, setArticle] = useState({ title: '', content: [] })

  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(`/api/articles/${slug}`)
        const data = await res.json()
        if (data) setArticle(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchArticle()
    return () => {}
  }, [slug])

  if (!article) return <NotFoundPage />

  const { title, content } = article

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <h1>{title}</h1>
        <Upvote upvotes={article.upvotes} slug={slug} setArticle={setArticle} />
        {content.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
        <section>
          <h2>Comments:</h2>
          <CommentList comments={article.comments} />
          <AddCommentForm slug={slug} setArticle={setArticle} />
        </section>
      </Suspense>
    </>
  )
}

export default ArticlePage
