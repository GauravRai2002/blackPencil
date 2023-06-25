import React from 'react'
import '../css/yellowbutton.css'

function YellowButton(props) {
    return (
        <>
            <button data-aos="fade-left" data-aos-duration="800" data-aos-delay="350" className={`btn`} style={{
                width: `${props.width}`,
                height: `${props.height}`
            }}>{props.text}</button>
        </>
    )
}

export default YellowButton