import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Card } from './components/questions/Card';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/questions" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;