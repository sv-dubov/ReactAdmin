import React from 'react';
import './App.css';
import Dashboard from './secure/Dashboard';
import Menu from './secure/components/Menu';
import Nav from './secure/components/Nav';
import Users from './secure/Users';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <BrowserRouter>
              <Route path={'/'} exact component={Dashboard} />
              <Route path={'/users'} component={Users} />
            </BrowserRouter>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
