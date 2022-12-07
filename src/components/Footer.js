import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa'

function Footer({ theme }) {
    const [themePage, setThemePage] = useState('')
    const dynamictheme = localStorage.getItem('theme');

    useEffect(() => {
        setThemePage(dynamictheme);
    }, [dynamictheme]);

    console.log(themePage)

    return (
        <>
            <div id="footer" className='px-[20px] mt-6'>
                <div className='flex flex-col items-center justify-center w-[90%] pb-[40px] mx-auto border-2 border-t-0 border-l-0 border-r-0 border-[#CE0E2D]'>
                    <p>Disclaimer</p>
                    <p>Business Timings are 09:30 hrs to 18:30 hrs Monday to Sunday. Any call back request post 18:30 hrs will be responded to within 24 hrs.</p>
                </div>
                <div className='flex justify-between p-[3rem_15px]'>
                    <div className='flex flex-col gap-[2rem]'>
                        {/* Logo Images */}
                        <div>
                            <Link to='/'>
                                <img className='w-[160px]' src='https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/footer-logo-rise-175x25-red.png?h=30&w=160&rev=16c094d3f5ad416fab318eabcde1ba5b&extension=webp' alt='logo' />
                            </Link>
                        </div>
                        {/* Socials Links */}
                        <div id="footer">
                            <ul className='flex items-center gap-[13px]'>
                                <li className={`${theme === 'black' ? 'border-white' : 'border-black'} flex items-center justify-center p-2 border cursor-pointer rounded-full w-[26px] h-[26px]`}>
                                    <FaFacebookF size={18} />
                                </li>
                                <li className={`${theme === "black" ? 'border-white' : 'border-black'} flex items-center justify-center p-[0.35rem] cursor-pointer border rounded-full w-[26px] h-[26px]`}>
                                    <FaTwitter size={18} />
                                </li>
                                <li className={`${theme === "black" ? 'border-white' : 'border-black'} flex items-center justify-center p-[0.35rem] cursor-pointer border rounded-full w-[26px] h-[26px]`}>
                                    <FaLinkedinIn size={18} />
                                </li>
                                <li className={`${theme === "black" ? 'border-white' : 'border-black'} flex items-center justify-center p-[0.35rem] cursor-pointer border rounded-full w-[26px] h-[26px]`}>
                                    <FaYoutube size={18} />
                                </li>
                                <li className={`${theme === "black" ? 'border-white' : 'border-black'} flex items-center justify-center p-[0.35rem] cursor-pointer border rounded-full w-[26px] h-[26px]`}>
                                    <FaInstagram size={18} />
                                </li>
                            </ul>
                        </div>
                        {/* Download Links */}
                        <div>
                            <h4 className='font-bold cursor-pointer text-[18px]'>Download Apps</h4>
                        </div>
                    </div>
                    <div>
                        <h6 className='font-bold text-[14px] mb-[25px]'>Mahindra Auto</h6>
                        <ul className='flex flex-col gap-[10px]'>
                            <li className={`${theme === "black" ? 'text-gray-400' : 'text-[#313131]'} text-[14px] hover:text-[#E51636] cursor-pointer`}>About Company</li>
                            <li className={`${theme === "black" ? 'text-gray-400' : 'text-[#313131]'} text-[14px] hover:text-[#E51636] cursor-pointer`}>Careers</li>
                            <li className={`${theme === "black" ? 'text-gray-400' : 'text-[#313131]'} text-[14px] hover:text-[#E51636] cursor-pointer`}>Contact Us</li>
                            <li className={`${theme === "black" ? 'text-gray-400' : 'text-[#313131]'} text-[14px] hover:text-[#E51636] cursor-pointer`}>FAQs</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold text-[14px] mb-[25px]'>Media Relations</h6>
                        <ul className='flex flex-col gap-[10px]'>
                            <li className={`${theme === "black" ? 'text-gray-400' : 'text-[#313131]'} text-[14px] hover:text-[#E51636] cursor-pointer`}>Media Kit</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold text-[14px] mb-[25px]'>Vehicle Categories</h6>
                        <ul className='flex flex-col gap-[10px]'>
                            <li className={`${theme === "black" ? 'text-gray-400' : 'text-[#313131]'} text-[14px] hover:text-[#E51636] cursor-pointer`}>SUV</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-bold text-[14px] mb-[25px]'>Trending Pages</h6>
                        <ul className='flex flex-col gap-[10px]'>
                            <li className={`${theme === "black" ? 'text-gray-400' : 'text-[#313131]'} text-[14px] hover:text-[#E51636] cursor-pointer`}>Book a Test Drive</li>
                            <li className={`${theme === "black" ? 'text-gray-400' : 'text-[#313131]'} text-[14px] hover:text-[#E51636] cursor-pointer`}>Locate a Dealer</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer