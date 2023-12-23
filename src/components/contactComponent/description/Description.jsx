import React from 'react'
import './Description.scss'
import navigate_icon from '../../../assets/navigate_icon.png'

function Description() {
  return (
    <article className='description'>
      <div className="container">
        <div className="description__inner">
          <div className="contact__navigate">
            <p>Home</p>
            <img src={navigate_icon} alt="" />
            <h6>Contact</h6>
          </div>
          <h1 className='contact__title'>We believe in sustainable <br /> decor. We’re passionate about <br /> life at home.</h1>
          <p className='contact__text'>Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which <br /> can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, <br /> faithful to the shapes of each period, with a touch of the present</p>
        </div>
      </div>
    </article>
  )
}

export default Description