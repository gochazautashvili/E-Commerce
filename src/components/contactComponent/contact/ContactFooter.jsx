import React from 'react'
import free_shopping_icno from '../../../assets/free_shopping_icno.png'
import Money_back_icon from '../../../assets/Money-back_icon.png'
import Secure_Payments_icon from '../../../assets/Secure_Payments_icon.png'
import Support_icon from '../../../assets/Support_icon.png'

function ContactFooter() {
    return (
        <section className='contactFooter'>
            <div className="container">
                <div className="contactFooter__inner">
                    <div className="contactFooter__item">
                        <img src={free_shopping_icno} alt="" />
                        <h1>Free Shipping</h1>
                        <p>Order above $200</p>
                    </div>
                    <div className="contactFooter__item">
                        <img src={Money_back_icon} alt="" />
                        <h1>Money-back</h1>
                        <p>30 days guarantee</p>
                    </div>
                    <div className="contactFooter__item">
                        <img src={Secure_Payments_icon} alt="" />
                        <h1>Secure Payments</h1>
                        <p>Secured by Stripe</p>
                    </div>
                    <div className="contactFooter__item">
                        <img src={Support_icon} alt="" />
                        <h1>24/7 Support</h1>
                        <p>Phone and Email support</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactFooter