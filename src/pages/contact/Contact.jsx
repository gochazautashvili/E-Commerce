import React from 'react'
import './Contact.scss'
import Description from '../../components/contactComponent/description/Description'
import ContactAbout from '../../components/contactComponent/contactAbout/ContactAbout'
import ContactItem from '../../components/contactComponent/contact/Contact'

function Contact() {
  return (
    <main className='contact__main'>
      <Description />
      <ContactAbout />
      <ContactItem />
    </main>
  )
}

export default Contact