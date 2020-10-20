import React from 'react'
import './login.scss'

function login() {
  return (
    <div className="login">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="spotify logo" className="login__image"/>
      <a href="#" className="login__auth">Login with Spotify</a>
    </div>
  )
}

export default login
