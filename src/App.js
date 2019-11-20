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
import UnitList from './components/unit/UnitList'
import UnitCreate from './components/unit/UnitCreate'
import UnitUpdate from './components/unit/UnitUpdate'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
        <Header />
        <Route path="/admin/words/all" exact component={WordList} />
        <Route path="/admin/words/create" exact component={WordCreate} />
        <Route path="/admin/words/:id/edit" exact component={WordUpdate} />

        <Route path="/admin/kanjis/all" exact component={KanjiList} />
        <Route path="/admin/kanjis/create" exact component={KanjiCreate} />
        <Route path="/admin/kanjis/:id/edit" exact component={KanjiUpdate} />

        <Route path="/admin/grammars/all" exact component={GrammarList} />
        <Route path="/admin/grammars/create" exact component={GrammarCreate} />
        <Route path="/admin/grammars/:id/edit" exact component={GrammarUpdate} />

        <Route path="/admin/units/all" exact component={UnitList} />
        <Route path="/admin/units/create" exact component={UnitCreate} />
        <Route path="/admin/units/:id/edit" exact component={UnitUpdate} />

        <Footer />
      </div>
      </Router>
    )
  }
}

export default App
