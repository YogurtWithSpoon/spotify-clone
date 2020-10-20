import React from 'react'
import './player.scss'
import { connect } from 'react-redux'

export const player = () => {
  return (
    <div>
      <h1>Welcome to Spotify</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(player)
