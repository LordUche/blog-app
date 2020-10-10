import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NavBar() {
  return (
    <NavBarStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </NavBarStyles>
  )
}

export default NavBar

const NavBarStyles = styled.nav`
  position: fixed;
  width: 100vw;
  z-index: 2;
  border-bottom: 3px solid black;
  background-color: white;

  ul {
    display: flex;
    justify-content: center;
    line-height: 3rem;
  }

  a {
    font-weight: bold;
    display: block;
    padding: 0 1rem;

    &:hover,
    &:active,
    &:focus {
      background-color: black;
      color: white;
    }
  }
`
