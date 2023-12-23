import React from 'react'
import './Offer.scss'
import free_shopping_icno from "../../../assets/free_shopping_icno.png"
import Money_back_icon from "../../../assets/Money-back_icon.png"
import Secure_Payments_icon from '../../../assets/Secure_Payments_icon.png'
import Support_icon from "../../../assets/Support_icon.png"
import NewPrice from '../newPrice/NewPrice'

function Offer() {
    const newPriceTitle = "HUNDREDS of New lower prices!"
    const newPriceText = "It’s more affordable than ever to give every room in your home a stylish makeover"
    const newPriceDesc = "SALE UP TO 35% OFF"


    return (
        <div className='offer'>
            <div className="container">
                <div className="offer__inner">
                    <div className="offer__item">
                        <img src={free_shopping_icno} alt="" />
                        <h1 className="offer__item_title">Free Shipping</h1>
                        <p className="offer__item_text">Order above $200</p>
                    </div>
                    <div className="offer__item">
                        <img src={Money_back_icon} alt="" />
                        <h1 className="offer__item_title">Money-back</h1>
                        <p className="offer__item_text">30 days guarantee</p>
                    </div>
                    <div className="offer__item">
                        <img src={Secure_Payments_icon} alt="" />
                        <h1 className="offer__item_title">Secure Payments</h1>
                        <p className="offer__item_text">Secure Payments</p>
                    </div>
                    <div className="offer__item">
                        <img src={Support_icon} alt="" />
                        <h1 className="offer__item_title">24/7 Support</h1>
                        <p className="offer__item_text">Phone and Email support</p>
                    </div>
                </div>
            </div>
            <div className="newPrice__inner_in_offer">
                <NewPrice title={newPriceTitle} text={newPriceText} desc={newPriceDesc} />
            </div>
        </div>
    )
}

export default Offer