import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

  const [path, setPath] = useState('');

  const handleOptionChange = (e) => {
    setPath(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (path === "admin") {
      localStorage.setItem('role', "admin");
      localStorage.setItem('parth', true);
      navigate('/dashboard');
    }
    else if (path === "hr") {
      localStorage.setItem('role', "hr");
      localStorage.setItem('parth', true);
      navigate('/dashboard');
    }
    else if (path === "employee") {
      localStorage.setItem('role', "employee");
      localStorage.setItem('parth', true);
      navigate('/dashboard');
    }
    else {
      alert('Please enter your name & select a role first!');
    }
  }

  return (
    <div className='w-full h-screen border-5 border-black flex justify-center items-center bg-blue-50 text-white'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-bold mb-[15%] text-blue-950'>SOCIALIGHT</h1>
        <div className='border-1 p-[2%] w-[150%] mb-[40px] bg-blue-100 rounded-[15px] border-black'>
          <h2 className='text-4xl font-bold text-center mb-[10%] mt-[5%] font-serif text-blue-950'>Login</h2>
          <form className='flex flex-col gap-[5px] justify-center items-center mb-[10%]'>
            <input className='border-black border-2 w-[50%] h-[40px] border-none bg-blue-950 rounded-[15px] text-center placeholder:text-white font-bold' type="text" placeholder='enter your name' /> <br /><br />
            <select value={path} onChange={handleOptionChange} className='border-black border-2 w-[50%] h-[40px] border-none bg-blue-950 rounded-[15px] text-white font-bold text-center'>
              <option value="">Choose Your Role</option>
              <option value="admin">Admin</option>
              <option value="hr">HR</option>
              <option value="employee">Employee</option>
            </select> <br /><br />
            <button onClick={handleSubmit} className='border-black border-2 w-[50%] h-[40px] rounded-[15px] font-extrabold cursor-pointer bg-blue-950 text-white border-none'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;