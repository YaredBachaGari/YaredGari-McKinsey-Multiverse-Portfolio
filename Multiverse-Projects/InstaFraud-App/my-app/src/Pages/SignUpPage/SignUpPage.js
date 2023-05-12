import React, { useState } from 'react'
import SignUp from '../../Components/SignUp/SignUp'
import './SignUpPageStyle.css'


function SignUpPage() {
    
  return (
    <main className='land-page'>
      <div >
        <header className='app-name'>
            <span className='insta'>Insta</span><span className='faud'>Fraud</span>
        </header>
        <SignUp/> 
      </div>
    </main>
  )
}

export default SignUpPage