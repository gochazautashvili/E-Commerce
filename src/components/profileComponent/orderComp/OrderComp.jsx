import React from 'react'
import './OrderComp.scss'

function OrderComp() {
    return (
        <section className='orderComp'>
            <h1 className='orderComp__title'>Orders History</h1>
            <div className="orderComp__content">
                <div className="orderComp__content_title">
                    <p>Number ID</p>
                    <p>Dates</p>
                    <p>Status</p>
                    <p>Price</p>
                </div>
                <div className="orderComp__content_desc">
                    <p>#3456_768</p>
                    <p>October 17, 2023</p>
                    <p>Delivered</p>
                    <p>$1234.00</p>
                </div>
            </div>
            <div className="orderComp__content">
                <div className="orderComp__content_desc">
                    <p>#3456_768</p>
                    <p>October 17, 2023</p>
                    <p>Delivered</p>
                    <p>$1234.00</p>
                </div>
            </div>
            <div className="orderComp__content">
                <div className="orderComp__content_desc">
                    <p>#3456_768</p>
                    <p>October 17, 2023</p>
                    <p>Delivered</p>
                    <p>$1234.00</p>
                </div>
            </div>
        </section>
    )
}

export default OrderComp