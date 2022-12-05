import React from 'react'
import { Link } from 'react-router-dom';

function Banner({ cars }) {
    const handleTheme = () => {
        localStorage.setItem('theme', 'black');
    }
    return (
        <div className='w-full h-full flex'>
            {cars === "scorpio" ?
                <Link to='/booknow' onClick={handleTheme}>
                    <img className='bg-right' src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/testz101_optimized/desktop/lp-1920x745.png?rev=33a4d3e0dee34470bb49ea8ed5a818d9&extension=webp" alt='banner-images' />
                </Link> :
                <img src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/amc-hero/thar/bannerbrandpage_1_1920x745.png?rev=d9830f722ede48458cff6881cd5ce90b&extension=webp" alt='banner-images' />
            }
        </div>
    )
}

export default Banner