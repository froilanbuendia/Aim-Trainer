import React from 'react';
import { ReactDOM } from 'react-dom/client';
// import Home from './page/Home';
// import Login from './page/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { } from 'react-router-dom';
import Signup from './page/Signup';

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Signup />);
export default App;
