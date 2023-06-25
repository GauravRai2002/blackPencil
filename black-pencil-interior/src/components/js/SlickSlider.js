import React from 'react'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PortfolioComp from './PortfolioComp';
import one from '../../assets/sl1.jpg'
import three from '../../assets/sl3.jpg'
import four from '../../assets/sl4.jpg'
import five from '../../assets/sl5.jpg'
import six from '../../assets/sl6.jpg'
import seven from '../../assets/sl7.jpg'
import eight from '../../assets/sl8.jpg'
import nine from '../../assets/sl9.jpg'
import ten from '../../assets/sl10.jpg'

function SlickSlider() {
    var settings = {
        arrows:true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay:true,
        accessibility:true,
        adaptiveHeight: true,
    };
    return (
        <>
            <Slider {...settings}>
                <PortfolioComp img={one} head="Jane McMillan’s House" subhead="2015, Residential, Atlanta"/>
                <PortfolioComp img={three} head="Jane McMillan’s House" subhead="2015, Residential, Atlanta"/>
                <PortfolioComp img={four} head="Jane McMillan’s House" subhead="2015, Residential, Atlanta"/>
                <PortfolioComp img={five} head="Jane McMillan’s House" subhead="2015, Residential, Atlanta"/>
                <PortfolioComp img={six} head="Jane McMillan’s House" subhead="2015, Residential, Atlanta"/>
                <PortfolioComp img={seven} head="Jane McMillan’s House" subhead="2015, Residential, Atlanta"/>
                <PortfolioComp img={eight} head="Jane McMillan’s House" subhead="2015, Residential, Atlanta"/>
                <PortfolioComp img={nine} head="Jane McMillan’s House" subhead="2015, Residential, Atlanta"/>
                <PortfolioComp img={ten} head="Jane McMillan’s House" subhead="2015, Residential, Atlanta"/>
            </Slider>

        </>
    )
}

export default SlickSlider