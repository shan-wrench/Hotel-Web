import React from 'react'
import Navbar from "./common/Navbar/Navbar"
import Home from "./components/pages/Home"
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom' 

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
