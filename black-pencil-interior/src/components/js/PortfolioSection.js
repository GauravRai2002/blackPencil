import React from 'react'
import SlickSlider from './SlickSlider';
import '../css/portfolioSection.css'

function PortfolioSection() {
    return (
        <>
            <div className='portfolio-text'>
                <div className='port-head'>
                    Our Portfolio
                </div>
                <div className='port-subhead'>
                    All our projects are unique and designed to last. Take a look at our recent works to find it out for yourself.
                </div>
            </div>
            <div className='port-slider'>
                <SlickSlider />
            </div>
        </>
    )
}

export default PortfolioSection