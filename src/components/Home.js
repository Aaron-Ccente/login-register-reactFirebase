import React from 'react';
import { useAuth } from '../context/authContext';


function Home() {
  
  const { user, logout, loading } = useAuth(); //con desestructuracion, trae los valores que hay en user

  console.log(user);

  const handleLogout = async () =>{
    try {
      await logout();
    } catch (error) {
      console.log(error)
    }
    
  }
  if(loading) return <h1>loading</h1>
  return (
    <div className='w-full flex flex-col items-center justify-center bg-blue-200'>
      <div className='bg-blue-300 '>
        <h1 className='block'>Welcome {user.displayName || user.email}</h1>
        <button onClick={handleLogout}
        className='block'>logout</button>
      </div>
    </div>
  )
}

export default Home

