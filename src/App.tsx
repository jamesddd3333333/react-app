import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './about/AboutPage';
import LeadershipPage from './about/LeadershipPage';
import TeamPage from './about/TeamPage';
import ContactPage from './ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} >
          <Route path="contact" element={<ContactPage />} />
          <Route path="teamPage/:id?" element={<TeamPage />} />
          <Route path="/about/leadershipPage" element={<LeadershipPage />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
        {/* 可以添加更多路由 */}
      </Routes>
    </Router>
  );
}

export default App;