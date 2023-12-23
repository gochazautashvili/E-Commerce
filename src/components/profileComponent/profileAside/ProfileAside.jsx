import React, { useEffect, useState } from 'react'
import profile_avatar_img from '../../../assets/profile_avatar_img.png'
import { NavLink, useLocation } from 'react-router-dom'
import './ProfileAside.scss'
import { useMediaQuery } from 'react-responsive'

function ProfileAside() {
  const isMobile = useMediaQuery({ query: '(max-width: 750px)' })

  const [link, setLink] = useState(false)
  const [linkName, setLinkName] = useState('')

  let location = useLocation();

  useEffect(() => {
    if (location.pathname == "/account") {
      setLinkName("Account")
    } else if (location.pathname == "/address") {
      setLinkName("Address")
    } else if (location.pathname == "/orderPage") {
      setLinkName("Orders")
    } else if (location.pathname == "/wishlist") {
      setLinkName("Wishlist")
    }
  }, [])

  return (
    <div className='profileAside'>
      <div className="profileAside__account">
        <img src={profile_avatar_img} alt="" />
        <h1>Sofia Havertz</h1>
      </div>
      {!isMobile ? <div className="profileAside__list">
        <NavLink to={'/account'}>Account</NavLink>
        <NavLink to={'/address'}>Address</NavLink>
        <NavLink to={'/orderPage'}>Orders</NavLink>
        <NavLink to={'/wishlist'}>Wishlist</NavLink>
        <a>Log Out</a>
      </div> : <div className="profileAside__list_select_box">
        <div onClick={() => setLink(!link)} className="profileAside__list_select">{linkName}</div>
        <div className="profileAside__list_select_link profileAside__list" style={{ display: link ? "flex" : "none" }}>
          <NavLink to={'/account'}>Account</NavLink>
          <NavLink to={'/address'}>Address</NavLink>
          <NavLink to={'/orderPage'}>Orders</NavLink>
          <NavLink to={'/wishlist'}>Wishlist</NavLink>
          <a>Log Out</a>
        </div>
      </div>}
    </div>
  )
}

export default ProfileAside