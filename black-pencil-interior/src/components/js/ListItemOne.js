import React from 'react'
import '../css/listitemone.css'

function ListItemOne(props) {
    return (
        <>
            <li data-aos="fade-left" data-aos-duration="800" data-aos-delay="200" className='list-item'>
                <img src={props.image} alt='' draggable='false' />
                <div className='list-content'>
                    <div className='list-content-heading'>
                        {props.heading}
                    </div>
                    <div className='list-content-subtext'>
                        {props.subhead}
                    </div>
                </div>
            </li>
        </>
    )
}

export default ListItemOne