import React from 'react'
import Banner from '../components/Banner'
import DarkSectionTwo from '../components/DarkSectionTwo'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SectionTimeless from '../components/SectionTimeless'
// import { Link } from 'react-router-dom'
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa'

function DarkPage({ theme, cars }) {
    document.querySelector('body').style.cssText = 'background:#000; color:#fff;';

    return (
        <>
            <Header />
            <div>
                <Banner cars={cars} />
                <SectionTimeless theme={theme} />
                <DarkSectionTwo />
            </div>
            <Footer theme={theme} />
        </>
    )
}

export default DarkPage