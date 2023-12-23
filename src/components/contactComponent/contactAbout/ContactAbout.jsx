import React from 'react'
import './ContactAbout.scss'
import NewPrice from '../../homeComponent/newPrice/NewPrice'

function ContactAbout() {
    const  title = "About Us"
    const text = "3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. Our customer service is always prepared to support you 24/7"

    return (
        <div className='contactAbout'>
            <div className="container">
                <div className="contactAbout__inner">
                    <NewPrice title={title} text={text} />
                </div>
            </div>
        </div>
    )
}

export default ContactAbout