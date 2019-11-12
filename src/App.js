import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WordList from './components/word/WordList'
import WordCreate from './components/word/WordCreate'
import WordUpdate from './components/word/WordUpdate'
import KanjiList from './components/kanji/KanjiList'
import KanjiCreate from './components/kanji/KanjiCreate'
import KanjiUpdate from './components/kanji/KanjiUpdate'
import GrammarList from './components/grammar/GrammarList'
import GrammarCreate from './components/grammar/GrammarCreate'
import GrammarUpdate from './components/grammar/GrammarUpdate'
import UnitList from './components/UnitList'
import UnitCreate from './components/UnitCreate'
import UnitUpdate from './components/UnitUpdate'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
        <Header />
        <Route path="/words/all" exact component={WordList} />
        <Route path="/words/create" exact component={WordCreate} />
        <Route path="/words/:id/edit" exact component={WordUpdate} />

        <Route path="/kanjis/all" exact component={KanjiList} />
        <Route path="/kanjis/create" exact component={KanjiCreate} />
        <Route path="/kanjis/:id/edit" exact component={KanjiUpdate} />

        <Route path="/grammars/all" exact component={GrammarList} />
        <Route path="/grammars/create" exact component={GrammarCreate} />
        <Route path="/grammars/:id/edit" exact component={GrammarUpdate} />

        <Route path="/units/all" exact component={UnitList} />
        <Route path="/units/create" exact component={UnitCreate} />
        <Route path="/units/:id/edit" exact component={UnitUpdate} />

        <Footer />
      </div>
      </Router>
    )
  }
}

export default App
