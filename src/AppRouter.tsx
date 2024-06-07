import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Router>
  );
};

export default AppRouter;
