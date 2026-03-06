import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Version11 from './pages/Version11';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/version-1.1" element={<Version11 />} />
      </Routes>
    </Router>
  );
}

export default App;
