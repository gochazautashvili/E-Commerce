import React from 'react'
import './Contact.scss'
import ContactTop from './ContactTop'
import ContactBottom from './ContactBottom'
import ContactFooter from './ContactFooter'

function ContactItem() {
    return (
        <section className='contact'>
            <div className="container">
                <div className="contact__inner">
                    <ContactTop />
                    <ContactBottom />
                </div>
            </div>
            <ContactFooter />
        </section>
    )
}

export default ContactItem