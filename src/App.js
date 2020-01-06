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
import CourseList from './components/course/CourseList'
import CourseCreate from './components/course/CourseCreate'
import CourseUpdate from './components/course/CourseUpdate'
import UnitView from './components/unit/UnitView'
import CourseView from './components/course/CourseView'
import CourseViewList from './components/course/CourseViewList'
import Login from './components/user/Login'
import Register from './components/user/Register'

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
        
        <Route path="/admin/courses/all" exact component={CourseList} />
        <Route path="/admin/courses/create" exact component={CourseCreate} />
        <Route path="/admin/courses/:id/edit" exact component={CourseUpdate} />

        <Route path="/units/:id" exact component={UnitView} />
        <Route path="/courses/:id" exact component={CourseView} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={CourseViewList} />

      </div>
      </Router>
    )
  }
}

export default App
