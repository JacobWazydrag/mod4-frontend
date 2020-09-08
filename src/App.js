import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard'
import NoteDetails from "./components/notes/NoteDetails";
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'
import CreateNote from './components/notes/CreateNote'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/note/:id' component={NoteDetails} />
              <Route path='/LogIn' component={LogIn} />
              <Route path='/SignUp' component={SignUp} />
              <Route path='/CreateNote' component={CreateNote} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}
}
export default App;
