import React, { useContext, useState } from 'react'
import './CheckOut.scss'
import checkOut from '../../../assets/checkOut.png'
import Money_back_icon from '../../../assets/Money-back_icon.png'
import product from '../../../db/product'
import { CartContext } from '../../../context/CartContext'
import CartItem from '../../cartItem/CartItem'
import frocent from '../../../assets/frocent.png'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'


function CheckOut() {
  const [pay, setPay] = useState('card')
  const {
    cartItems,
    subtotal,
    shipping,
    getTotalCartAmount,
    setFinalAmount,
    setPayment
  } = useContext(CartContext)

  const totalAmount = subtotal * 0.25
  const defaultTotalAmount = Math.round(getTotalCartAmount()) * 0.25

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    number: yup.number().required(),
    email: yup.string().email().required(),
    state: yup.string().required(),
    code: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    address: yup.string().required(),
    date: yup.string().required(),
    cvcCode: yup.string().required(),
    cardNumber: yup.number().required(),
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const navigate = useNavigate()

  const handleBay = (data, e) => {
    e.preventDefault()
    console.log(data);
    reset()

    navigate('/orderComplete')
  }

  const finalAmount = subtotal ? Math.round(subtotal - totalAmount) : Math.round(getTotalCartAmount()) - Math.round(defaultTotalAmount)

  return (
    <section className='checkOut'>
      <h1 className="checkOut__title">Check Out</h1>
      <div className="checkOut__navigate">
        <div className="checkOut__navigate_item">
          <img src={checkOut} alt="" />
          <p>ShoppingCart</p>
        </div>
        <div className="checkOut__navigate_item">
          <h1>2</h1>
          <p>Checkout details</p>
        </div>
        <div className="checkOut__navigate_item">
          <h1>3</h1>
          <p>Order complete</p>
        </div>
      </div>
      <form className='checkOut__form' onSubmit={handleSubmit(handleBay)}>
        {/* this is full form left side */}
        <div className="checkOut__form_content">
          <div className="checkOut__left">
            <div className="checkOut__top">
              <h1 className="checkOut__top_title">Contact Information</h1>
              <div className="checkOut__user">
                <div className="checkOut__user_first">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" id='firstName' name='firstName' placeholder='First name' {...register("firstName")} />
                  <p className='checkOut__form_error'>{errors.firstName?.message}</p>
                </div>
                <div className="checkOut__user_last">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" id='lastName' name='lastName' placeholder='Last name' {...register("lastName")} />
                  <p className='checkOut__form_error'>{errors.lastName?.message}</p>
                </div>
              </div>
              <div className="checkOut__form_number">
                <label htmlFor="number">Phone Number</label>
                <input type="text" id='number' name='number' placeholder='Phone number' {...register("number")} />
                <p className='checkOut__form_error'>{errors.number?.message}</p>
              </div>
              <div className="checkOut__from_email">
                <label htmlFor="email">Email address</label>
                <input type="text" id='email' name='email' placeholder='Your Email' {...register("email")} />
                <p className='checkOut__form_error'>{errors.email?.message}</p>
              </div>
            </div>
            <div className="checkOut__center">
              <h1 className="checkOut__top_title">Shipping Address</h1>
              <div className="checkOut__center_content">
                <div className="checkOut__user">
                  <div className="checkOut__user_first">
                    <label htmlFor="state">State</label>
                    <input type="text" id='state' name='state' placeholder='State' {...register("state")} />
                    <p className='checkOut__form_error'>{errors.state?.message}</p>
                  </div>
                  <div className="checkOut__user_last">
                    <label htmlFor="code">Zip Code</label>
                    <input type="text" id='code' name='code' placeholder='Zip Code' {...register("code")} />
                    <p className='checkOut__form_error'>{errors.code?.message}</p>
                  </div>
                </div>
                <div className="checkOut__form_number">
                  <label htmlFor="city">Town / City *</label>
                  <input type="text" id='city' name='city' placeholder='Town / City *' {...register("city")} />
                  <p className='checkOut__form_error'>{errors.city?.message}</p>
                </div>
                <div className="checkOut__form_number">
                  <label htmlFor="country">Country *</label>
                  <input type="text" id='country' name='country' placeholder='Country' {...register("country")} />
                  <p className='checkOut__form_error'>{errors.country?.message}</p>
                </div>
                <div className="checkOut__from_email">
                  <label htmlFor="address">Street Address *</label>
                  <input type="text" id='address' name='address' placeholder='Stress Address' {...register("address")} />
                  <p className='checkOut__form_error'>{errors.address?.message}</p>
                </div>
              </div>
              <div className="checkOut__from_address">
                <input type="checkbox" id="checkbox" required />
                <label htmlFor="checkbox">Use a different billing address (optional)</label>
              </div>
            </div>
            <div className="checkOut__left__bottom">
              <h1 className="checkOut__top_title">Payment method</h1>
              <div className="checkOut__bottom_content">
                <div className="checkOut__user">
                  <div className="checkOut__user_first">
                    <label htmlFor="date">Expiration date</label>
                    <input type="text" id='date' name='date' placeholder='MM/YY' {...register("date")} />
                    <p className='checkOut__form_error'>{errors.date?.message}</p>
                  </div>
                  <div className="checkOut__user_last">
                    <label htmlFor="cvcCode">CVC</label>
                    <input type="text" id='cvcCode' name='cvcCode' placeholder='CVC code' {...register("cvcCode")} />
                    <p className='checkOut__form_error'>{errors.cvcCode?.message}</p>
                  </div>
                </div>
                <div className="checkOut__form_number">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input type="text" id='cardNumber' name='cardNumber' placeholder='1234 1234 1234' {...register("cardNumber")} />
                  <p className='checkOut__form_error'>{errors.cardNumber?.message}</p>
                </div>
                <div className="checkOut__bottom_payMethod">
                  <label onClick={() => setPayment("Paypal")} htmlFor="Paypal" className="checkOut__bottom_radio card" style={{ background: pay == "paypal" ? "#F3F5F7" : "#FEFEFE" }}>
                    <input name='paypal' type="radio" id='Paypal' placeholder='CVC code' onChange={() => setPay("paypal")} />
                    <label htmlFor="Paypal">Paypal</label>
                  </label>
                  <label onClick={() => setPayment("Credit Card")} htmlFor="Credit" className="checkOut__bottom_radio paypal" style={{ background: pay == "card" ? "#F3F5F7" : "#FEFEFE" }}>
                    <input checked={pay === "card" ? "checked" : ""} name='paypal' type="radio" id='Credit' placeholder='1234 1234 1234' onChange={() => setPay("card")} />
                    <label htmlFor="Credit">Pay by Card Credit</label>
                    <img src={Money_back_icon} alt="" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* form and left side End here */}
          {/* this is right side */}
          <div className="checkOut__right">
            <h1 className='checkOut__right_title'>Order summary</h1>
            <div className="checkOut__right_cart_content">
              <div className="checkOut__right_cart_items">
                {product.map(item => {
                  if (cartItems[item.id] !== 0) {
                    return (
                      <CartItem key={item.id} item={item} />
                    )
                  }
                })}
              </div>
              <div className="checkOut__right_cart_items_box">
                <input type="text" placeholder='Input' />
                <button>Apply</button>
              </div>
            </div>
            <div className="checkOut__right_desc">
              <div className="checkOut__right_desc_item">
                <div className="checkOut__right_desc_bonus_left">
                  <img src={frocent} alt="" />
                  <h1>JenkateMW</h1>
                </div>
                <h6>-$25.00 [Remove]</h6>
              </div>
              <div className="checkOut__right_desc_item">
                <p>Shipping</p>
                <h3> {shipping}</h3>
              </div>
              <div className="checkOut__right_desc_item">
                <p>Subtotal</p>
                <h3>$ {subtotal ? subtotal : Math.round(getTotalCartAmount())}</h3>
              </div>
              <div className="checkOut__right_desc_item">
                <p style={{ fontSize: "20px", fontWeight: "500" }}>Total</p>
                <h3 style={{ fontSize: "20px", fontWeight: "500" }}>$ {finalAmount}</h3>
              </div>
            </div>
          </div>
          {/* right side end */}
        </div>
        <button onClick={() => setFinalAmount(finalAmount)} className='checkOut__left_button' type="submit">Place Order</button>
      </form>
    </section >
  )
}

export default CheckOut