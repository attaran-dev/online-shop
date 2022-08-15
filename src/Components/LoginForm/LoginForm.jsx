import React from 'react'

function LoginForm() {
  return (
        <form action="" className='flex flex-col w-50 p-6 gap-2 shadow-2xl'>
            <label htmlFor="username">نام کاربری:</label>
            <input type="text" name="username" id="username" className='p-2 border-b-2' />
            <label htmlFor="password">کلمه‌ی عبور:</label>
            <input type="password" name="password" id="password" className='p-2 border-b-2' />
            <button type="submit" className='bg-gray-100 py-2'>ورود</button>
        </form>
  )
}

export default LoginForm