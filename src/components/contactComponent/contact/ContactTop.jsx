import React from 'react'
import './Contact.scss'
import contact_mail_icon from '../../../assets/contact_mail_icon.png'
import contact_phone_icon from '../../../assets/contact_phone_icon.png'
import contact_addres_icon from '../../../assets/contact_addres_icon.png'

function ContactTop() {
    return (
        <section className='contactTop'>
            <h1 className="contactTop__title">Contact Us</h1>
            <div className="contactTop__content">
                <div className="contactTop__item">
                    <img src={contact_addres_icon} alt="" />
                    <h2 className="contactTop__item_title">Address</h2>
                    <p className="contactTop__item_desc">234 Hai Trieu, Ho Chi Minh City, Viet Nam</p>
                </div>
                <div className="contactTop__item">
                    <img src={contact_phone_icon} alt="" />
                    <h2 className="contactTop__item_title">CONTACT US</h2>
                    <p className="contactTop__item_desc">+84 234 567 890</p>
                </div>
                <div className="contactTop__item">
                    <img src={contact_mail_icon} alt="" />
                    <h2 className="contactTop__item_title">EMAIL</h2>
                    <p className="contactTop__item_desc">hello@3legant.com</p>
                </div>
            </div>
        </section>
    )
}

export default ContactTop