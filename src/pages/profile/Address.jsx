import React from 'react'
import ProfileAside from '../../components/profileComponent/profileAside/ProfileAside'
import AddressComp from '../../components/profileComponent/addressComp/AddressComp'

function Address() {
  return (
    <main>
      <div className="container">
        <h1 className="account__title">My Account</h1>
        <div className="account__inner">
          <aside>
            <ProfileAside />
          </aside>
          <AddressComp />
        </div>
      </div>
    </main>
  )
}

export default Address