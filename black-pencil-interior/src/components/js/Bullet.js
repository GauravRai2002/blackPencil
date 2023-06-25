import React from 'react'
import '../css/bullet.css'

function Bullet(props) {
  return (
    <>
        <div className='bullet-main'>
            <div className='bullet'>
                
            </div>
            <div className='bullet-text'>
                {props.text}
            </div>
        </div>
    </>
  )
}

export default Bullet