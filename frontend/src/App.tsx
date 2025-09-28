import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@trivia/screens/auth/Login';
import { Register } from '@trivia/screens/auth/Register';
import { Card } from '@trivia/screens/questions/Card';

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