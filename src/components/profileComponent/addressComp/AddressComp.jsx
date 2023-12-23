import React from 'react'
import './AddressComp.scss'
import edit_icon from '../../../assets/edit_icon.png'

function AddressComp() {
    return (
        <section className='addressComp'>
            <h1 className='addressComp__title'>Address</h1>
            <div className="addressComp__inner">
                <div className="addressComp__left">
                    <div className="addressComp__top">
                        <h1>Billing Address</h1>
                        <h2> <img src={edit_icon} alt="" />Edit</h2>
                    </div>
                    <p>Sofia Havertz</p>
                    <p>(+1) 234 567 890</p>
                    <p>345 Long Island, NewYork, United States</p>
                </div>
                <div className="addressComp__right">
                    <div className="addressComp__top">
                        <h1>Shipping Address</h1>
                        <h2> <img src={edit_icon} alt="" />Edit</h2>
                    </div>
                    <p>Sofia Havertz</p>
                    <p>(+1) 234 567 890</p>
                    <p>345 Long Island, NewYork, United States</p>
                </div>
            </div>
        </section>
    )
}

export default AddressComp