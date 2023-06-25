import React from 'react'
import '../css/breadcrumb.css'
import facebook from '../../assets/facebook-color-icon.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import YellowButton from './YellowButton'

function Breadcrumb() {

    const headref = useRef(null)
    const textref = useRef(null)
    const btnref = useRef(null)

    useEffect(() => {
      gsap.fromTo(headref.current,{
          opacity:0,
          x:500,
      },{
        opacity:1,
        x:0,
        duration:1.5,
        delay:0.5
    })
    }, [headref])
    useEffect(() => {
      gsap.fromTo(textref.current,{
          opacity:0,
          x:500,
      },{
        opacity:1,
        x:0,
        duration:1.75,
        delay:0.75
    })
    }, [textref])
    useEffect(() => {
      gsap.fromTo(btnref.current,{
          opacity:0,
          x:500,
      },{
        opacity:1,
        x:0,
        duration:2,
        delay:1
    })
    }, [btnref])
    


    return (
        <>
            <div className='breadcrumb-main'>
                <div className='breadcrumb-social-media'>
                    <a data-aos="fade-right" data-aos-delay="100" href='' className='link'><img className='social-img-logo' src={facebook} alt=''/></a>
                    <a data-aos="fade-right" data-aos-delay="300" href='' className='link'><img className='social-img-logo' src={instagram} alt=''/></a>
                    <a data-aos="fade-right" data-aos-delay="600" href='' className='link'><img className='social-img-logo' src={youtube} alt=''/></a>
                </div>

                <div className='breadcrumb-text-area'>
                    <div ref={headref} className='breadcrumb-text-area-heading'>
                        Interior design and decor
                        for your home
                    </div>

                    <div ref={textref} className='breadcrumb-text-area-text'>
                    Our team creates comfortable spaces for our clients. We’ve been designing your everyday life and work through great ideas since 1999.
                    </div>

                    <YellowButton text="Free Consultation"/>
                </div>

            </div>
        </>
    )
}

export default Breadcrumb