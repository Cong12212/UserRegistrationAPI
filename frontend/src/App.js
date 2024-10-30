import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './User/Register.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} /> {/* Chuyển hướng về trang đăng ký */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
