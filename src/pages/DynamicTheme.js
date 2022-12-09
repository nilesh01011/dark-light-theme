import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function DynamicTheme() {
    const [themePage, setThemePage] = useState('')
    const dynamictheme = localStorage.getItem('theme');

    useEffect(() => {
        setThemePage(dynamictheme);
    }, [dynamictheme]);


    if (themePage === 'white') {
        document.querySelector('body').style.cssText = 'background:#fff; color:#000;'
    } else {
        document.querySelector('body').style.cssText = 'background:#212121; color:#fff;';
    }

    return (
        <>
            <Header noHeader />
            <div className={`h-full pt-[35px] px-8 pb-10`}>
                <div className='w-full flex justify-center items-center'>
                    <ul id='bookNowTopHeader' className='flex justify-between items-center w-[350px] relative'>
                        <li className={`${themePage === 'white' ? 'text-black' : 'text-white'} active text-sm steps`}>
                            <span>Vehicle</span>
                        </li>
                        <li className='line'></li>
                        <li className={`${themePage === 'white' ? 'text-black' : 'text-white'} text-sm steps`}>
                            <span>Dealer</span>
                        </li>
                        <li className='line'></li>
                        <li className={`${themePage === 'white' ? 'text-black' : 'text-white'} text-sm steps`}>
                            <span>Details</span>
                        </li>
                        <li className='line'></li>
                        <li className={`${themePage === 'white' ? 'text-black' : 'text-white'} text-sm steps`}>
                            <span>Summary</span>
                        </li>
                    </ul>
                </div>
                {/* top steps end */}
                <div className='mt-10'>
                    <h2 className={`font-bold text-2xl`}>Select Vehicle</h2>
                </div>
                {/* title ends */}
                <div className='flex gap-[20px] w-full h-full mt-10'>
                    <div className={` ${themePage === 'white' ? 'bg-white' : 'bg-[#333]'}  card w-[380px] shadow-md h-max p-[18px] rounded-2xl`}>
                        <div className='relative w-full'>
                            <span className={`${themePage === 'white' ? 'text-black' : 'text-white'} font-bold text-2xl uppercase`}>Thar</span>
                            <img className='w-full mt-[-10px]' src='https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/all-vehicles/suv/thar/240x160_new.png?h=160&w=240&rev=ff686918d26240c9bc7dfb1604d71aac&extension=webp' alt='images' />
                        </div>
                        {/* images and title name end */}
                        <div className='text-right'>
                            <span className={`text-lg`}>Starts at <b>1 359 101.00*</b></span>
                        </div>
                        {/* price tags end */}
                        <div className='flex items-center justify-between h-[42px] mt-2 w-[90%] mx-auto'>
                            <div className='relative'>
                                <Link to="/" className={`w-[145px] px-[2.7rem] py-[0.7rem] h-full font-bold border border-1 ${themePage === 'white' ? 'border-black' : 'border-white'} hover:text-white hover:bg-[#ea3a51] hover:border-[#ea3a51]`}>
                                    Explore
                                </Link>
                            </div>
                            <div className='relative'>
                                <button className='w-[145px] px-[2rem] py-[0.7rem] h-full bg-[#ea3a51] font-bold text-white'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={` ${themePage === 'white' ? 'bg-white' : 'bg-[#333]'}  card w-[380px] shadow-md h-max p-[18px] rounded-2xl`}>
                        <div className='relative w-full'>
                            <span className={`${themePage === 'white' ? 'text-black' : 'text-white'} font-bold text-2xl uppercase`}>SCORPIO-N</span>
                            <img className='w-full mt-[-10px] p-2' src='https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/my-vehicles/SCORPIO-N/MM980/C1DEEPFRST_M?02122022' alt='images' />
                        </div>
                        {/* images and title name end */}
                        <div className='text-right'>
                            <span className={`text-lg`}>Starts at ******</span>
                        </div>
                        {/* price tags end */}
                        <div className='flex items-center justify-between h-[42px] mt-2 w-[90%] mx-auto'>
                            <div className='relative'>
                                <Link to="/dark" className={`w-[145px] px-[2.7rem] py-[0.7rem] h-full font-bold border border-1 ${themePage === 'white' ? 'border-black' : 'border-white'} hover:text-white hover:bg-[#ea3a51] hover:border-[#ea3a51]`}>
                                    Explore
                                </Link>
                            </div>
                            <div className='relative'>
                                <button className='w-[145px] px-[2rem] py-[0.7rem] h-full bg-[#ea3a51] font-bold text-white'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DynamicTheme