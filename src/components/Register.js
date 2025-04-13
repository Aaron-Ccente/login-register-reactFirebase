import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const handleChange = (e) => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  // }; lo que esta abajo es lo mismo pero con desustructuracion
  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  };
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password);
      navigate('/');
    } catch (error) {
      setError(error.code);
      //para el manejo de errores
      if(error.code==="auth/invalid-email"){
        setError("Correo Invalido")
      }
    }
    
  }
  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error}/>}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-fold mb-2">Email</label>
          <input type="email" name="email" id="email" autoComplete="email" placeholder="youremail@company.ltd" onChange={handleChange}
          className="shadow apparence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-fold mb-2">Password</label>
          <input type="password" name="password" id="password" autoComplete="current-password" onChange={handleChange}
          className="shadow apparence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="******"/>
        </div>
        <button className="bg-green-400 py-1 px-2 text-gray-700 hover:bg-green-500 hover:text-gray-800 rounded">Register</button>
      </form>
    </div>
  );
}

export default Register;
