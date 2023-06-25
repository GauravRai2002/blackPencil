import React from 'react'
import '../css/slider.css'
import SliderButton from './SliderButton';

function Slider(props) {

    const changeData = (one,two,three,four)=>{
        props.onchange(one,two,three,four);
    }


    return (
        <>
            <div className='slider'>
                <SliderButton onchange={changeData} one='0' two='100' three='200' four='300' value='10 000' width='0' />
                <SliderButton onchange={changeData} one='-100' two='0' three='100' four='200' value='30 000' width='30' />
                <SliderButton onchange={changeData} one='-200' two='-100' three='0' four='100' value='50 000' width='58' />
                <SliderButton onchange={changeData} one='-300' two='-200' three='-100' four='0' value='80 000' width='87' />
            </div>
        </>
    )
}

export default Slider