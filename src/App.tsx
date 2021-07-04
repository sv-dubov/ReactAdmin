import React from 'react';
import './App.css';
import Dashboard from './secure/dashboard/Dashboard';
import Users from './secure/users/Users';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './public/Login';
import Register from './public/Register';
import RedirectToDashboard from './secure/RedirectToDashboard';
import UserCreate from './secure/users/UserCreate';
import UserEdit from './secure/users/UserEdit';
import Roles from './secure/roles/Roles';
import RoleCreate from './secure/roles/RoleCreate';
import RoleEdit from './secure/roles/RoleEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} exact component={RedirectToDashboard} />
        <Route path={'/dashboard'} exact component={Dashboard} />
        <Route path={'/login'} component={Login} />
        <Route path={'/register'} component={Register} />
        <Route path={'/users'} component={Users} exact />
        <Route path={'/users/create'} component={UserCreate} />
        <Route path={'/users/:id/edit'} component={UserEdit} />
        <Route path={'/roles'} component={Roles} exact />
        <Route path={'/roles/create'} component={RoleCreate} />
        <Route path={'/roles/:id/edit'} component={RoleEdit} />
      </BrowserRouter>
    </div>
  );
}

export default App;
