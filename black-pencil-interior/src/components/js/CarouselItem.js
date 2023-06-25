import React from 'react'
import '../css/carouselItem.css'
function CarouselItem(props) {
    return (
        <div className='carousel' style={{
            left:`${props.left}vw`
        }}>
            <div className='carousel-text'>
                ${props.value}
            </div>
            <div className='carousel-img'>
                <div className='img-cover'>
                    <img src={props.imgOne} alt='' className='carousel-item-img' />
                </div>
                <div className='img-cover'>
                    <img src={props.imgTwo} alt='' className='carousel-item-img' />
                </div>
                <div className='img-cover'>
                    <img src={props.imgThree} alt='' className='carousel-item-img' />
                </div>
            </div>
        </div>
    )
}

export default CarouselItem