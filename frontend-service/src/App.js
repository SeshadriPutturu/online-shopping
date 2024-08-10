import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
// Import other components...

const App = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset-password" component={ResetPassword} />
            {/* Add other routes... */}
          </Switch>
        </div>
      </Router>
  );
};

export default App;
