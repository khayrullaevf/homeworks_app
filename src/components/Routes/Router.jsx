import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Home from '../../pages/Home/Home'
import Explore from '../../pages/Explore/Explore'
import Notifications from '../../pages/Notifications/Notifications'
import Messages from '../../pages/Messages/Messages'
import Bookmarks from '../../pages/Bookmarks/Bookmarks'
import Lists from '../../pages/Lists/Lists'
import Profile from '../../pages/Profile/Profile'
import More from '../../pages/More/More'

import './router.css'


const Router = () => {
  return (
    <div className='router container'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router