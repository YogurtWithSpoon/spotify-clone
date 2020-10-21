import React from 'react'
import './body.scss'
import Header from '../header/header'
function body({name}) {
  return (
    <div className="body">
      <Header name={name}/>
    </div>
  )
}

export default body
