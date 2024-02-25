import React from 'react'

const header = () => {
  return (
   <section className='h-wrapper'>
     <div className='flexCenter paddings h-container'>
        <div className='h-container'>
            <img src="./logo.png" alt="logo" width={100}/>
            <div className='h-menu'>
                <a href="">Residencies</a>
                <a href="">Our Values</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className='button'><a href="">Contact</a></button>
            </div>
        </div>
    </div>
   </section>
  )
}

export default header;