import React, { useEffect } from 'react'
import './AccountComp.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

function AccountComp() {
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        displayName: yup.string().required(),
        oldPassword: yup.string().required(),
        newPassword: yup.string().required(),
        confirmPassword: yup.string().required(),
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const handleChangeAccount = (date) => {
        console.log(date);
        reset()
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='accountComp'>
            <form onSubmit={handleSubmit(handleChangeAccount)} className='accountComp__form'>
                <div className="accountComp__form_top">
                    <h1>Account Details</h1>
                    <div className="accountComp__form_box">
                        <label htmlFor="firstName">FIRST NAME *</label>
                        <input type="text" id='firstName' placeholder='First name' {...register('firstName')} />
                    </div>
                    <p className='error'>{errors.firstName?.message}</p>
                    <div className="accountComp__form_box">
                        <label htmlFor="lastName">LAST NAME *</label>
                        <input type="text" id='lastName' placeholder='Last name' {...register("lastName")} />
                    </div>
                    <p className='error'>{errors.lastName?.message}</p>
                    <div className="accountComp__form_box">
                        <label htmlFor="displayName">DISPLAY NAME *</label>
                        <input type="text" id='displayName' placeholder='Display name' {...register("displayName")} />
                    </div>
                    <p className='error'>{errors.displayName?.message}</p>
                    <div className="accountComp__form_box">
                        <label htmlFor="email">Email *</label>
                        <input type="text" id='email' placeholder='Email' {...register("email")} />
                        <p>This will be how your name will be displayed in the account section and in reviews</p>
                    </div>
                    <p className='error'>{errors.email?.message}</p>
                </div>
                <div className="accountComp__form_bottom">
                    <h1>Password</h1>
                    <div className="accountComp__form_box">
                        <label htmlFor="old">NEW PASSWORD</label>
                        <input type="text" id='old' placeholder='Old password' {...register("oldPassword")} />
                    </div>
                    <p className='error'>{errors.oldPassword?.message}</p>
                    <div className="accountComp__form_box">
                        <label htmlFor="new">OLD PASSWORD</label>
                        <input type="text" id='new' placeholder='New password' {...register("newPassword")} />
                    </div>
                    <p className='error'>{errors.newPassword?.message}</p>
                    <div className="accountComp__form_box">
                        <label htmlFor="rEPEAT NEW PASSWORD">rEPEAT NEW PASSWORD</label>
                        <input type="text" id='rEPEAT NEW PASSWORD' placeholder='Repeat new password'{...register("confirmPassword")} />
                    </div>
                    <p className='error'>{errors.confirmPassword?.message}</p>
                    <button className='accountComp__form_button' type='submit'>Save changes</button>
                </div>
            </form>
        </section>
    )
}

export default AccountComp