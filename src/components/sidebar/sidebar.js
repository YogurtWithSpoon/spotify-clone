import React from 'react'
import './sidebar.scss'
import SidebarOption from '../sideBarOption/sideBarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

function sidebar({playlists}) {
  return (
    <div className="sidebar">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="spotify logo" className="sidebar__img"/>
      <SidebarOption title="Главная" Icon={HomeIcon}/>
      <SidebarOption title="Поиск" Icon={SearchIcon}/>
      <SidebarOption title="Моя медиатека" Icon={QueueMusicIcon}/>
      <br />
      <strong>ПЛЕЙЛИСТЫ</strong>
      <hr />
      {playlists?.map(item => <SidebarOption key={item.id} title={item.name} />)}
    </div>
  )
}

export default sidebar
