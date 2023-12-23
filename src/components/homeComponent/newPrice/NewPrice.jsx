import React from 'react'
import './NewPrice.scss'
import sellUp_img from '../../../assets/sellUp_img.png'
import arrow_right_popular from "../../../assets/arrow-right-popular.png"

function NewPrice({ title, text, desc }) {
    return (
        <>
            <div className="newPrice__left">
                <img src={sellUp_img} alt="" />
            </div>
            <div className="newPrice__right">
                <p className="newPrice__right_text">{desc && desc}</p>
                <h1 className="newPrice__right_title">{title}</h1>
                <p className="newPrice__right_desc">{text}</p>
                <a href="#" className="newPrice__right_link"> Shop Now <img src={arrow_right_popular} alt="" /></a>
            </div>

        </>
    )
}

export default NewPrice