import React from 'react'
import '../css/aboutsection.css'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import top_right from '../../assets/img-top-right.jpg'
import top_left from '../../assets/img-top-left.jpg'
import bottom_left from '../../assets/img-bottom-left.jpg'
import bottom_right from '../../assets/img-bottom-right.jpg'
import YellowButton from './YellowButton'
import ListItemOne from './ListItemOne';

function Aboutsection() {
    return (
        <>
            <div className='about-main'>
                <div className='about-images'>
                    <img data-aos="fade-right" data-aos-duration="800" data-aos-delay="100" src={top_left} alt='' className='about-images-image' id='img-about-1' />
                    <img data-aos="fade-right" data-aos-duration="800" data-aos-delay="150" src={top_right} alt='' className='about-images-image' id='img-about-2' />
                    <img data-aos="fade-right" data-aos-duration="800" data-aos-delay="200" src={bottom_left} alt='' className='about-images-image' id='img-about-3' />
                    <img data-aos="fade-right" data-aos-duration="800" data-aos-delay="250" src={bottom_right} alt='' className='about-images-image' id='img-about-4' />
                </div>
                <div className='about-text'>
                    <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="50" className='about-text-heading'>
                        Why Choose Us
                    </div>
                    <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="150" className='about-text-subhead'>
                        Besides great interior design, there are lots of reasons to choose Interia. Here are some of the most popular ones.
                    </div>
                    <div className='about-text-content'>
                        <ul className='about-text-list ul'>
                            <ListItemOne image={one} heading="Professional Team" subhead="Our team includes only the best decorators and interior designers in the industry."/>
                            <ListItemOne image={two} heading="Unusual Ideas" subhead="Our designers generate various yet always original ideas that will surely fit your needs."/>
                            <ListItemOne image={three} heading="Made with Respect" subhead="All our work is built around respect to our clients, great service, and creativity."/>
                        </ul>
                    </div>
                    <YellowButton text="Get a Quote" width="35%" height="3.5rem"/>
                </div>
            </div>
        </>
    )
}


export default Aboutsection