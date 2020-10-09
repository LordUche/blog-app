import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import AboutPage from './pages/AboutPage'
import ArticleListPage from './pages/ArticleListPage'
import ArticlePage from './pages/ArticlePage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="page-body">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/articles" exact component={ArticleListPage} />
            <Route path="/articles/:slug" component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
