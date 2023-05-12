import React from 'react'
import './ProfileStyle.css'
import Profile from '../../Components/ProfileView/Profile'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

function ProfilePage() {
  return (
    <>
    <NavBar/>
    <Profile/> 
    <Footer/>
    </>

  )
}

export default ProfilePage