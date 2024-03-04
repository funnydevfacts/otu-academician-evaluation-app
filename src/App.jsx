import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import MainView from './views/MainView/MainView';
import LoginView from './views/LoginView';
import './App.scss';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<MainView />} />
        <Route path="/login" element={<LoginView />} />

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  )
}

export default App
