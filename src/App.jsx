import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import Portfolio from './Portfolio';
import Resume from './Resume';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap Routes around Route components */}
        <Route path="/" element={<Portfolio />} /> {/* Use element prop instead of component */}
        <Route path="/resume" element={<Resume />} /> {/* Use element prop instead of component */}
      </Routes>
    </Router>
  );
}

export default App;
