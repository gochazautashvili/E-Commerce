import React from 'react'
import ProfileAside from '../../components/profileComponent/profileAside/ProfileAside'
import OrderComp from '../../components/profileComponent/orderComp/OrderComp'

function OrdersPage() {
  return (
    <main>
      <div className="container">
        <h1 className="account__title">My Account</h1>
        <div className="orderPage__inner">
          <aside>
            <ProfileAside />
          </aside>
          <OrderComp />
        </div>
      </div>
    </main>
  )
}

export default OrdersPage