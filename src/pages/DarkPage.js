import React from 'react'
import Banner from '../components/Banner'
import DarkSectionTwo from '../components/DarkSectionTwo'
import Header from '../components/Header'
import SectionTimeless from '../components/SectionTimeless'
import StickyHeader from '../components/StickyHeader'

function DarkPage({ theme, cars }) {
    document.querySelector('body').style.cssText = 'background:#000; color:#fff;';

    return (
        <>
            <Header />
            <div>
                <Banner cars={cars} />
                <StickyHeader theme={theme} />
                <SectionTimeless theme={theme} />
                <DarkSectionTwo />
            </div>
        </>
    )
}

export default DarkPage