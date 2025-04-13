import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import imagenDeFondo from '../imagenes/imagenFondo.png'
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  // const handleChange = (e) => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  // }; lo que esta abajo es lo mismo pero con desustructuracion
  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  };
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate('/');
    } catch (error) {
      setError(error.code);
      if(error.code==="auth/internal-error"){
        setError("Correro Invalido")
      }
    }
    
  }

  const handleGoogleSignin = async () =>{
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message)
    }
   
  }
  
  return (
    <div className="w-full max-w-xs m-auto">
    <img className="fixed top-0 left-0 w-full h-full object-cover z-10" src={imagenDeFondo}/>
        {error && <Alert message={error}/>}

        <form onSubmit={handleSubmit} className="relative z-20 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
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
          <button className="bg-green-400 py-1 px-2 text-gray-700 hover:bg-green-500 hover:text-gray-800 rounded">Login</button>
        </form>
        
        <button onClick={handleGoogleSignin} 
        className="relative z-20 bg-gray-200 w-full py-2 shadow-md rounded hover:bg-gray-100 text-gray-500 hover:text-gray-600 font-bold">Google LogIn</button>    
    </div>
  );
}

export default Login;
