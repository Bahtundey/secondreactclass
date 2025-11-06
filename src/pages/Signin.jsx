import React from 'react'

const Signin = () => {
  return (
    <>
        <form action="" className='d-block mx-auto w-50 p-4 border rounded-3 mt-5  bg-success-subtle'>
        
      

        <label htmlFor="email" >email</label><br />
        <input type="text" id="email" name="email" placeholder='email' className='w-75 p-2' required/><br /><br />

        <label htmlFor="password">password</label><br />
        <input type="text" id="password" name="password" placeholder='password' className='w-75 p-2' required/><br /><br />

        <button type="submit" className='bg-primary p-2 rounded-2 w-50 d-block mx-auto' >Signup</button>
        <p> Already have an account? <a href="/signup">SIgnup</a></p>
       
    </form>
    </>
  )
}

export default Signin