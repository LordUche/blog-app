import React from 'react'

function Upvote({ upvotes, slug, setArticle }) {
  async function upvote() {
    const res = await fetch(`/api/articles/${slug}/upvote`, {
      method: 'PATCH'
    })
    const article = await res.json()
    setArticle(article)
  }

  return (
    <>
      <button onClick={upvote}>Add Upvote</button>
      <small>This post has been upvoted {upvotes || 0} times</small>
    </>
  )
}

export default Upvote
