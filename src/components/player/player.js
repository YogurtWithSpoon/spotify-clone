import React from 'react'
import './player.scss'
import { connect } from 'react-redux'
import SideBar from '../sidebar/sidebar'
import Body from '../body/body'
import Footer from '../footer/footer'

export const player = ({player}) => {
  return (
    <div className="player">
    <div className="player__body">
      <SideBar playlists={player.playlists}/>
      <Body/> 
    </div>
    <Footer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  player: state.player
})

// const mapDispatchToProps = {

// }
// return in connect

export default connect(mapStateToProps)(player)
