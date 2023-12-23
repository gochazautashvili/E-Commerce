import React from 'react'
import './NewsLetter.scss'
import email_icon from '../../assets/email_icon.png'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from 'yup'

function NewsLetter() {
    const schema = yup.object().shape({
        email: yup.string().email("ეს არ გავს მაილს").required("შეიყვანე მაილი")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), })

    const handleEmail = (email) => {
        console.log(email);
    }

    return (
        <section className='newsLetter'>
            <h1 className="newsLetter__title">Join Our Newsletter</h1>
            <p className="newsLetter__text">Sign up for deals, new products and promotions</p>
            <form onSubmit={handleSubmit(handleEmail)} className="newsLetter__signUp">
                <img src={email_icon} alt="" />
                <input className='newsLetter__signUp_email' type="email" placeholder='Email address' {...register("email")} />
                <input className='newsLetter__signUp_submit' type='submit' value="Signup" />
            </form>
            <p style={{color: "red", marginTop: "10px" }}>{errors?.email?.message}</p>
        </section>
    )
}

export default NewsLetter