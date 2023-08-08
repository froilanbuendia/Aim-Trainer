import React from 'react';
import * as ReactDOM from 'react-dom';
// import { ReactDOM } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './page/Login';
import Signup from './page/Signup';

function App() {
  // initializeFirebase();
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Signup />);
export default App;
