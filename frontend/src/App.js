import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  const user = localStorage.getItem("token")
  return (
    < Routes >
      {user && <Route path='/home' exact element={<Home />} />}
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/' exact element={<Navigate replace to="/Home" />} />
    </Routes >
  );
}

export default App;
