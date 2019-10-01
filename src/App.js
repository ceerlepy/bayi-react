import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login/login'
import MainPage from './MainPage/mainPage'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/mainPage" component={MainPage} />
          <Route path="*" component={()=> <div>Not found</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
