import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function StickyHeader({ theme }) {
    const ref = useRef(null);
    const [imgActive, setImgActive] = useState(false);

    const stickyBanner = () => {
        const position = window.pageYOffset;

        if (window.scrollY === 0) {
            setImgActive(false)
        }

        if (window.pageYOffset === ref.current.offsetTop) {
            setImgActive(position);
        }
    }

    window.addEventListener('scroll', stickyBanner)

    const handleTheme = () => {
        localStorage.setItem('theme', theme);
    }

    return (
        <>
            <div ref={ref} className='sticky top-0 w-full h-[60px] bg-[#313131] px-8 py-3 flex'>
                <div className={`h-full w-[130px] flex items-center justify-center text-white`}>
                    <img className={!imgActive ? 'hidden' : 'block'} src='https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/brandlogo/thar-logo.png?h=74&w=207&rev=906c5f0da25d44c3a3126f90e3114db3&extension=webp' alt='sticky-logo' />
                </div>
                <ul className="flex justify-center items-center h-full w-full">
                    <li className="flex items-center">
                        <a
                            className="px-3 py-2 flex items-center font-thin text-xl text-white hover:mb-2 uppercase transition-all delay-50 ease-in-out"
                            href="#pablo"
                        ><span className="ml-2">Download Brochure</span>
                        </a>
                    </li>
                    <li className="flex items-center">
                        <Link to='/booknow' onClick={handleTheme}
                            className="px-3 py-2 flex items-center font-thin text-xl text-white hover:mb-2 uppercase transition-all delay-50 ease-in-out"
                            href="#pablo"
                        >
                            <span className="ml-2">Book Now</span>
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <a
                            className="px-3 py-2 flex items-center font-thin text-xl text-white hover:mb-2 uppercase transition-all delay-50 ease-in-out"
                            href="#pablo"
                        >
                            <span className="ml-2">Test Drive</span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default StickyHeader