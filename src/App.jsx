import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import { UserContext, defaultUser } from '@context/UserContext.jsx';

import MainView from './views/MainView/MainView';
import LoginView from './views/LoginView';
import './App.scss';

function App() {
  const [user, setUser] = useState(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<MainView />} />
          <Route path="/login" element={<LoginView />} />

          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  )
}

export default App
