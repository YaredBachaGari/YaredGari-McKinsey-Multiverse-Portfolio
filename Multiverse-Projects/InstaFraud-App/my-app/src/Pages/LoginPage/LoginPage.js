import React, { useState } from 'react'
import Login from '../../Components/Login/Login'
import SignUp from '../../Components/SignUp/SignUp'
import './LoginStyle.css'


function LoginPage() {
    
  return (
    <main className='land-page'>
      <div className=''>
        <header className='app-name'>
            <span className='insta'>Insta</span><span className='faud'>Fraud</span>
        </header>
        <Login/> 
      </div>
    </main>
  )
}

export default LoginPage