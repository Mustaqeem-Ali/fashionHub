import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our news Letter and stay updated</p>
        <div>
            <input type="email"placeholder='Enter the mail please' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter