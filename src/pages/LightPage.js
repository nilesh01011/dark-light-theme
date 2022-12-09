import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import QuickActions from '../components/QuickActions'
import SectionThree from '../components/SectionThree'
import SectionTimeless from '../components/SectionTimeless'
import SectionTwo from '../components/SectionTwo'
import StickyHeader from '../components/StickyHeader'
// import { Link } from 'react-router-dom'
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa'

function MainPage({ theme, cars }) {

    document.querySelector('body').style.cssText = 'background:#fff; color:#000;'

    return (
        <>
            <Header />
            <div>
                <Banner cars={cars} />
                <StickyHeader theme={theme} />
                <SectionTimeless theme={theme} cars={cars} />
                <SectionTwo />
                <SectionThree />
                <QuickActions />
            </div>
            <Footer theme={theme} />
        </>
    )
}

export default MainPage