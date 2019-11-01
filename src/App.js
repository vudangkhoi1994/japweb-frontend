import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WordList from './components/word/WordList'
import WordCreate from './components/word/WordCreate'
import WordUpdate from './components/word/WordUpdate'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
        <Header />
        <Route path="/words/all" exact component={WordList} />
        <Route path="/words/create" exact component={WordCreate} />
        <Route path="/words/:id/edit" exact component={WordUpdate} />

        <Footer />
      </div>
      </Router>
    )
  }
}

export default App
