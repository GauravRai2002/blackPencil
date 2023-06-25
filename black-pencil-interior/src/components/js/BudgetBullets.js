import React from 'react'
import '../css/budgetBullets.css'
import Bullet from './Bullet'

function BudgetBullets() {
    return (
        <>
            <div className='budget-bullets-main'>
                <div className='budget-buttlets-main-heading'>
                    What influences the budget
                </div>
                <div className='budget-bullets-main-arrows'>
                    <Bullet text="Flooring"/>
                    <Bullet text="Decorative accessories"/>
                    <Bullet text="Shipping fees"/>
                    <Bullet text="Window treatments"/>
                    <Bullet text="Labor costs"/>
                    <Bullet text="Applicable taxes"/>
                </div>
            </div>
        </>
    )
}

export default BudgetBullets