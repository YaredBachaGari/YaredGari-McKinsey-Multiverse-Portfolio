/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './AvatarStyle.css'

function Avatar({name, imageUrl, className=''}) {
 const plceholderImg = "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
  return (
    <div className='author'>
    <img src={`${imageUrl}` || `${plceholderImg}`}  />
    <p className={`post-text ${className}`}>{name || 'User'}</p>
  </div>
  )
}

export default Avatar