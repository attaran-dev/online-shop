import React from 'react'
import {Navigate} from 'react-router-dom'


function LoginForm() {
  return (
        <form action="" className='flex flex-col w-50 p-6 gap-2 shadow-2xl'>
            <label htmlFor="username">نام کاربری:</label>
            <input type="text" name="username" id="username" className='p-2 border-b-2' />
            <label htmlFor="password">کلمه‌ی عبور:</label>
            <input type="password" name="password" id="password" className='p-2 border-b-2' />
            <a href='/admin' type="submit" className='bg-gray-100 py-2 text-center'>ورود</a>
        </form>
  )
}

export default LoginForm