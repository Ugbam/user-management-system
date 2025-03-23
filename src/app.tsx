import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './userlist';
import UserForm from './userform';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/add-user" element={<UserForm />} />
        <Route path="/edit-user/:id" element={<UserForm />} />
        <Route path="/" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default App;