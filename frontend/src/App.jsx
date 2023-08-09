import React from 'react';
// import * as ReactDOM from 'react-dom';
// import { ReactDOM } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './page/Login';
import Home from './page/Home';
import Signup from './page/Signup';

function App() {
  // initializeFirebase();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Signup />);
export default App;
