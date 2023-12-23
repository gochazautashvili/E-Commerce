import React from 'react'
import ProfileAside from '../../components/profileComponent/profileAside/ProfileAside'
import WishlistPage from '../../components/profileComponent/wishlist/WishlistPage'

function Wishlist() {
  return (
    <main>
      <div className="container">
        <h1 className="account__title">My Account</h1>
        <div className="wishlist__inner">
          <aside>
            <ProfileAside />
          </aside>
          <WishlistPage />
        </div>
      </div>
    </main>
  )
}

export default Wishlist