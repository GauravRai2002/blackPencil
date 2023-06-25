import React, { useState } from 'react'
import '../css/budgetsection.css'
import Slider from './Slider'
import CarouselItem from './CarouselItem'
import one from '../../assets/int1.jpg'
import two from '../../assets/int2.jpg'
import three from '../../assets/int3.jpg'
import { useEffect } from 'react'
import BudgetBullets from './BudgetBullets'

function BudgetArea() {

    const [leftOne, setLeftOne] = useState(0);
    const [leftTwo, setLeftTwo] = useState(100);
    const [leftThree, setLeftThree] = useState(200);
    const [leftFour, setLeftFour] = useState(300);
    function setLeft(one,two,three,four) {
            setLeftOne(one);
            setLeftTwo(two);
            setLeftThree(three);
            setLeftFour(four);
    }
    

    return (

        <>
            <div className='budget-main'>
                <div className='budget-text'>
                    <div className='budget-heading'>
                        Design options for your budget
                    </div>
                    <div className='budget-subhead'>
                        Choose your budget
                    </div>
                </div>
                <Slider onchange={setLeft}/>
                <div className='budget-carousel'>
                    <div className='budget-carousel-content'>
                        <CarouselItem  left={leftOne} value='10 000' imgOne={one} imgTwo={two} imgThree={three}/>
                        <CarouselItem  left={leftTwo} value='30 000' imgOne={one} imgTwo={two} imgThree={three}/>
                        <CarouselItem  left={leftThree} value='50 000' imgOne={one} imgTwo={two} imgThree={three}/>
                        <CarouselItem  left={leftFour} value='80 000' imgOne={one} imgTwo={two} imgThree={three}/>
                    </div>
                </div>
                <div className='budget-bullets'>
                    <BudgetBullets/>
                </div>
            </div>
        </>
    )
}

export default BudgetArea