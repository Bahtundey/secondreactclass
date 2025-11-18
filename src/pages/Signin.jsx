import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    const userData = { email, password };

    try {
      const res = await axios.post('https://mongoose-sgu0.onrender.com/user/signin', userData);

      console.log('Response:', res.data);

      if (res.data.success === true) {
        alert('Signin successful! Welcome back.');
        navigate('/dashboard'); 
      } else {
        alert(res.data.message || "Invalid login credentials");
      }

      setEmail('');
      setPassword('');

    } catch (err) {
      console.error('Error:', err.response ? err.response.data : err);
      alert(err.response?.data?.message || 'Signin failed, try again');
    }
  };

  return (
    <>
      <form 
        className='d-block mx-auto w-50 p-4 border rounded-3 mt-5 bg-primary-subtle shadow'
        onSubmit={handleSubmit}
      >
        <h2 className='text-center mb-4'>Sign In</h2>

        <div className='mb-3'>
          <label htmlFor="email" className='form-label'>Email</label>
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            id="email" 
            name="email" 
            placeholder='Enter your email' 
            className='form-control' 
            required
          />
        </div>

        <div className='mb-3'>
          <label htmlFor="password" className='form-label'>Password</label>
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            id="password" 
            name="password" 
            placeholder='Enter your password' 
            className='form-control' 
            required
          />
        </div>

        <button type="submit" className='btn btn-primary w-100'>Sign In</button>

        <p className='text-center mt-3'>
          Don't have an account? <a href="/signup" className='text-decoration-none'>Sign Up</a>
        </p>
      </form>
    </>
  );
};

export default Signin;
