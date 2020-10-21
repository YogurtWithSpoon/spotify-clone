import React from 'react'
import './player.scss'
import { connect } from 'react-redux'
import SideBar from '../sidebar/sidebar'
import Body from '../body/body'
import Footer from '../footer/footer'

export const player = () => {
  return (
    <div className="player">
    <div className="player__body">
      <SideBar />
      <Body /> 
    </div>
    <Footer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

// const mapDispatchToProps = {

// }
// return in connect

export default connect(mapStateToProps)(player)
