import React from 'react'

const Login = () => {
  return (
    <>
       <form>
        <br />
        <div>
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" />
        </div>
        <br />
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
        </div>
        <br />
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
        </div>
         <br />
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
    </>
  )
}

export default Login
