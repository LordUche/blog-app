import React from 'react'

function CommentList({ comments = [] }) {
  return (
    <>
      {comments.map(({ username, text }, key) => (
        <div key={key}>
          <h4>{username}</h4>
          <p>{text}</p>
        </div>
      ))}
    </>
  )
}

export default CommentList
