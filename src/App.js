import {
  withRouter,
  Switch,
  Route,
} from "react-router-dom";
import Main from './pages/Main/Main';
import About from './pages/About/About';

import './App.css';
import React from "react";

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.ym(81519523, 'hit', window.location.href);
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>     
          <Route 
            path={'/about'} 
            exact={true} 
            component={About} />
          <Route 
            path={'/'}  
            component={Main} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
