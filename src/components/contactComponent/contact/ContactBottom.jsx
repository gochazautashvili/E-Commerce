import React, { useRef } from 'react'
import './Contact.scss'
import contact_map_img from '../../../assets/contact_map_img.png'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from '@emailjs/browser';

function ContactBottom() {
  const contactSchema = yup.object().shape({
    name: yup.string().min(2).max(40).required(),
    email: yup.string().email().required(),
    message: yup.string().min(5).required()
  })

  const form = useRef()

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(contactSchema)
  })

  const contactData = (data, event) => {
    emailjs.sendForm('service_mvh332c', 'template_wxyfdzy', form.current, '0KjncsKsrvXO2MQop')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    event.target.reset();
  }

  return (
    <section className='contactBottom'>
      <form ref={form} className='contactForm' onSubmit={handleSubmit(contactData)}>
        <div className="contactFrom__name">
          <label htmlFor="name">Full Name</label>
          <input id='name' name='name' type="text" placeholder='Your Name' {...register("name")} />
        </div>
        <div className="contactForm__Address">
          <label htmlFor="address">Full Email</label>
          <input id='address' name='email' type="email" placeholder='Your Email' {...register("email")} />
        </div>
        <div className="contactBottom__message">
          <label htmlFor="message">Message</label>
          <textarea id='message' name='message' type="text" placeholder='Your Message' {...register("message")} />
        </div>
        <input className='contactFrom__button' type="submit" value='Send Message' />
      </form>
      <div className="contactBottom__right">
        <img src={contact_map_img} alt="" />
      </div>
    </section>
  )
}

export default ContactBottom