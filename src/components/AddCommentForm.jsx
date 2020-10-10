import React, { useState } from 'react'
import styled from 'styled-components'

function AddCommentForm({ slug, setArticle }) {
  const [username, setUsername] = useState('')
  const [text, setText] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    const res = await fetch(`/api/articles/${slug}/comment`, {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ username, text })
    })
    const data = await res.json()
    setArticle(data)
    setUsername('')
    setText('')
  }

  return (
    <AddCommentFormStyles onSubmit={onSubmit}>
      <h3>Add Comment</h3>
      <label>
        Name:
        <input type="text" value={username} onChange={(e) => setUsername(e.currentTarget.value)} />
      </label>
      <label>
        Comment:
        <textarea rows="4" value={text} onChange={(e) => setText(e.currentTarget.value)}></textarea>
      </label>
      <button>Add Comment</button>
    </AddCommentFormStyles>
  )
}

export default AddCommentForm

const AddCommentFormStyles = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    display: block;
  }
`
