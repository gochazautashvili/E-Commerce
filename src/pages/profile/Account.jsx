import React from 'react'
import ProfileAside from '../../components/profileComponent/profileAside/ProfileAside'
import './Profile.scss'
import AccountComp from '../../components/profileComponent/accountComp/AccountComp'

function Account() {
    return (
        <main>
            <div className="container">
                <h1 className="account__title">My Account</h1>
                <div className="account__inner">
                    <aside>
                        <ProfileAside />
                    </aside>
                    <AccountComp />
                </div>
            </div>
        </main>
    )
}

export default Account