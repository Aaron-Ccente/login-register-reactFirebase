import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    // con los estilos de abajo, todas las vistas heredan esto
    <div className='bg-slate-300 h-screen text-black flex'>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
