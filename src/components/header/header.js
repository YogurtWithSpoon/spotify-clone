import React from 'react'
import { connect } from 'react-redux'
import {Avatar} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import "./header.scss"

export const header = ({player}) => {
  const {img,user} = player;
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon className="header__icon"/>
        <input 
          className="header__search"
          placeholder="Поиск"
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src={img} className="header__avatar"/>
        <h4 className="header__user">{user}</h4>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  player: state.player
})

export default connect(mapStateToProps)(header)

