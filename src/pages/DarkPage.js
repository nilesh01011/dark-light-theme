import React from 'react'
import Banner from '../components/Banner'
import DarkSectionTwo from '../components/DarkSectionTwo'
import Header from '../components/Header'
import SectionTimeless from '../components/SectionTimeless'

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
        </>
    )
}

export default DarkPage