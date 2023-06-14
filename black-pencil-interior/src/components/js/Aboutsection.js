import React from 'react'
import '../css/aboutsection.css'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import top_right from '../../assets/img-top-right.jpg'
import top_left from '../../assets/img-top-left.jpg'
import bottom_left from '../../assets/img-bottom-left.jpg'
import bottom_right from '../../assets/img-bottom-right.jpg'

function Aboutsection() {
    return (
        <>
            <div className='about-main'>
                <div className='about-images'>
                    <img src={top_left} alt='' className='about-images-image' id='img-about-1' />
                    <img src={top_right} alt='' className='about-images-image' id='img-about-2' />
                    <img src={bottom_left} alt='' className='about-images-image' id='img-about-3' />
                    <img src={bottom_right} alt='' className='about-images-image' id='img-about-4' />
                </div>
                <div className='about-text'>
                    <div className='about-text-heading'>
                        Why Choose Us
                    </div>
                    <div className='about-text-subhead'>
                        Besides great interior design, there are lots of reasons to choose Interia. Here are some of the most popular ones.
                    </div>
                    <div className='about-text-content'>
                        <ul className='about-text-list ul'>
                            <li className='about-text-list-item'>
                                <img src={one } alt='' draggable='false' />
                                <p className='about-text-list-content'>
                                    <div className='about-text-list-content-heading'>
                                    Professional Team   
                                    </div>
                                    <div className='about-text-list-content-subtext'>
                                    Our team includes only the best decorators and interior designers in the industry.
                                    </div>
                                </p>
                            </li>
                            <li className='about-text-list-item'>
                                <img src={two} alt='' draggable='false' />
                                <p className='about-text-list-content'>
                                    <div className='about-text-list-content-heading'>
                                    Unusual Ideas
                                    </div>
                                    <div className='about-text-list-content-subtext'>
                                    Our designers generate various yet always original ideas that will surely fit your needs.
                                    </div>
                                </p>
                            </li>
                            <li className='about-text-list-item'>
                                <img src={three } alt='' draggable='false' />
                                <p className='about-text-list-content'>
                                    <div className='about-text-list-content-heading'>
                                    Made with Respect
                                    </div>
                                    <div className='about-text-list-content-subtext'>
                                    All our work is built around respect to our clients, great service, and creativity.
                                    </div>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <button className='about-button btn'>Get a Quote</button>
                </div>
            </div>
        </>
    )
}

export default Aboutsection