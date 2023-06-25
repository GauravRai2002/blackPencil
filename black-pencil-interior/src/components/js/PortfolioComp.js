import React from 'react'
import '../css/portfoliocomp.css'

function PortfolioComp(props) {
  return (
    <>
        <div className='component-main'>
            <div className='component-image'>
                <img src={props.img} alt='' className='comp-img'/>
            </div>
            <div className='component-text'>
                <div className='component-heading'>
                    {props.head}
                </div>
                <div className='component-subhead'>
                    {props.subhead}
                </div>
            </div>
        </div>
    </>
  )
}

export default PortfolioComp