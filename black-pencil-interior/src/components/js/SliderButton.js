import React from 'react'
import '../css/sliderbutton.css'

function SliderButton(props) {
    
    function changeWidth(width){
        var root = document.querySelector(':root');
        root.style.setProperty('--width', `${width}%`);
        props.onchange(props.one,props.two,props.three,props.four)
    }

    return (
        <>
            <div onClick={() => { changeWidth( props.width) }} className='slider-content slider-1'>
                ${props.value}
            </div>
        </>
    )
}

export default SliderButton