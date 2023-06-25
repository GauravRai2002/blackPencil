import React from 'react'
import Navbar from '../components/js/Navbar'
import Breadcrumb from '../components/js/Breadcrumb'
import Aboutsection from '../components/js/Aboutsection'
import BudgetArea from '../components/js/BudgetArea'
import PortfolioSection from '../components/js/PortfolioSection'

function Home() {
  return (
    <>
        <Navbar/>
        <Breadcrumb/>
        <Aboutsection/>
        <BudgetArea/>
        <PortfolioSection/>
    </>
  )
}

export default Home