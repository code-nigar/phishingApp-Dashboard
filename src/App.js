import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Dashboard from './pages/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar'; 
import './index.css';

function App() {
  return (
    <Router>
      <div className="App container">
        <Sidebar />

        <Switch>
          <Route path="/" exact component={Dashboard} />
          {/* <Route path="/module1" component={Module1} />
          <Route path="/module2" component={Module2} />
          <Route path="/module3" component={Module3} /> */}
        </Switch>
      </div>
    </Router>
        
    
  );
}

export default App;
