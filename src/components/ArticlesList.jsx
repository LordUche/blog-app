import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function ArticlesList({ articles = [] }) {
  return (
    <ArticleListStyles>
      {articles.map(({ title, slug, content }) => {
        return (
          <li key={slug}>
            <h3>
              <Link to={`/articles/${slug}`}>{title}</Link>
            </h3>
            <p>{content[0].substring(0, 150)}…</p>
          </li>
        )
      })}
    </ArticleListStyles>
  )
}

export default ArticlesList

const ArticleListStyles = styled.ul`
  li {
    border-bottom: 2px solid black;
    padding: 1rem 0;
  }
  li + li {
    margin-top: 2rem;
  }
`
