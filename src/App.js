import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WordList from './components/WordList'
import WordCreate from './components/WordCreate'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
        <Header />
        <Route path="/words/all" exact component={WordList} />
        <Route path="/words/create" exact component={WordCreate} />

        <Footer />
      </div>
      </Router>
    )
  }
}

export default App
