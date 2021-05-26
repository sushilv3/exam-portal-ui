import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import RegistrationForm from './components/pages/RegistrationForm';
import Error from './components/pages/Error';
function App() {
  return (
    <div className="container">
    <Switch>
     <Route exact path="/" component={RegistrationForm} />
     <Route component={Error} />
     </Switch>
    </div>
  );
}

export default App;
