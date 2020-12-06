import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { World, Indonesian, Provinsi } from './pages'

const App = () => {
  return(
    <Router>
      <div>
        <h1>
          Covid-19 track indo
        </h1>
        <nav>
          <table>
            <ul>
              <li>
                <Link to="/world">
                  Data Global
                </Link>
              </li>
              <li>
                <Link to="/indonesian">
                  Data Indonesia
                </Link>
              </li>
              <li>
                <Link to="/provinsi">
                  Data Provinsi
                </Link>
              </li>
            </ul>
          </table>
        </nav>
      </div>
      <Switch>
        <Route path="/world">
          <World/>
        </Route>
        <Route path="/indonesian">
          <Indonesian/>
        </Route>
        <Route path="/provinsi">
        <Provinsi/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;