import React from 'react'
import './Hero.css'
import logo from '../../assets/LogoDesignBlack.png'

const Hero = () => {
    return (
        <div class="hero">
            <div className="geo geo-a"></div>
            <div className="geo geo-b"></div>
            <div className="geo geo-c"></div>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero