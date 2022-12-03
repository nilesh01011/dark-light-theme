import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import QuickActions from '../components/QuickActions'
import SectionThree from '../components/SectionThree'
import SectionTimeless from '../components/SectionTimeless'
import SectionTwo from '../components/SectionTwo'
import StickyHeader from '../components/StickyHeader'

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
        </>
    )
}

export default MainPage