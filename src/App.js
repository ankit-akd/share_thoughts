
import './App.css';
import LoginPage from './components/LoginPage';
import SharePostPage from './components/SharePostPage';
import SignUpPage from './components/SignUpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path = "/" element ={<LoginPage />} />
      <Route path = "/dashboard" element={<SharePostPage />} />
      <Route path = "/signup" element={<SignUpPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
