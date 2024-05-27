import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './about/AboutPage';
import LeadershipPage from './about/LeadershipPage';
import TeamPage from './about/TeamPage';
import ContactPage from './ContactPage';
import Other from './about/Other';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} >
          <Route index path="contact" element={<div>index</div>} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="teamPage/:id?" element={<TeamPage />} />
          <Route path="/about/leadershipPage" element={<LeadershipPage />} />
          <Route path="*" element={<Other />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ls/*" element={<LeadershipPage />} />
        {/* 可以添加更多路由 */}
      </Routes>
    </Router>
  );
}

export default App;